/* eslint-disable react/prop-types */
import React from "react";
// import propTypes from "prop-types";
// import classes from './Icontosort.module.scss';

const Icontosort = ({ modal, setModal }) => {
  return (
    <button type="button" onClick={setModal(!modal)}>
      AR
    </button>
  );
};

export default Icontosort;
