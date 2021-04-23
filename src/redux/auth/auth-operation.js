import axios from "axios";
import authActions from "./auth-actions";
import { toast } from "react-toastify";

const BASE_URL = "https://goit-phonebook-api.herokuapp.com";

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const registration = (contactObj) => async (dispatch) => {
  dispatch(authActions.registrationRequest());
  try {
    const { data } = await axios.post("/users/signup", contactObj);
    token.set(data.token);
    dispatch(authActions.registrationSuccess(data));
  } catch (error) {
    dispatch(
      authActions.registrationError(toast.error("Please enter correct data"))
    );
  }
};

const signIn = (contactObj) => async (dispatch) => {
  dispatch(authActions.signInRequest());

  try {
    const { data } = await axios.post("/users/login", contactObj);
    token.set(data.token);
    dispatch(authActions.signInSuccess(data));
  } catch (error) {
    dispatch(authActions.signInError(toast.error("Please enter correct data")));
  }
};

const signOut = () => async (dispatch) => {
  dispatch(authActions.signOutRequest());
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(authActions.signOutSuccess());
  } catch (error) {
    dispatch(authActions.signOutError(error.message));
  }
};

const fetchCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const { data } = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const authOperations = { registration, signIn, signOut, fetchCurrentUser };

export default authOperations;
