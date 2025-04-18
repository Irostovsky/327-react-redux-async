import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import cartItemsReducer from "./cart_items";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
  },
});

export default store;
