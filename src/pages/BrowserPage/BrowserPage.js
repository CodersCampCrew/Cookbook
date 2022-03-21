/* eslint-disable */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../axios";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";

const BrowserPage = () => {
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const fetchDishes = async () => {
      const { data: res } = await instance.get(`dishes/${params.mealTime}`);
      setDishes(res);
      console.log(res);
    };
    fetchDishes();
  }, [setDishes, params.mealTime]);

  return (
    <>
      <SubpageTitle subpageTitle={params.mealTime} />
      <ul>
        {dishes.map((dish) => (
          <MealSnapShot
            key={dish._id}
            id={dish._id}
            img={dish.img}
            title={dish.name}
            kcal={dish.kcal}
            time={dish.time}
            shortDesc={dish.shortDesc}
            onClick={() => navigate(`/dishes/${dish._id}`)}
          />
        ))}
      </ul>
    </>
  );
};

export default BrowserPage;
