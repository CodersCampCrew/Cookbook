/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Tag from "../../components/Tag/Tag";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./GenerateMenuPage.module.scss";
import Button from "../../components/Button/Button";

const initialArray = [];
const GenerateMenuPage = () => {
  const [tagName, setTagName] = useState("");
  const [tagsArray, setTagsArray] = useState(initialArray);

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const addTag = () => {
    setTagsArray([...tagsArray, tagName]);
  };
  return (
      <div className={classes.centered}>
      <SubpageTitle subpageTitle="Generate menu" />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.line}>
        <Tag tag="kcal" />
        <TextInput placeholder="" register={register} regName="kcal" isRequired />
        </div>
        <div className={classes.line}>
        <Tag tag="time" />
        <TextInput placeholder="" register={register} regName="time" isRequired />
        </div>
        <div className={classes.line}>
        <Tag tag="tags" />
        <input onChange={(event) => setTagName(event.target.value)} />
      <Button onClick={addTag}/>
      </div >
      <div className={classes.tags}>
      {tagsArray.map((tag) => (
        <Tag tag={tag} />
      ))}
      </div>
        <button type="submit">click me</button>
      </form>
    </div>
  );
};
export default GenerateMenuPage;
