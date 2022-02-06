import React from "react";
import PropTypes from "prop-types";
import classes from "./Label.module.scss";

const Label = ({ labelName }) => {
  return <span className={classes.label}>{labelName}</span>;
};

export default Label;

Label.propTypes = {
  labelName: PropTypes.string
};

Label.defaultProps = {
  labelName: "label"
};
