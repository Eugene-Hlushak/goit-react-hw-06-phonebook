import { useDispatch } from 'react-redux';
import { showContacts } from 'redux/filterSlice';
import { FilterLabel, FormInput } from './PhoneBook.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const filteredContacts = e => dispatch(showContacts(e.target.value));

  return (
    <FilterLabel>
      Find contact by name
      <FormInput type="text" name="filter" onChange={filteredContacts} />
    </FilterLabel>
  );
}
