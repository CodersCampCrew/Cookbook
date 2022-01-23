import React from "react";
import propTypes from "prop-types";
import classes from "./HomePage.module.scss";

const RecommendedLabel = ({ text }) => {
    return (
      <div className={classes.dishNameStyle}>
        <p className={classes.recommendedStyle}>RECOMMENDED</p>
        <br />
        {text}
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