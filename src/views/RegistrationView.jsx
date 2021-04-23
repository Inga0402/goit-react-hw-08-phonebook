import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operation";
import Button from "../components/Button/Button";
import * as yup from "yup";
import { createUseStyles } from "react-jss";
import { TextField } from "formik-material-ui";
import authImg from "./img-view-bg/reg-log-bg.jpg";
import Container from "../components/Container";

const schema = yup.object({
  name: yup.string().required("Login field is required"),
  email: yup.string().email().required("Email field is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password field is required"),
});

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
    fontSize: 16,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    opacity: 0.8,
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

const RegistrationView = () => {
  const dispatch = useDispatch();
  const st = useStyles();

  const handleRegisterClick = (contactObj) =>
    dispatch(authOperations.registration(contactObj));

  const initialValues = { name: "", email: "", password: "" };

  const handleSubmit = (
    { name, email, password },
    { resetForm, setSubmitting }
  ) => {
    handleRegisterClick({ name, email, password });
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
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={st.form}>
          <Field
            component={TextField}
            type="text"
            name="name"
            label="Login"
            variant="outlined"
            margin="dense"
          />
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
          <Button className={st.btn} value="Register" type="submit" />
        </Form>
      </Formik>
    </Container>
  );
};

export default RegistrationView;
