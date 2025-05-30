import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], changed: false },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    add(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      state.changed = true;
      if (existingItem) {
        // Update the existing item
        existingItem.quantity++;
      } else {
        // Add a new item
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    remove(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      state.changed = true;
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
