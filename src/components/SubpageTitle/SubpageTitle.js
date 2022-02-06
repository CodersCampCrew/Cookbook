import React from "react";
import PropTypes from "prop-types";
import classes from "./SubpageTitle.module.scss";

const SubpageTitle = ({ subpageTitle, className }) => {
  return (
    <div className={`${classes.subpageTitle} ${className}`}>{subpageTitle}</div>
  );
};

export default SubpageTitle;

SubpageTitle.propTypes = {
  subpageTitle: PropTypes.string,
  className: PropTypes.string.isRequired
};

SubpageTitle.defaultProps = {
  subpageTitle: "subpageTitle"
};
