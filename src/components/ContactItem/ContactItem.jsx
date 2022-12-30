import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  Contact,
  ContactName,
  ContactNumber,
  IconButton,
} from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Contact>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <IconButton type="button" aria-label="delete" onClick={deleteHandler}>
        <FaRegTrashAlt size={25} />
      </IconButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
