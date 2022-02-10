import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";

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
      <SubpageTitle subpageTitle={params.mealTime} />
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
