import React from "react";
import PropTypes from "prop-types";
import classes from "./TextInput.module.scss";

const TextInput = ({ placeholder, callback }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      callback(document.getElementById("search_input").value);
    }
  };

  return (
    <div className={classes["textinput-container"]}>
      <i className={classes.icon}>&gt;</i>
      <input
        className={classes["text-input"]}
        type="text"
        placeholder={placeholder}
        id="search_input"
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  callback: PropTypes.func
};

TextInput.defaultProps = {
  placeholder: "_____",
  callback: () => {}
};

export default TextInput;
