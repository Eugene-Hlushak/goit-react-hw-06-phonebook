import { useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { Title, Container } from './Phonebook/PhoneBook.styled';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';

export function App() {
  const dispatch = useDispatch();

  // const showContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  // const onChangeHandler = e => setFilter(e.target.value);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
}
