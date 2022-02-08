import React from "react";
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
        <Button className={classes.formSubmitItem} text="Add another recipe" />
        <Button className={classes.formSubmitItem} text="Go back to CookBook" />
      </div>
    </>
  );
};

export default AddedRecipe;
