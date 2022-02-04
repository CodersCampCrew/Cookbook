import MealSnapShot from "../../components/MealSnapShot/MealSnapShot";
import DayList from "../../components/DayList/DayList";
import classes from "./GeneratedMenuPage.module.scss";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";

const DUMMY_DISHES = [
  {
    id: "d1",
    img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
    title: "scrambled eggs",
    kcal: "500",
    time: 5,
    desc: "simple, tasty, day starter, to wake you up",
    dishType: "Breakfast"
  },
  {
    id: "d2",
    img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
    title: "schabowy",
    kcal: "500",
    time: 5,
    desc: "great Polish dish",
    dishType: "Lunch"
  },
  {
    id: "d3",
    img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
    title: "Ramen",
    kcal: "500",
    time: 5,
    desc: "great Japanese dish",
    dishType: "Dinner"
  }
];

const GeneratedMenuPage = () => {
  return (
    <>
      <div className={classes.centered}>
        <DayList />
      </div>
      <ul>
        {DUMMY_DISHES.map((dish) => (
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
