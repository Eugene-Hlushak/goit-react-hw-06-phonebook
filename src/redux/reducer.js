import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, showContacts } from './actions';
import { nanoid } from 'nanoid';
import { statusFilter } from './constants';

const contactsInitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, { payload }) => {
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

  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

// export const contactsReducer = createReducer(contactsInitialState, builder => {
//   builder
//     .addCase(addContact, (state, { payload }) => {
//       if (
//         state.find(
//           contact =>
//             contact.name.toLowerCase() === payload.contact.name.toLowerCase()
//         )
//       ) {
//         alert(`${payload.contact.name} is already in contacts`);
//         return;
//       }
//       return [...state, payload.contact];
//     })

//     .addCase(deleteContact, (state, { payload }) =>
//       state.filter(contact => contact.id !== payload.id)
//     );
// });

const filterInitialState = statusFilter.filter;

export const filterReducer = createReducer(filterInitialState, {
  [showContacts]: (state, { payload }) => {
    return {
      ...state,
      status: payload,
    };
  },
});

// export const filterReducer = createReducer(filterInitialState, builder => {
//   builder.addCase(showContacts, (state, { payload }) => {
//     return { ...state, status: payload };
//   });
// });
