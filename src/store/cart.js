import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isShown: false },
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
