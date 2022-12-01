import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <div className={classes['nav-bar']}>
      <h1>ReactMeals</h1>
      <button className={classes.button} onClick={props.onClick}>
        <ShoppingCartIcon />
        <span>Your cart</span>
        <span className={classes.count}>0</span>
      </button>
    </div>
  );
};

export default Navbar;