import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import SlideoutMenu from "../../components/SlideoutMenu/SlideoutMenu";

const Navbar = () => {
  return (
    <div className={classes.navbar} id="outer-container">
      <div className={classes["logo-container"]}>
        <NavLink className={classes.name} to="/home-page">
          The CookBook
        </NavLink>
      </div>
      <div className={classes.slideOutMenuContainer}>
        <SlideoutMenu pageWrapId="page-wrap" outerContainer="outer-container" />
      </div>
    </div>
  );
};

export default Navbar;
