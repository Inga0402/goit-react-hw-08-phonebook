import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import Container from "./components/Container";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./components/Routes/PublicRoute";
import authOperations from "./redux/auth/auth-operation";
import authSelectors from "./redux/auth/auth-selectors";
import AppBar from "./components/PageHeader/AppBar";
import "react-toastify/dist/ReactToastify.css";

const RegistrationView = lazy(() => import("./views/RegistrationView"));
const LoginFormView = lazy(() => import("./views/LoginFormView"));
const PhoneContactsView = lazy(() => import("./views/PhoneContactsView"));

export default function App() {
  const dispatch = useDispatch();
  const authLoading = useSelector(authSelectors.getIsAuthLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !authLoading && (
      <Container>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
        />

        <AppBar />
        <Switch>
          <Suspense fallback={<h2>Loading....</h2>}>
            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegistrationView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginFormView />
            </PublicRoute>
            <PrivateRoute exact path="/contacts" redirectTo="/login">
              <PhoneContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
