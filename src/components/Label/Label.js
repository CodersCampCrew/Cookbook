import React from "react";
import PropTypes from "prop-types";
import classes from "./Label.module.scss";

const Label = ({ labelName }) => {
  return <div className={classes.label}>{labelName}</div>;
};

export default Label;

Label.propTypes = {
  labelName: PropTypes.string
};

Label.defaultProps = {
  labelName: "label"
};
