import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item, List } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </List>
  );
};
