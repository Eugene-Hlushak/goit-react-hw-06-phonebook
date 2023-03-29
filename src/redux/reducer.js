import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';
import { statusFilter } from './constants';

const contactsInitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      if (state.find(({ name }) => name === payload.contact.name)) {
        alert(`${payload.contact.name} is already in contacts`);
        return;
      }
      return [...state, payload.contact];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const filterInitialState = statusFilter.filter;

const filterReducer = (state = filterInitialState, { type, payload }) => {
  console.log('payload ---.', payload, 'state --->', state);
  switch (type) {
    case 'filter/showContacts':
      return {
        ...state,
        status: payload.value,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
