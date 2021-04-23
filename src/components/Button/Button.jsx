import PropTypes from "prop-types";

const Button = ({ value, ...props }) => {
  return <button {...props}>{value}</button>;
};
Button.propTypes = {
  onclick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
