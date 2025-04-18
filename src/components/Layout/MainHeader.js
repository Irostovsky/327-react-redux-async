import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartButtonHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
