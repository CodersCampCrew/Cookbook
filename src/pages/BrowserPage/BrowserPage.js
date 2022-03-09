import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";

const BrowserPage = () => {
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const fetchDishes = async () => {
      const {data: res} = await axios(
        "https://cookbook-backend-coderscamp.herokuapp.com/api/dishes"
      );
      setDishes(res);
      console.log(res);
    };
    fetchDishes()
  }, []);

  return (
    <>
      <SubpageTitle subpageTitle={params.mealTime} />
      <ul>
        {dishes.map((dish) => (
          <MealSnapShot
            key={dish.name}
            id={dish.id}
            img={dish.img}
            title={dish.name}
            kcal={dish.kcal}
            time={dish.time}
            shortDesc={dish.shortDesc}
            onClick={() => navigate(`/dishes/${dish.name}`)}
          />
        ))}
      </ul>
    </>
  );
};

export default BrowserPage;
