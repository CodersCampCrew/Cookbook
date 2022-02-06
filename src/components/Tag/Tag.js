import React from "react";
import propTypes from "prop-types";
import classes from "./Tag.module.scss"

const Tag = ({ tag, index,  }) => {
  return <span className={classes.tag} key={index}>{tag}</span>
};
export default Tag;
Tag.propTypes = {
  tag: propTypes.string,
  index: propTypes.number,
};
Tag.defaultProps = {
  tag: "TAG",
  index: 1
};
