import React from "react";

const MenuList = () => {
  const menuStyle = {
    fontSize: "4em",
    fontFamily: "Palatino Linotype",
    color: "#707070",
    border: "1px solid #707070",
    textAlign: "center",
    ListStyleType: "none"
  };

  const bold = {
    fontWeight: "bold"
  };

  return (
    <div style={menuStyle}>
      <ul>
        <li style={bold}>- Recipes</li>
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Others</li>
        <li style={bold}>- Add recipe</li>
        <li style={bold}>- Generate menu for 2 days</li>
      </ul>
    </div>
  );
};

export default MenuList;
