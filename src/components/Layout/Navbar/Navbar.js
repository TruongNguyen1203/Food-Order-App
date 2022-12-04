import React, {useContext} from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Navbar.module.css";
import CartContext from "../../../store/CartContext";
const Navbar = (props) => {
  const cartContext = useContext(CartContext);

  const totalItems = cartContext.items.reduce(
    (total, items) => total + items.amount,
    0
  );
  return (
    <div className={classes["nav-bar"]}>
      <h1>ReactMeals</h1>
      <button className={classes.button} onClick={props.onClick}>
        <ShoppingCartIcon />
        <span>Your cart</span>
        <span className={classes.count}>{totalItems}</span>
      </button>
    </div>
  );
};

export default Navbar;
