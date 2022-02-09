import React from "react";

import RecommendedDishImage from "../../assets/pexels-jer-chung.jpg";
import classes from "./HomePage.module.scss";
import RecommendedDish from "./RecommendedDish";
import Dish from "./Dish";
import BreakfastImage from "../../assets/breakfast.jpg";
import LunchImage from "../../assets/lunch.jpg";
import DinnerImage from "../../assets/dinner.jpg";
import OthersImage from "../../assets/others.jpg";

const HomePage = () => {
  return (
    <div className={classes.pageContainer}>
      <h1 className={classes.title}>The CookBook</h1>
      <RecommendedDish
        src={RecommendedDishImage}
        alt="Recommended dish"
        dishName="Scrambled Eggs"
        dishId="scrambled_eggs"
      />
      <div className={classes.categoriesContainer}>
        <Dish
          src={BreakfastImage}
          alt="Dish"
          dishName="Breakfast"
          path="breakfast"
        />
        <Dish src={LunchImage} alt="Dish" dishName="Lunch" path="lunch" />
        <Dish src={DinnerImage} alt="Dish" dishName="Dinner" path="dinner" />
        <Dish src={OthersImage} alt="Dish" dishName="Others" path="others" />
      </div>
    </div>
  );
};

export default HomePage;
