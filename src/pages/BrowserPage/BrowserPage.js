/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import RecipePage from "../RecipePage/RecipePage";
import classes from "./BrowserPage.module.scss";

const BrowserPage = ({ mealTime }) => {
  const [dishes, setDishes] = useState([]);
  const params = useParams();

  const { recipeId } = params;

  useEffect(() => {
    fetch("/api/dishes")
      .then((res) => res.json())
      .then((json) => {
        setDishes(json.dishes);
      });
  }, []);

  async function getSingleRecipe() {
    const res = await fetch(`/api/dishes/${recipeId}`);

    const data = await res.json();

    const loadedRecipe = {
      id: recipeId,
      ...data
    };

    return loadedRecipe;
  }

  return (
    <>
      <div className={classes.centered}>
        <SubpageTitle className={classes.title} subpageTitle={mealTime} />
      </div>
      <ul>
        {dishes.map((dish) => (
          <MealSnapShot
            key={dish.id}
            id={dish.id}
            img={dish.img}
            title={dish.title}
            kcal={dish.kcal}
            time={dish.time}
            shortDesc={dish.shortDesc}
          />
        ))}
      </ul>
      <Comments />

      {dishes.map((dish) => (
        <RecipePage
          key={dish.id}
          recipeTitle={dish.title}
          recipeImg={dish.img}
          recipeKcal={dish.kcal}
          recipeTime={dish.time}
          recipeDesc={dish.desc}
        />
      ))}
    </>
  );
};

BrowserPage.propTypes = {
  mealTime: PropTypes.string
};

BrowserPage.defaultProps = {
  mealTime: "Meal Time"
};

export default BrowserPage;
