import PropTypes from "prop-types";
import React, { useState } from "react";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";
import Button from "../Button/Button";
import classes from "./Comments.module.scss";

const Comments = ({ comments }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addComment = () => {};

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
      <CommentsList comments={comments} />
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Comments;
