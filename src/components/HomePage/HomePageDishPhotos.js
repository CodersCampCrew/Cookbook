import React from "react";
import propTypes from "prop-types";
 
const HomePageDishPhotos = ({ src }) => {
 return (
   <div>
     <img src={src} alt="There is something missing" />
   </div>
 );
};

HomePageDishPhotos.propTypes = {
  src: propTypes.string
 };
HomePageDishPhotos.defaultProps = {
  src: "Null"
 };

export default HomePageDishPhotos;