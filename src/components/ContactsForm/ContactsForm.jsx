import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import * as yup from 'yup';
import 'yup-phone';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import {
  AddButton,
  Error,
  FormContact,
  Input,
  InputWrapper,
  Label,
} from './ContactsForm.styled';

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("That doesn't look like a contact name")
    .trim()
    .required('Contact name is required'),
  number: yup
    .string()
    .phone(
      'UA',
      true,
      'Number must be a valid phone number (+380 XX XXX XX XX)'
    )
    .required('Contact phone number is required'),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const submitHandler = ({ name, number }, { resetForm }) => {
    const normilizedContacts = {
      name: name.trim(),
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      return toast.error(`${name} is already in your contacts`);
    }
    dispatch(addContact(normilizedContacts));
    resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={contactsSchema}
    >
      <FormContact autoComplete="off">
        <InputWrapper>
          <Label htmlFor={nameId}>
            Name
            <Input
              id={nameId}
              type="text"
              name="name"
              placeholder="Enter name"
            />
          </Label>

          <Label htmlFor={numberId}>
            Phone number
            <Input
              id={numberId}
              type="tel"
              name="number"
              placeholder="Enter phone number"
            />
          </Label>
        </InputWrapper>

        <ErrorMessage component={Error} name="name" />
        <ErrorMessage component={Error} name="number" />
        <Toaster position="top-right" reverseOrder={false} />
        <AddButton type="submit">Add contact</AddButton>
      </FormContact>
    </Formik>
  );
};
