import React from "react";
import propTypes from "prop-types";

import classes from "./HomePage.module.scss";

const RecommendedLabel = ({ text }) => {
  return (
    <div className={classes.dishNameStyle}>
      <div className={classes.recommendedStyle}>RECOMMENDED</div>
      <br />
      <div className={classes.dishName}>{text}</div>
    </div>
  );
};

RecommendedLabel.propTypes = {
  text: propTypes.string
};
RecommendedLabel.defaultProps = {
  text: "Dish"
};

export default RecommendedLabel;
