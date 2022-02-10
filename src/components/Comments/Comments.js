import PropTypes from "prop-types";
import React, { useState } from "react";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";
import Button from "../Button/Button";
import classes from "./Comments.module.scss";

const Comments = ({ comments, dishId }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [localComments, setLocalComments] = useState(comments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addComment = (enteredTextComment, enteredTextAuthor) => {
    fetch(`/api/comments`, {
      method: "POST",
      body: { dishId, text: enteredTextComment, author: enteredTextAuthor }
    });

    setLocalComments((prevComments) => [
      ...prevComments,
      { id: Math.random(), text: enteredTextComment, author: enteredTextAuthor }
    ]);
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
      {isAddingComment && <NewCommentForm addComment={addComment} />}
      <CommentsList comments={localComments} />
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dishId: PropTypes.string.isRequired
};

export default Comments;
