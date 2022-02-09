import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import DayList from "../../components/DayList/DayList";
import classes from "./GeneratedMenuPage.module.scss";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";

const GeneratedMenuPage = () => {
  const [dishArray, setDishArray] = useState(null);
  const [day , setDay]=useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/api/days")
      .then((res) => res.json())
      .then((json) => {
        setDishArray(json.days);
      });
  }, []);
  console.log(dishArray);

  const handleChange = (e) => {
    setDay(e.target.value);
  };

  return dishArray &&(
    <>
      <div className={classes.centered}>
        <DayList onChange={handleChange} />
      </div>
      <ul>
        {dishArray[day].dishes.map((dish) => (
          <>
            <SubpageTitle
              className={classes.title}
              subpageTitle={dish.dishType}
            />
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
          </>
        ))}
      </ul>
    </>
  );
};
export default GeneratedMenuPage;
