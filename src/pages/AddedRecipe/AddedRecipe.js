import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AddedRecipe.module.scss";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import Button from "../../components/Button/Button";

const AddedRecipe = () => {
  return (
    <>
      <SubpageTitle subpageTitle="Create Recipe" className="subpageTitle" />
      <div className={classes.formWrapper}>
        <pre className={classes.formText}>
          Thank You!
          <br />
          Your contribution is very important to us!
          <br />
          If we decide to add your recipe You will
          <br />
          be notified
        </pre>
        <NavLink to="/">
          <Button className={classes.formSubmitItem} text="View added recipe" />
        </NavLink>
        <NavLink to="/create_recipe">
          <Button
            className={classes.formSubmitItem}
            text="Add another recipe"
          />
        </NavLink>
        <NavLink to="/">
          <Button
            className={classes.formSubmitItem}
            text="Go back to CookBook"
          />
        </NavLink>
      </div>
    </>
  );
};

export default AddedRecipe;
