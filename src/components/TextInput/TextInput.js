import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./TextInput.module.scss";

const TextInput = forwardRef(
  ({ placeholder, callback, onChange, onBlur, name }, ref) => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        callback(document.getElementById("search_input").value);
      }
    };

    return (
      <div className={classes["textinput-container"]}>
        <input
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          className={classes["text-input"]}
          type="text"
          placeholder={placeholder}
          id="search_input"
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    );
  }
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
  callback: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: "_____",
  callback: () => {},
  onChange: () => {},
  onBlur: () => {},
  name: ""
};

export default TextInput;
