/* eslint-disable */
import React, { useEffect, useState } from "react";

import classes from "./HomePage.module.scss";
import RecommendedDish from "./RecommendedDish";
import Dish from "./Dish";
import BreakfastImage from "../../assets/breakfast.jpg";
import LunchImage from "../../assets/lunch.jpg";
import DinnerImage from "../../assets/dinner.jpg";
import OthersImage from "../../assets/others.jpg";
import instance from "../../axios"

const HomePage = () => {
  const [recommendedDish, setRecommendedDish] = useState(null);

  useEffect(() => {
    const fetchRecommendedDish = async () => {
      const {data: res} = await instance.get(`dishes/recommended`)
      setRecommendedDish(...res);
    };

    fetchRecommendedDish();
  }, []);


  return (
    recommendedDish && (
      <div className={classes.pageContainer}>
        <h1 className={classes.title}>The CookBook</h1>
        <RecommendedDish
          src={recommendedDish.img}
          alt={recommendedDish.name}
          dishName={recommendedDish.name}
          dishId={recommendedDish._id}
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
    )
  );
};

export default HomePage;
