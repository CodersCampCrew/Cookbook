// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Label from "../../components/Label/Label";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./RecipePage.module.scss";

const RecipePage = ({
  recipeTitle,
  recipeImg,
  recipeKcal,
  recipeTime,
  recipeDesc
}) => {
  return (
    <div className={classes.wrapper}>
      <SubpageTitle className={classes.title} subpageTitle={recipeTitle} />

      <img className={classes.recipeImg} src={recipeImg} alt={recipeTitle} />

      <div className={classes.recipeBagdes}>
        <Label className={classes.bagde} labelName={`kcal ${recipeKcal}`} />
        <Label className={classes.bagde} labelName={`time ${recipeTime}`} />
      </div>
      <div className={classes.recipeDescription}>
        <p>{recipeDesc}</p>
      </div>
    </div>
  );
};

RecipePage.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
  recipeKcal: PropTypes.number.isRequired,
  recipeTime: PropTypes.number.isRequired,
  recipeDesc: PropTypes.string.isRequired
};

export default RecipePage;