import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import { useState } from "react";
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
      <h3 className={classes.menuItem}>Breakfast</h3>
      <h3 className={classes.menuItem}>Lunch</h3>
      <h3 className={classes.menuItem}>Dinner</h3>
      <h3 className={classes.menuItem}>Others</h3>
    </Menu>
  );
};

export default SlideoutMenu;
