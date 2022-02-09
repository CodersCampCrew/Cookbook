// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Label from "../../components/Label/Label";
import Comments from "../../components/Comments/Comments";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./RecipePage.module.scss";

const RecipePage = ({
  recipeTitle,
  recipeImg,
  recipeKcal,
  recipeTime,
  recipeDesc
}) => {
  const [dish, setDish] = useState(null);
  const params = useParams();
  const { dishId } = params;

  useEffect(() => {
    const getSingleRecipe = async () => {
      const res = await fetch(`/api/dishes/${dishId}`);

      const data = await res.json();

      const loadedRecipe = {
        id: dishId,
        ...data.dish
      };

      setDish(loadedRecipe);
    };
    getSingleRecipe();
  }, []);

  console.log(dish);

  return dish ? (
    <div className={classes.wrapper}>
      <SubpageTitle className={classes.title} subpageTitle={dish.title} />

      <img className={classes.recipeImg} src={recipeImg} alt={recipeTitle} />

      <div className={classes.recipeBagdes}>
        <Label className={classes.bagde} labelName={`kcal ${recipeKcal}`} />
        <Label className={classes.bagde} labelName={`time ${recipeTime}`} />
      </div>
      <div className={classes.recipeDescription}>
        <p>{recipeDesc}</p>
      </div>
      <Comments />
    </div>
  ) : null;
};

RecipePage.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
  recipeKcal: PropTypes.number.isRequired,
  recipeTime: PropTypes.number.isRequired,
  recipeDesc: PropTypes.string.isRequired
};

export default RecipePage;
