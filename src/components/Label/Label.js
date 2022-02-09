import React from "react";
import PropTypes from "prop-types";
import classes from "./Label.module.scss";

const Label = ({ labelName, className }) => {
  return (
    <div
      className={`${classes.label}
  ${className}`}
    >
      {labelName}
    </div>
  );
};

export default Label;

Label.propTypes = {
  labelName: PropTypes.string,
  className: PropTypes.string
};

Label.defaultProps = {
  labelName: "label",
  className: "label"
};
