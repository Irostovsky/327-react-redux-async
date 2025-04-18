import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {!!cartItems.length &&
          cartItems.map((item) => (
            <CartItem
              key={item.key}
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.price * item.quantity,
                price: item.price,
              }}
            />
          ))}
      </ul>
      {!cartItems.length && <p>Your cart is empty!</p>}
    </Card>
  );
};

export default Cart;
