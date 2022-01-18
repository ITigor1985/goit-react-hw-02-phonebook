import ContactsItem from "../ContactsItem";
import propTypes from "prop-types";
const ContactList = ({ filterContacts, filter, onDelete }) => {
  return (
    <ul>
      {filterContacts(filter).map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
