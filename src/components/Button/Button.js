import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.scss";

const Button = ({ className, onClick, text }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Click me"
};

export default Button;
