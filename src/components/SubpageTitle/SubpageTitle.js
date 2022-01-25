import React from "react";
import PropTypes from "prop-types";
import classes from "./SubpageTitle.module.css";

const SubpageTitle = ({ subpageTitle }) => {
  return <div className={classes.subpageTitle}>{subpageTitle}</div>;
};

export default SubpageTitle;
SubpageTitle.propTypes = {
  subpageTitle: PropTypes.string
};
SubpageTitle.defaultProps = {
  subpageTitle: "subpageTitle"
};
