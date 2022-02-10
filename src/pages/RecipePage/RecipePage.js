import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Label from "../../components/Label/Label";
import Comments from "../../components/Comments/Comments";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./RecipePage.module.scss";

const RecipePage = () => {
  const [dish, setDish] = useState(null);
  const params = useParams();
  const { dishId } = params;

  useEffect(() => {
    const getSingleRecipe = async () => {
      const res = await fetch(`/api/dishes/${dishId}`);

      const data = await res.json();

      const loadedRecipe = {
        id: dishId,
        ...data.dish
      };

      setDish(loadedRecipe);
    };
    getSingleRecipe();
  }, []);

  return dish ? (
    <div className={classes.wrapper}>
      <SubpageTitle subpageTitle={dish.title} />

      <img className={classes.recipeImg} src={dish.img} alt={dish.title} />

      <div className={classes.recipeBagdes}>
        <Label className={classes.bagde} labelName={`kcal ${dish.kcal}`} />
        <Label className={classes.bagde} labelName={`time ${dish.time}`} />
      </div>
      <div className={classes.recipeDescription}>
        <p>{dish.desc}</p>
      </div>
      <Comments comments={dish.comments} />
    </div>
  ) : null;
};

export default RecipePage;
