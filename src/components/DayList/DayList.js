import React from "react";
import propTypes from "prop-types";
import classes from "./DayList.module.scss";

const DayList = ({onChange}) => {
  return (
    <div className={classes.dayTitle}>
      <select onChange={onChange} className={classes.selectday}>
        <option value="1">Day 1</option>
        <option value="2">Day 2</option>
      </select>
    </div>
  );
};

export default DayList;

DayList.propTypes = {
  onChange: propTypes.func
};

DayList.defaultProps = {
  onChange: () => {},
};