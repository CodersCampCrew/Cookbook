import HomePageDishLabels from "../../components/HomePage/HomePageDishLabels";
import HomePageDishPhotos from "../../components/HomePage/HomePageDishPhotos";
import HomePageRecommendedLabel from "../../components/HomePage/HomePageRecommendedLabel";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  const photo = "https://picsum.photos/300/300";
  return (
    <>
      <div className={classes.recommendedContainer}>
        <HomePageDishPhotos src="https://picsum.photos/1000/700" />
        <HomePageRecommendedLabel text="Scrambled Eggs" />
      </div>

      <div className={classes.categoriesContainer}>
        <div className={classes.dishContainer}>
          <HomePageDishPhotos src={photo} />
          <HomePageDishLabels text="Breakfast" />
        </div>
        <div className={classes.dishContainer}>
          <HomePageDishPhotos src={photo} />
          <HomePageDishLabels text="Lunch" />
        </div>
        <div className={classes.dishContainer}>
          <HomePageDishPhotos src={photo} />
          <HomePageDishLabels text="Dinner" />
        </div>
        <div className={classes.dishContainer}>
          <HomePageDishPhotos src={photo} />
          <HomePageDishLabels text="Other" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
