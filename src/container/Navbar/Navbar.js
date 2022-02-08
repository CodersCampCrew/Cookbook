import { useState, React } from "react";
import TextInput from "../../components/TextInput/TextInput";
import classes from "./Navbar.module.scss";
import SlideoutMenu from "../../components/SlideoutMenu/SlideoutMenu";

const Navbar = () => {
  /* 
    eslint-disable 
    no-console, 
    jsx-a11y/click-events-have-key-events, 
    jsx-a11y/no-noninteractive-element-interactions 
  */
  const [visibility, setVisibility] = useState(false);

  const getVisibilityClass = () => {
    if (visibility) {
      return classes.visible;
    }
    return classes.hidden;
  };

  const search = (param) => {
    //  search function placeholder to be implemented
    console.log(param);
  };

  return (
    <div className={classes.navbar} id="outer-container">
      <div className={classes.logoContainer}>
        <div className={classes.name}>
          <img
            className={classes.logo}
            src="https://picsum.photos/100/100"
            alt=""
          />
          The&nbsp;CookBook
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.searchContainer}>
          <div className={(classes.searchTextInput, getVisibilityClass())}>
            <TextInput placeholder="Search" callback={search} />
          </div>
          <div className={classes.searchIcon}>
            <img
              height="25px"
              className={classes["search-icon"]}
              src="assets/magnifying-glass-solid.svg"
              alt=""
              onClick={() => {
                setVisibility(!visibility);
              }}
            />
          </div>
        </div>

        <div className={classes.slideOutMenuContainer}>
          <SlideoutMenu
            pageWrapId="page-wrap"
            outerContainer="outer-container"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;