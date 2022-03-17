import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Label from "../../components/Label/Label";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./GenerateMenuPage.module.scss";
import Button from "../../components/Button/Button";
import TagList from "../../components/TagList/TagList";

const GenerateMenuPage = () => {
  const [tagName, setTagName] = useState("");
  const [tagsArray, setTagsArray] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () => navigate("/generated_menu");

  const addTag = () => {
    if (tagName.length === 0 || tagName.length < 3 || tagName.length > 3) {
      console.log("Tag must have 3 letters and can't be empty");
    } else if (tagsArray.includes(tagName)) {
      console.log("Tag already exist");
    } else {
      setTagsArray([...tagsArray, tagName]);
    }
  };

  const handleChange = (event) => {
    setTagName(event.target.value);
  };

  const handleRemove = (tag) => {
    setTagsArray(tagsArray.filter((i) => i !== tag));
  };

  return (
    <div className={classes.pageWrapper}>
      <SubpageTitle subpageTitle="Generate menu" />
      <div className={classes.formWrapper}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={classes.formRowItems}>
            <Label labelName="kcal" />
            <TextInput
              placeholder=""
              {...register("kcal", { required: true })}
            />
          </div>
          {errors.kcal?.type === "required" && "Number of calories is required"}
          <div className={classes.formRowItems}>
            <Label labelName="time" />
            <TextInput
              placeholder=""
              {...register("time", { required: true })}
            />
          </div>
          {errors.time?.type === "required" && "Time is required"}
          <div
            className={`${classes.formRowItems} ${classes.formRowItemsLarge}`}
          >
            <Label labelName="tags" />
            <TextInput placeholder="" onChange={handleChange} />
            <Button text="ADD" onClick={addTag} className={classes.button} />
          </div>
          <div className={classes.tags}>
            <TagList tagsArray={tagsArray} handleRemove={handleRemove} />
          </div>
          <div className={classes.submit}>
            <Button submit text="Generate" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateMenuPage;
