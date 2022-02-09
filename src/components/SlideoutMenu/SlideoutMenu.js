import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./SlideoutMenu.module.scss";

const SlideoutMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Menu
      right
      className={classes.menu}
      noOverlay
      customBurgerIcon={<Hamburger toggled={isOpen} toggle={setOpen} />}
      onClick={() => setOpen(!isOpen)}
      width={250}
      disableCloseOnEsc
    >
      <NavLink className={classes.link} to="/home-page">
        <h3 className={classes.menuItem}>Home</h3>
      </NavLink>
      <NavLink className={classes.link} to="/addrecipe-page">
        <h3 className={classes.menuItem}>Add recipe</h3>
      </NavLink>
      <NavLink className={classes.link} to="/browser-page">
        <h3 className={classes.menuItem}>Dinner</h3>
      </NavLink>
      <NavLink className={classes.link} to="/generatemenu-page">
        <h3 className={classes.menuItem}>Others</h3>
      </NavLink>
      <NavLink className={classes.link} to="/generetedmenu-page">
        <h3 className={classes.menuItem}>Others</h3>
      </NavLink>
    </Menu>
  );
};

export default SlideoutMenu;
