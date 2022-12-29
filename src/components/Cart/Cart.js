import Card from "../UI/Card/Card";
import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const addItemToCart = (item) => {
    const updatedItem = { ...item, amount: 1 };
    console.log({ ...updatedItem });

    cartContext.addItemToCart(updatedItem);
  };

  const orderHandler = () => {
    setIsCheckout(true);
    props.onOrderCart();
  }

  const cancelOrderHandler = () => {
    setIsCheckout(false);
  }

  return (
    <div className={classes.backdrop}>
      <Card className={classes.card}>
        <div className={classes["cart-container"]}>
          {cartContext.items.map((item, index) => (
            <div key={item.id} className={classes["item-container"]}>
              <div className={classes["item-info"]}>
                <p className={classes["item-name"]}>{item.name}</p>
                <p className={classes["item-price"]}>
                  {item.price} <span>x {item.amount}</span>
                </p>
              </div>
              <div className={classes["item-btn"]}>
                <button onClick={() => cartContext.removeItemFromCart(item.id)}>
                  -
                </button>
                <button onClick={() => addItemToCart(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.total}>
          <h3>Total Amount</h3>
          <h3>${cartContext.totalAmount.toFixed(2)}</h3>
        </div>
        {isCheckout && <Checkout onCancelOrder={cancelOrderHandler}></Checkout>}
        {!isCheckout && (
          <div className={classes["btn-control"]}>
            <button
              className={classes["btn-close"]}
              onClick={props.onCloseCart}
            >
              Close
            </button>
            <button
              className={classes["btn-order"]}
              onClick={orderHandler}
            >
              Order
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Cart;
