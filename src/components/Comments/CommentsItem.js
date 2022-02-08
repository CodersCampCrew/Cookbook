import PropTypes from "prop-types";

import classes from "./CommentsItem.module.scss";

const CommentsItem = ({ text, author }) => {
  return (
    <li className={classes.item}>
      <p className={classes.author}>{author} </p>
      <p className={classes.text}>{text} </p>
    </li>
  );
};

CommentsItem.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default CommentsItem;
