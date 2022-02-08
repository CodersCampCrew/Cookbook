import PropTypes from "prop-types";
import classes from "./MealSnapShot.module.scss";
import Label from "../Label/Label";

const MealSnapShot = ({ onClick, img, title, kcal, time, desc }) => {
  return (
    <button type="button" onClick={onClick} className={classes.card}>
      <img className={classes.img} src={img} alt="" />

      <div className={classes.describe}>
        <h2 className={classes.mealTitle}>{title}</h2>
        <div className={classes.info}>
          <div className={classes.infoKcal}>
            <Label labelName="kcal" /> <p className={classes.txt}> {kcal} </p>
          </div>
          <div className={classes.infoTime}>
            <Label labelName="time" /> <p className={classes.txt}> {time} </p>
          </div>
          <div className={classes.infoDesc}>
            <Label labelName="desc" /> <p className={classes.txt}> {desc} </p>
          </div>
        </div>
      </div>
    </button>
  );
};

MealSnapShot.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  kcal: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired
};

MealSnapShot.defaultProps = {
  onClick: () => {}
};

export default MealSnapShot;
