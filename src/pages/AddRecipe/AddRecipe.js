import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./AddRecipe.module.scss";

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("/api/dishes", { method: "POST", body: data });
    navigate(`/create_recipe/success`);
  };

  return (
    <>
      <SubpageTitle subpageTitle="Create Recipe" className="subpageTitle" />
      <div className={classes.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            className={classes.formItems}
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && "Recipe name is required"}
          <div className={classes.formRowItems}>
            <Label labelName="kcal" />
            <TextInput
              className={classes.formItems}
              placeholder=""
              {...register("kcal", { required: true })}
            />
          </div>
          <div className={classes.formRowItems}>
            <Label labelName="time" />
            <TextInput
              className={classes.formItems}
              placeholder=""
              {...register("time", { required: true })}
            />
          </div>
          <TextInput
            className={classes.formItems}
            placeholder="image url"
            {...register("url", { required: true })}
          />
          {/* Textarea!! */}
          <TextArea
            className={classes.formItems}
            placeholder="short description"
            {...register("shortDescription", { required: true })}
          />
          <TextInput
            className={classes.formItems}
            placeholder="tags"
            {...register("tags", { required: true })}
          />
          <TextInput
            className={classes.formItems}
            placeholder="email"
            {...register("email", { required: true })}
          />
          <Button
            className={classes.formSubmitItem}
            submit
            text="Send Recipe"
          />
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
