import React from "react";
import classes from "./DayList.module.scss";

const DayList = () => {
  return (
    <div className={classes.dayTitle}>
      <select className={classes.selectday}>
        <option value="Day1">Day 1</option>
        <option value="Day2">Day 2</option>
      </select>
    </div>
  );
};

export default DayList;
