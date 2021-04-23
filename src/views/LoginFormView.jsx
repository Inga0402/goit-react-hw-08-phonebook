import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operation";
import { Formik, Form, Field } from "formik";
import { createUseStyles } from "react-jss";
import { TextField } from "formik-material-ui";
import Button from "../components/Button/Button";
import authImg from "./img-view-bg/reg-log-bg.jpg";
import Container from "../components/Container";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    height: 700,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "black",
  },
  form: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 8,
    width: 300,
    height: 160,
    fontSize: 16,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    opacity: 0.7,
    backdropFilter: "blur(100px)",
    border: "1px solid #A52A2A",
  },
  btn: {
    backgroundColor: "#A52A2A",
    color: "#fff",
    padding: 4,
    borderRadius: 7,
    fontWeight: 500,
    border: "1px solid #A52A2A",
    "&:hover": {
      color: "#A52A2A",
      backgroundColor: "#fff",
      border: "1px solid #A52A2A",
      fontWeight: 800,
    },
  },
});

const LoginFormView = () => {
  const dispatch = useDispatch();
  const st = useStyles();

  const handleSignInClick = (contactObj) =>
    dispatch(authOperations.signIn(contactObj));

  const initialValues = { email: "", password: "" };

  const handleSubmit = ({ email, password }, { resetForm, setSubmitting }) => {
    handleSignInClick({ email, password });
    setSubmitting(false);
    resetForm();
  };

  return (
    <Container
      className={st.container}
      style={{
        backgroundImage: `url(${authImg})`,
      }}
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={st.form}>
          <Field
            component={TextField}
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="dense"
          />
          <Field
            component={TextField}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            margin="dense"
          />
          <Button value="Sign In" type="submit" className={st.btn} />
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginFormView;
