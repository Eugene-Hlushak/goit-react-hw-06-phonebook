import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  console.log(name, number);
  return {
    type: 'contacts/addContact',
    payload: { contact: { id: nanoid(), name, number } },
  };
};

export const deleteContact = contactId => {
  console.log(contactId);
  return { type: 'contacts/deleteContact', payload: { id: contactId } };
};

export const showFilteredContacts = value => {
  console.log(value);
  return {
    type: 'contacts/showFilteredContacts',
    payload: { name: value },
  };
};
