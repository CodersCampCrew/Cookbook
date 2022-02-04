/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Tag from "../../components/Tag/Tag";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import Label from "../../components/Label/Label";

const initialArray = [];
const GenerateMenuPage = () => {
  const [tagName, setTagName] = useState("");
  const [tagsArray, setTagsArray] = useState(initialArray);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const addTag = () => {
    setTagsArray([...tagsArray, tagName]);
  };
  return (
    <>
      <SubpageTitle subpageTitle="Generate menu" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label labelName="kcal" />{" "}
        <input {...register("kcal", { required: true })} />
        <Label labelName="time" />{" "}
        <input {...register("time", { required: true })} />
        <Label labelName="tags" />
        {errors.time && <span>This field is required</span>}
        {errors.kcal && <span>This field is required</span>}
        <button type="submit">click me</button>
      </form>

      <input onChange={(event) => setTagName(event.target.value)} />
      <button onClick={addTag} type="button">
        add
      </button>
      <div>{tagName}</div>
      {tagsArray.map(() => (
        <Tag tag={tagsArray[tagsArray.length - 1]} />
      ))}
    </>
  );
};
export default GenerateMenuPage;
