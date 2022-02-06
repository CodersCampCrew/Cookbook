import React from "react";
import propTypes from "prop-types";
import classes from "./Tag.module.scss";

const Tag = ({ tag }) => {
  return <span className={classes.tag}>{tag}</span>;
};
export default Tag;
Tag.propTypes = {
  tag: propTypes.string
};
Tag.defaultProps = {
  tag: "TAG"
};
