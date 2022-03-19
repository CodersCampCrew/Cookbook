import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./RegisterPage.module.scss";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("name is required").required(),
    email: yup.string().email("invalid email").required(),
    password: yup.string().required("recipe must have a name"),
    password2: yup.string().required("repeat password")
  })
  .required();

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("/api/dishes", { method: "POST", body: data });
    onClick={() => navigate(`/login`)}
  };

  return (
    <div className={classes.pageWrapper}>
      <SubpageTitle subpageTitle="Register" />;
      <div className={classes.formWrapper}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={classes.formRowItems}>
            <Label labelName="name" />
            <TextInput
              placeholder="name"
              {...register("name", { required: true })}
            />
            <span style={{ gridColumn: "span 2" }}>
              {errors.email?.type === "required" && "name is required"}
            </span>
          </div>
          <div className={classes.formRowItems}>
            <Label labelName="email" />
            <TextInput
              placeholder="email"
              {...register("email", { required: true })}
            />
            <span style={{ gridColumn: "span 2" }}>
              {errors.email?.type === "required" && "invalid email format"}
            </span>
          </div>
          <div className={classes.formRowItems}>
            <Label labelName="pass" />
            <TextInput
              placeholder="password"
              {...register("password", { required: true })}
            />
            <span style={{ gridColumn: "span 2" }}>
              {errors.password?.type === "required" && "password is required"}
            </span>
          </div>
          <div className={classes.formRowItems}>
            <Label labelName="pass" />
            <TextInput
              placeholder="confirm password"
              {...register("password2", { required: true })}
            />
            <span style={{ gridColumn: "span 2" }}>
              {errors.password?.type === "required" &&
                "please confirm password"}
            </span>
          </div>
          <Button
            submit
            text="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
