import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import classes from "./HomePage.module.scss";

const Dish = ({ src, alt, dishName, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipes/${path}`)}
      className={classes.dishContainer}
    >
      <img src={src} alt={alt} />
      <p className={classes.dishLabel}>{dishName}</p>
    </div>
  );
};

Dish.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dishName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Dish;
