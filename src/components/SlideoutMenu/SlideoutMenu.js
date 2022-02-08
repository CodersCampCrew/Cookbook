import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom"
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
      width={200}
    >
      <NavLink to="/addrecipe-page"><h3 className={classes.menuItem}>Breakfast</h3></NavLink>
      <NavLink to="/addedrecipe-page"><h3 className={classes.menuItem}>Lunch</h3></NavLink>
      <NavLink to="/browser-page"><h3 className={classes.menuItem}>Dinner</h3></NavLink>
      <NavLink to="/generatemenu-page"><h3 className={classes.menuItem}>Others</h3></NavLink>
      <NavLink to="/generetedmenu-page"><h3 className={classes.menuItem}>Others</h3></NavLink>
    </Menu>
  );
};

export default SlideoutMenu;
