import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.scss";

const Button = ({ className, onClick, text, submit }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      type={submit ? "submit" : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  submit: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  submit: false
};

export default Button;
