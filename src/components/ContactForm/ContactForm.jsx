import { Formik, Form, Field } from "formik";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import contactOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import * as yup from "yup";
import { TextField } from "formik-material-ui";
import { toast } from "react-toastify";
import { createUseStyles } from "react-jss";

const schema = yup.object().shape({
  name: yup.string().required("First name is a required field"),
  number: yup
    .string()
    .min(10, "The phone number must be 10 characters long.")
    .max(13, "The phone number must be 13 characters long.")
    .required("Phone number is a required field"),
});

const useStyles = createUseStyles({
  form: {
    padding: 40,
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
    marginTop: 10,
    height: 30,
    backgroundColor: "#A52A2A",
    color: "#fff",
    padding: 5,
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

const initialValues = { name: "", number: "" };

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const st = useStyles();

  const handleSubmiting = (contactObj) => {
    if (contacts.some(({ name }) => name === contactObj.name)) {
      return toast.warn("This contact alredy exist");
    }
    dispatch(contactOperations.addContact(contactObj));
  };

  const handleContactFormSubmit = (
    { name, number },
    { resetForm, setSubmitting }
  ) => {
    handleSubmiting({ name, number });
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleContactFormSubmit}
    >
      <Form className={st.form}>
        <Field
          component={TextField}
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          margin="dense"
        />
        <Field
          component={TextField}
          type="tel"
          name="number"
          label="Number"
          variant="outlined"
          margin="dense"
        />
        <Button type="submit" value="Create contact" className={st.btn} />
      </Form>
    </Formik>
  );
};

export default ContactForm;
