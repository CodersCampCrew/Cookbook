import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./TextArea.module.scss";

const TextArea = forwardRef(
  ({ placeholder, callback, onChange, onBlur, name }, ref) => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        callback(document.getElementById("search_input").value);
      }
    };

    return (
      <div className={classes.textAreaContainer}>
        <i className={classes.icon}>&gt;</i>
        <textarea
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          className={classes.textAreaInput}
          type="text"
          placeholder={placeholder}
          id="search_input"
          onKeyDown={(e) => handleKeyDown(e)}
          row="10"
        />
      </div>
    );
  }
);

TextArea.propTypes = {
  placeholder: PropTypes.string,
  callback: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string
};

TextArea.defaultProps = {
  placeholder: "_____",
  callback: () => {},
  onChange: () => {},
  onBlur: () => {},
  name: ""
};

export default TextArea;
