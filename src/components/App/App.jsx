import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';

import { Container } from './App.styled';
import { NotifyMessage } from 'components/NotifyMessage/NotifyMessage';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 && <FilterForm />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <NotifyMessage message="There is no contacts yet" />
        )}
      </Section>
    </Container>
  );
}
