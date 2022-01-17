import ContactsItem from "../ContactsItem";
import propTypes from "prop-types";
const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul>
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, number, id }) => (
              <ContactsItem
                key={id}
                name={name}
                id={id}
                number={number}
                onDelete={onDelete}
              />
            ))
        : contacts.map(({ name, number, id }) => (
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
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  filter: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
