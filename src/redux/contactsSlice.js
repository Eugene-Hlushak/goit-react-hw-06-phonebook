import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        if (
          state.find(
            contact =>
              contact.name.toLowerCase() === payload.contact.name.toLowerCase()
          )
        ) {
          alert(`${payload.contact.name} is already in contacts`);
          return;
        }

        return [...state, payload.contact];
      },
      prepare(name, number) {
        return {
          payload: { contact: { id: nanoid(), name, number } },
        };
      },
    },
    deleteContact: {
      reducer: (state, { payload }) => {
        return state.filter(contact => contact.id !== payload.id);
      },
      prepare(contactId) {
        return { payload: { id: contactId } };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
