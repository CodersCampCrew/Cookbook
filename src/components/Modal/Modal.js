import PropTypes from "prop-types";

import Button from "../Button/Button";
import classes from "./Modal.module.scss";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const Modal = ({ className }) => {
  return (
    <>
      <Backdrop />
      <div className={className}>
        <Button className={classes.button} text="kcal: lower to higher" />
        <Button className={classes.button} text="kcal: higher to lower" />
        <Button className={classes.button} text="time: lower to higher" />
        <Button className={classes.button} text="time: higher to lower" />
      </div>
    </>
  );
};

Modal.propTypes = {
  className: PropTypes.string
};

Modal.defaultProps = {
  className: `${classes.modal}`
};

export default Modal;
