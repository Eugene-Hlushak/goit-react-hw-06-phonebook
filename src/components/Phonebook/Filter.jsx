import { useDispatch } from 'react-redux';
import { showContacts } from 'redux/filterSlice';
import { FilterLabel, FormInput } from './PhoneBook.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contact by name
      <FormInput
        type="text"
        name="filter"
        onChange={e => dispatch(showContacts(e.target.value))}
      />
    </FilterLabel>
  );
}
