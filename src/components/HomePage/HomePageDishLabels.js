import React from "react";
import propTypes from "prop-types";
import classes from "./HomePage.module.scss";
 
const HomePageDishLabels = ({ text }) => {
 return <div className={classes.dishLabelStyle}>{text}</div>;
};
 
HomePageDishLabels.propTypes = {
    text: propTypes.string
   };
HomePageDishLabels.defaultProps = {
    text: "Lunch"
   };

export default HomePageDishLabels;