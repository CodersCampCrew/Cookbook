import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import IconToSort from "../../components/IconToSort/IconToSort";
import classes from "./BrowserPage.module.scss";
import Modal from "../../components/Modal/Modal";

const BrowserPage = () => {
  const [dishes, setDishes] = useState([]);
  const [modal, setModal] = useState(0);

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
      <div className={classes.title}>
        <SubpageTitle
          className={classes.subpageAllTitle}
          subpageTitle={params.mealTime}
        />
        <IconToSort modal={modal} setModal={setModal} />
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
            onClick={() => navigate(`/dishes/${dish.url}`)}
          />
        ))}
      </ul>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default BrowserPage;
