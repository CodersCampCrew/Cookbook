import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import classes from "./Navbar.module.scss";
import Hamburger from "../../assets/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`${classes.overlay} ${
          open ? classes.overlayVisible : classes.overlayHidden
        }`}
      />

      <button
        className={classes.navbarButton}
        onClick={() => setOpen(true)}
        type="button"
      >
        <img src={Hamburger} alt="Navbar" />
      </button>

      <div
        className={`${classes.navbar} ${
          open ? classes.navbarOpen : classes.navbarClosed
        }`}
      >
        <Navigation
          onSelect={({ itemId }) => {
            if (itemId !== "/recipes" && itemId !== "/my_cookbook") {
              navigate(itemId);
              setOpen(false);
            }
          }}
          items={[
            {
              title: "Home",
              elemBefore: () => <span className={classes.dash}>—</span>,
              itemId: "/"
            },
            {
              title: "Recipes",
              itemId: "/recipes",
              elemBefore: () => <span className={classes.dash}>—</span>,
              subNav: [
                {
                  title: "All",
                  itemId: "/recipes/all"
                },
                {
                  title: "Breakfast",
                  itemId: "/recipes/breakfast"
                },
                {
                  title: "Lunch",
                  itemId: "/recipes/lunch"
                },
                {
                  title: "Dinner",
                  itemId: "/recipes/dinner"
                },
                {
                  title: "Others",
                  itemId: "/recipes/others"
                }
              ]
            },
            {
              title: "Create repice",
              elemBefore: () => <span className={classes.dash}>—</span>,
              itemId: "/create_recipe"
            },
            {
              title: "Generate menu",
              elemBefore: () => <span className={classes.dash}>—</span>,
              itemId: "/generate_menu"
            },
            {
              title: "My Cookbook",
              itemId: "/my_cookbook",
              elemBefore: () => <span className={classes.dash}>—</span>,
              subNav: [
                {
                  title: "Login",
                  itemId: "/login"
                },
                {
                  title: "Register",
                  itemId: "/register"
                }
              ]
            }
          ]}
        />
      </div>
    </>
  );
};

export default Navbar;
