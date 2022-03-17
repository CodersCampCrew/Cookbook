/* eslint-disable */
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import instance from "../../axios";
import Label from "../../components/Label/Label";
import Comments from "../../components/Comments/Comments";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./RecipePage.module.scss";

const RecipePage = () => {
  const [dish, setDish] = useState(null);
  // const params = useParams();
  // const { dishId } = params;

  useEffect(() => {
    const getSingleRecipe = async () => {
      const {data: res} = await instance.get(`dishes/`)
      setDish(...res);
    };
    getSingleRecipe();
  }, []);

  return dish ? (
    <div className={classes.wrapper}>
      <SubpageTitle subpageTitle={dish.name} />

      <img className={classes.recipeImg} src={dish.img} alt={dish.name} />

      <div className={classes.recipeBagdes}>
        <Label className={classes.bagde} labelName={`kcal ${dish.kcal}`} />
        <Label className={classes.bagde} labelName={`time ${dish.time}min`} />
      </div>
      <div className={classes.recipeDescription}>
        <p>{dish.desc}</p>
      </div>
      <Comments comments={dish.comments} dishId={dish._id} />
    </div>
  ) : null;
};

export default RecipePage;
