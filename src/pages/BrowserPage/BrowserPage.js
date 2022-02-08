import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Comments from "../../components/Comments/Comments";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./BrowserPage.module.scss";

const BrowserPage = ({ mealTime }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("/api/dishes")
      .then((res) => res.json())
      .then((json) => {
        setDishes(json.dishes);
      });
    }, []);
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
            desc={dish.desc}
          />
        ))}
      </ul>
      <Comments />
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
