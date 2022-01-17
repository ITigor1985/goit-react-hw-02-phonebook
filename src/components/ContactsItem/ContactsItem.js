import propTypes from "prop-types";
const ContactsItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <span>{name}:</span>
      <span>{number} </span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
