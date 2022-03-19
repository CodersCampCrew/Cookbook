import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./LoginPage.module.scss";

const schema = yup
  .object()
  .shape({
    email: yup.string().email("invalid email").required(),
    password: yup.string().required("recipe must have a name")
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("/api/dishes", { method: "POST", body: data });
    navigate(`/my_cookbook`);
  };

  return (
    <div className={classes.pageWrapper}>
      <SubpageTitle subpageTitle="Login" />;
      <div className={classes.formWrapper}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <Button
            submit
            text="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
