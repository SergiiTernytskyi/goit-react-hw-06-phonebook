import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FormWrapper, Input, Label } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const inputHandler = event => {
    const form = event.target;

    dispatch(filterContacts(form.value));
  };

  const filterId = nanoid();

  return (
    <FormWrapper>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input
        id={filterId}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={inputHandler}
        value={filter}
      />
    </FormWrapper>
  );
};
