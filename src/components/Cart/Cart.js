import Card from "../UI/Card/Card";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.card}>
        <div className={classes["item-container"]}>
          <div className={classes["item-info"]}>
            <p className={classes["item-name"]}>Sushi</p>
            <p className={classes["item-price"]}>
              $22.99 <span>x 1</span>
            </p>
          </div>
          <div className={classes["item-btn"]}>
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div className={classes["item-container"]}>
          <div className={classes["item-info"]}>
            <p className={classes["item-name"]}>Schnitzel</p>
            <p className={classes["item-price"]}>
              $16.5 <span>x 2</span>
            </p>
          </div>
          <div className={classes["item-btn"]}>
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div className={classes.total}>
          <h3>Total Amount</h3>
          <h3>$55.99</h3>
        </div>
        <div className={classes['btn-control']}>
          <button className={classes['btn-close']} onClick={props.onCloseCart}>Close</button>
          <button className={classes['btn-order']} onClick={props.onOrderCart}>Order</button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
