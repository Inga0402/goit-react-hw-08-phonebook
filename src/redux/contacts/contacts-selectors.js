import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getLoading = (state) => state.contacts.isLoading;

const getErrorMessage = (state) => state.contacts.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFilteredContacts = (contacts) => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((text) =>
        text.name.toLowerCase().includes(normalizedFilter)
      );
    };
    return getFilteredContacts(contacts);
  }
);

const ContactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
  getErrorMessage,
  getLoading,
};

export default ContactsSelectors;
