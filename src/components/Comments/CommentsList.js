import PropTypes from "prop-types";
import CommentsItem from "./CommentsItem";
import classes from "./CommentsList.module.scss";

const CommentsList = ({ comments }) => {
  console.log(comments);
  return (
    <ul className={classes.commentsList}>
      {comments.map((comment) => (
    
        <CommentsItem
          key={comment.id}
          id={comment.id}
          text={comment.text}
          author={comment.author}
        />
      ))}
    </ul>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      author: PropTypes.string
    })
  ).isRequired
};

export default CommentsList;
