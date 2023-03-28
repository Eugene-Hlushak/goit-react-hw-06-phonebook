import { useState } from 'react';
import { addContact } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { AddContactForm, FormInput, FormLabel } from './PhoneBook.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  let [name, setName] = useState('');
  let [number, setNumber] = useState('');

  const onChangeHandler = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const saveNewContact = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AddContactForm onSubmit={saveNewContact}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onChangeHandler}
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={onChangeHandler}
          required
        />
      </FormLabel>
      <button type="submit">Add contact</button>
    </AddContactForm>
  );
}
