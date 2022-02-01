import PropTypes from "prop-types";
import MealSnapShot from "../components/MealSnapShot/MealSnapShot";
import SubpageTitle from "../components/SubpageTitle/SubpageTitle";
import classes from "./BrowserPage.module.scss";

const DUMMY_DISHES = [
  {
    id: "d1",
    img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
    title: "scrambled eggs",
    kcal: "500",
    time: 5,
    desc: "simple, tasty, day starter, to wake you up",
  },
  {
    id: "d2",
    img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
    title: "schabowy",
    kcal: "500",
    time: 5,
    desc: "great Polish dish",
  }
];

const BrowserPage = ({ mealTime }) => {
  return (
    <>
      <div className={classes.centered}>
        <SubpageTitle className={classes.title} subpageTitle={mealTime} />
      </div>
      <ul>
        {DUMMY_DISHES.map((dish) => (
          <MealSnapShot
           id={dish.id}
           img={dish.img}
           title={dish.title}
           kcal={dish.kcal}
           time={dish.time}
           desc={dish.desc}
          />
        ))}

      </ul>
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
