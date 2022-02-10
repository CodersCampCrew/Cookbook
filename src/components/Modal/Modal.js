import PropTypes from "prop-types";

import Button from "../Button/Button";
import classes from "./Modal.module.scss";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const Modal = ({ className, setModal }) => {
  return (
    <div onClick={() => setModal(false)}>
      <Backdrop />
      <div className={className}>
        <Button
          className={classes.button}
          text="kcal: lower to higher"
          onClick={() => setModal(false)}
        />
        <Button
          className={classes.button}
          text="kcal: higher to lower"
          onClick={() => setModal(false)}
        />
        <Button
          className={classes.button}
          text="time: lower to higher"
          onClick={() => setModal(false)}
        />
        <Button
          className={classes.button}
          text="time: higher to lower"
          onClick={() => setModal(false)}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  setModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  className: `${classes.modal}`
};

export default Modal;

