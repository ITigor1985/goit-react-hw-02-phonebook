import propTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};
export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
};
