import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Tag from "../../components/Tag/Tag";
import SubpageTitle from "../../components/SubpageTitle/SubpageTitle";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./GenerateMenuPage.module.scss";
import Button from "../../components/Button/Button";
import TagList from "../../components/TagList/TagList";

const GenerateMenuPage = () => {
  const [tagName, setTagName] = useState("");
  const [tagsArray, setTagsArray] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data, tagsArray);

  const addTag = () => {
    if (tagName.length === 0 || tagName.length < 3 || tagName.length > 3) {
      alert("Tag must have 3 letters and can't be empty");
    } else if (tagsArray.includes(tagName)) {
      alert("Tag already exist");
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
    <div className={classes.centered}>
      <SubpageTitle className={classes.subpage} subpageTitle="Generate menu" />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.line}>
          <Tag tag="kcal" />
          <TextInput
            placeholder=""
            register={register}
            regName="kcal"
            isRequired
          />
        </div>
        <div className={classes.line}>
          <Tag tag="time" />
          <TextInput
            placeholder=""
            register={register}
            regName="time"
            isRequired
          />
        </div>
        <div className={classes.line}>
          <Tag tag="tags" />
          <TextInput
            placeholder=""
            onChange={handleChange}
            className={classes.input}
          />
          <Button text="ADD" onClick={addTag} className={classes.button} />
        </div>
        <div className={classes.tags}>
          <TagList
            tagsArray={tagsArray}
            handleRemove={handleRemove}
            className={classes.tag}
          />
        </div>
        <div className={classes.submit}>
          <Button submit="true" text="Generate" />
        </div>
      </form>
    </div>
  );
};
export default GenerateMenuPage;
