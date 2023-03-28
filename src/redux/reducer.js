import { nanoid } from 'nanoid';

export const contactsInitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const rootReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload.contact];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload.id);

    case 'contacts/showFilteredContacts':
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.name.toLowerCase())
      );

    default:
      return state;
  }
};
