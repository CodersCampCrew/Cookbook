import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import classes from "./HomePage.module.scss";

const RecommendedDish = ({ src, alt, dishName, dishId }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dishes/${dishId}`)}
      className={classes.recommendedContainer}
    >
      <img src={src} alt={alt} />
      <p className={classes.recommendedLabel}>
        <span>RECOMMENDED</span>
        <span>{dishName}</span>
      </p>
    </div>
  );
};

RecommendedDish.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dishName: PropTypes.string.isRequired,
  dishId: PropTypes.string.isRequired
};

export default RecommendedDish;
