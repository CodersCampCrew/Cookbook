import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";
import Navbar from "../../components/Navbar";

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink className={classes.logoSection} to="/">
        <div className={classes.logo} />
        <span>The CookBook</span>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
