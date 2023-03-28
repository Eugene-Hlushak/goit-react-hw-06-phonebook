import PropTypes from 'prop-types';
import { deleteContact } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { ContactItem, Contact } from './PhoneBook.styled';

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const removeContact = id => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Contact>
        {contact.name}: {contact.number}
      </Contact>
      <button onClick={() => removeContact(contact.id)}>Delete</button>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape().isRequired,
};
