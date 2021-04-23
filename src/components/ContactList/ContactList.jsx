import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import { useEffect } from "react";
import Button from "../Button";

const useStyles = createUseStyles({
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  number: {
    fontStyle: "italic",
  },
  btn: {
    marginLeft: 20,
    width: 70,
    backgroundColor: "#A52A2A",
    color: "#fff",
    padding: 4,
    borderRadius: 7,
    fontWeight: 600,
    border: "1px solid #A52A2A",
    "&:hover": {
      color: "#A52A2A",
      backgroundColor: "#fff",
      border: "1px solid #A52A2A",
      fontWeight: 600,
    },
  },
});

const ContactList = () => {
  const dispatch = useDispatch();
  const st = useStyles();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const handleDeleteContact = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={st.listItem}>
          <span>{name}:</span>
          <span className={st.number}>{number}</span>
          <Button
            type="button"
            className={st.btn}
            onClick={() => handleDeleteContact(id)}
            value="Delete"
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
