import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import classes from "./AddRecipe.module.scss";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("recipe must have a name"),
    kcal: yup.number().required("kcal must be a number"),
    time: yup.number().required("time must be in minutes"),
    url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("invalid image url"),
    shortDescription: yup.string().required("please add descripiton"),
    tags: yup.string().required(),
    email: yup.string().email("invalid email").required()
  })
  .required();

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);
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
          {errors.name?.type === "required" && "recipe name is required"}
          <div className={classes.formRowItems}>
            <Label labelName="kcal" />
            <TextInput
              className={classes.formItems}
              placeholder=""
              {...register("kcal", { required: true })}
            />
            {errors.kcal?.type === "required" && "kcal must be a number"}
          </div>

          <div className={classes.formRowItems}>
            <Label labelName="time" />
            <TextInput
              className={classes.formItems}
              placeholder=""
              {...register("time", { required: true })}
            />
            {errors.time?.type === "required" && "time must be in minutes"}
          </div>
          <TextInput
            className={classes.formItems}
            placeholder="image url"
            {...register("url", { required: true })}
          />
          {errors.url?.type === "required" && "invalid url format (http://...)"}
          <TextArea
            className={classes.formItems}
            placeholder="short description"
            {...register("shortDescription", { required: true })}
          />
          {errors.shortDescription?.type === "required" &&
            "at least short descripiton is required"}
          <TextInput
            className={classes.formItems}
            placeholder="tags"
            {...register("tags", { required: true })}
          />
          {errors.tags?.type === "required" && "recipe must be given tags"}
          <TextInput
            className={classes.formItems}
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "invalid email format"}
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
