import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: { items: [] },
  reducers: {
    add(state, action) {
      console.log(state.items);
      console.log(action.payload);
      const existingItem = state.items.find((item) => item.key === action.payload.key);

      if (existingItem) {
        // Update the existing item
        existingItem.quantity += 1;
      } else {
        // Add a new item
        state.items.push({
          key: action.payload.key,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
        });
      }
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
