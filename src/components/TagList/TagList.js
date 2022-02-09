import React from "react";
import propTypes from "prop-types";
import classes from "./TagList.module.scss";

const TagList = ({ tagsArray, handleRemove , className }) => {
  return (
    <>
      {tagsArray.map((tag) => (
        <span key={tag}>
          <button
            className={`${classes.button} ${className}`}
            type="button"
            onClick={() => handleRemove(tag)}
          >
            {tag}
          </button>
        </span>
      ))}
    </>
  );
};

export default TagList;

TagList.propTypes = {
  tagsArray: propTypes.arrayOf(propTypes.string).isRequired,
  handleRemove: propTypes.func.isRequired,
  className: propTypes.string,
};

TagList.defaultProps = {
  className: "",
};