import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: { contact: { id: nanoid(), name, number } },
    };
  }
);

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return { payload: { id: contactId } };
  }
);

export const showContacts = createAction('filter/showContacts', value => {
  return {
    payload: `${value}`,
  };
});
