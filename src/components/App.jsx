import { GlobalStyle } from './GlobalStyle';
import { Title, Container } from './Phonebook/PhoneBook.styled';

import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';

export function App() {
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
