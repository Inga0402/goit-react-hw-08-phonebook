import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsSelectors from "../../redux/contacts/contacts-selectors";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";

const Filter = ({ ...props }) => {
  const value = useSelector(ContactsSelectors.getFilter);
  const dispatch = useDispatch();

  const changesFilter = (event) => dispatch(changeFilter(event.target.value));

  return (
    <>
      <input
        {...props}
        name="name"
        type="text"
        value={value}
        onChange={changesFilter}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
