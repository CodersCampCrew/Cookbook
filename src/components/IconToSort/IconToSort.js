import React from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import propTypes from "prop-types";

import classes from "./IconToSort.module.scss";

const Icontosort = ({ modal, setModal }) => {
  return (
    <button
      className={classes.icontosort}
      type="button"
      onClick={() => setModal(!modal)}
    >
      <RiArrowUpDownFill />
    </button>
  );
};

export default Icontosort;

Icontosort.propTypes = {
  modal: propTypes.bool.isRequired,
  setModal: propTypes.func.isRequired
};
