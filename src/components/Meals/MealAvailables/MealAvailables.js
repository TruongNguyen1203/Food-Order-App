import React from "react";
import Card from '../../UI/Card/Card'
import classes from './MealAvailables.module.css'
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
  return (
    <Card className={classes.container}>
      <ul>
        {DUMMY_MEALS.map((meal, index) => (
          <li key={index}>
              <div className={classes.item}>
                  <div className={classes['item-info']}>
                      <p className={classes['item-name']}>{meal.name}</p>
                      <p className={classes['item-description']}>{meal.description}</p>
                      <p className={classes['item-price']}>${meal.price}</p>
                  </div>
                  <div className={classes['item-info']}>
                      <p className={classes['item-amount']}>Amount <input className={classes['item-input']} type="number"></input></p>
                      <button className={classes.btnAdd}>+ Add</button>
                  </div>
              </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default MealAvailables;
