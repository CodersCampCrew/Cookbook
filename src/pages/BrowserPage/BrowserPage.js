import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import IconToSort from "../../components/IconToSort/IconToSort";
import classes from "./BrowserPage.module.scss";

const BrowserPage = () => {
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetch("/api/dishes")
      .then((res) => res.json())
      .then((json) => {
        setDishes(json.dishes);
      });
  }, []);

  return (
    <>
      <div className={classes.title}><SubpageTitle className={classes.subpageTitle} subpageTitle={params.mealTime} /><IconToSort /></div>
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
            onClick={() => navigate(`/dishes/${dish.url}`)}
          />
        ))}
      </ul>
    </>
  );
};

export default BrowserPage;
