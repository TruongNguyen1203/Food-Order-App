import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar/Navbar";
import mealImg from "./assets/meals.jpeg";
import MealDescription from "./components/Meals/MealDescription/MealDescription";
import MealAvailables from "./components/Meals/MealAvailables/MealAvailables";
import Cart from "../src/components/Cart/Cart";

function App() {
  const [isCart, setIsCart] = useState(false);

  const onClickHandler = () => {
    setIsCart(true);
  };

  const onCloseCart = () => {
    setIsCart(false);
  }

  const onOrderCart = () => {
    setIsCart(false);
  }

  return (
    <div>
      {isCart && <Cart onCloseCart={onCloseCart} onOrderCart={onOrderCart}></Cart>}
      <Navbar onClick={onClickHandler}></Navbar>
      <div className="main-img">
        <img src={mealImg} alt="Meal image"></img>
      </div>
      <MealDescription></MealDescription>
      <MealAvailables></MealAvailables>
    </div>
  );
}

export default App;
