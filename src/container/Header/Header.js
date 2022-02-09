import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";
import Navbar from "../../components/Navbar";

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink className={classes.logo} to="/">
        The CookBook
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
