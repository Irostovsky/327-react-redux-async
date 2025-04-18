import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);
  const totalQuantity = cartItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
