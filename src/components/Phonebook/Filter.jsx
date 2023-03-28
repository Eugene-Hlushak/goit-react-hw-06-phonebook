import { useDispatch } from 'react-redux';
import { showFilteredContacts } from 'redux/actions';
import { FilterLabel, FormInput } from './PhoneBook.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const filteredContacts = e => dispatch(showFilteredContacts(e.target.value));

  return (
    <FilterLabel>
      Find contact by name
      <FormInput type="text" name="filter" onChange={filteredContacts} />
    </FilterLabel>
  );
}
