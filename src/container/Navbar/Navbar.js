import React from "react";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  /* 
    eslint-disable 
    no-console, 
    jsx-a11y/click-events-have-key-events, 
    jsx-a11y/no-noninteractive-element-interactions 
  */
  const search = (param) => {
    //  search function placeholder to be implemented
    console.log(param);
  };
  return (
    <div className={classes.navbar}>
      <div className={classes["logo-container"]}>
        <img
          className={classes.logo}
          src="https://picsum.photos/100/100"
          alt=""
        />
        <div className={classes.name}>The&nbsp;CookBook</div>
      </div>
      <div className={classes["search-container"]}>
        <TextInput placeholder="Search" callback={search} />
        <img
          className={classes["search-icon"]}
          src="assets/magnifying-glass-solid.svg"
          alt=""
          onClick={() => search(document.getElementById("search_input").value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
