import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactListItem from 'components/Phonebook/ContactListItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
