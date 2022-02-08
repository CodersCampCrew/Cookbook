import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./ImageInput.module.scss";

const ImageInput = forwardRef(
  ({ placeholder, callback, onChange, onBlur, name }, ref) => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        callback(document.getElementById("search_input").value);
      }
    };

    return (
      <label htmlFor="image-input" className={classes["image-label"]}>
        Add img
        <input
          className={classes["image-input"]}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          type="file"
          alt="image"
          placeholder={placeholder}
          id="image-input"
          onKeyDown={(e) => handleKeyDown(e)}
        />{" "}
      </label>
    );
  }
);

ImageInput.propTypes = {
  placeholder: PropTypes.string,
  callback: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string
};

ImageInput.defaultProps = {
  placeholder: "_____",
  callback: () => {},
  onChange: () => {},
  onBlur: () => {},
  name: ""
};

export default ImageInput;
