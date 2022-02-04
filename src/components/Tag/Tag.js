import React from "react";
import propTypes from "prop-types";

const Tag = ({ tag }) => {
  return <ul>{tag}</ul>;
};
export default Tag;
Tag.propTypes = {
  tag: propTypes.string
};
Tag.defaultProps = {
  tag: "TAG"
};
