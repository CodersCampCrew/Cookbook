import React, { useState, useEffect } from "react";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import DayList from "../../components/DayList/DayList";
import classes from "./GeneratedMenuPage.module.scss";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";



const GeneratedMenuPage = () => {
  const [dishArray, setDishArray] = useState([]);
  
  useEffect(() => {
    fetch("/api/days")
      .then((res) => res.json())
      .then((json) => {
        setDishArray(json.days);
      });
  }, []);
console.log(dishArray);

  const handleChange = (e) => {
    setDishArray(dishArray[e.target.value].dishes);
  };
  return (
    <>
      <div className={classes.centered}>
        <DayList onChange={handleChange} />
      </div>
      <ul>
        {dishArray.map((dish) => (
          <>
            <SubpageTitle
              className={classes.title}
              subpageTitle={dish.dishType}
            />
            <MealSnapShot
              id={dish.id}
              img={dish.img}
              title={dish.title}
              kcal={dish.kcal}
              time={dish.time}
              desc={dish.desc}
            />
          </>
        ))}
      </ul>
    </>
  );
};
export default GeneratedMenuPage;
