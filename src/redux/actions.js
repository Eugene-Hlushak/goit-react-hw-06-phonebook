import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: { contact: { id: nanoid(), name, number } },
  };
};

export const deleteContact = contactId => {
  return { type: 'contacts/deleteContact', payload: { id: contactId } };
};

export const showContacts = value => {
  return {
    type: 'filter/showContacts',
    payload: { value },
  };
};
