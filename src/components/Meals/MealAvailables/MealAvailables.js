import React, { useContext, useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import classes from "./MealAvailables.module.css";
import CartContext from "../../../store/CartContext";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealAvailables = (props) => {
  const cartContext = useContext(CartContext);

  const inputRef = useRef();

  const addItemToCartHandler = (item) => {
    let amount  = inputRef.current.value;
    const addedItem = { ...item, amount: +amount };
    cartContext.addItemToCart(addedItem);
  };
  return (
    <Card className={classes.container}>
      <ul>
        {DUMMY_MEALS.map((meal, index) => (
          <li key={index}>
            <div className={classes.item}>
              <div className={classes["item-info"]}>
                <p className={classes["item-name"]}>{meal.name}</p>
                <p className={classes["item-description"]}>
                  {meal.description}
                </p>
                <p className={classes["item-price"]}>${meal.price}</p>
              </div>
              <div className={classes["item-info"]}>
                <p className={classes["item-amount"]}>
                  Amount{" "}
                  <input
                    ref={inputRef}
                    id = {index}
                    className={classes["item-input"]}
                    type="number"
                    min="1"
                    max="5"
                    defaultValue="1"
                  ></input>
                </p>
                <button
                  className={classes.btnAdd}
                  onClick={() => {
                    addItemToCartHandler(meal);
                  }}
                >
                  + Add
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default MealAvailables;
