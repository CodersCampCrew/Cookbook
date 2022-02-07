import PropTypes from "prop-types";

import { useRef } from "react";
import Button from "../Button/Button";
import classes from "./NewCommentForm.module.scss";

const NewCommentForm = ({ addComment }) => {
  const commentTextRef = useRef();
  const authorTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTextComment = commentTextRef.current.value;
    const enteredTextAuthor = authorTextRef.current.value;

    addComment(enteredTextComment, enteredTextAuthor);

    commentTextRef.current.value = "";
    authorTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="comment">
          <textarea
            id="comment"
            rows="10"
            ref={commentTextRef}
            placeholder="Type your comment..."
          />
        </label>

        <label htmlFor="author">
          <textarea
            id="author"
            rows="2"
            ref={authorTextRef}
            placeholder="Your name"
          />
        </label>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          text="Add Comment"
          submit
          onClick={submitFormHandler}
        />
      </div>
    </form>
  );
};

NewCommentForm.propTypes = {
  addComment: PropTypes.func
};

NewCommentForm.defaultProps = {
  addComment: () => {}
};

export default NewCommentForm;
