import { uiActions } from "./ui-slice";
import { CART_URL } from "../urls";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(CART_URL);
      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = (await fetchData()) || { items: [] };
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(uiActions.showNotification({ status: "error", title: "Error!", message: error.message }));
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(CART_URL, {
        method: "PUT",
        body: JSON.stringify({ items: cart.items }),
      });
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};
