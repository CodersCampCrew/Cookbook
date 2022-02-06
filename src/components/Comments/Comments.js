import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";
import Button from "../Button/Button";
import classes from "./Comments.module.scss";

const Comments = () => {
  const [comments, setDishes] = useState([]);

  useEffect(() => {
    fetch("/api/dishes")
      .then((res) => res.json())
      .then((json) => {
        setDishes(json.comments);
      });
  });

  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>Comments</h2>
      {!isAddingComment && (
        <Button
          className={classes.button}
          text="Add Comment"
          onClick={startAddCommentHandler}
        />
      )}
      {isAddingComment && <NewCommentForm />}
      <CommentsList comments={comments} />
    </section>
  );
};

export default Comments;
