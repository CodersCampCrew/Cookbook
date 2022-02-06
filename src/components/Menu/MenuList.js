import React from "react";
import classes from "./MenuList.module.scss";

const MenuList = () => {
  return (
    <div className={classes.menuStyle}>
      <ul>
        <li className={classes.bold}>- Recipes</li>
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Others</li>
        <li className={classes.bold}>- Add recipe</li>
        <li className={classes.bold}>- Generate menu for 2 days</li>
      </ul>
    </div>
  );
};

export default MenuList;
