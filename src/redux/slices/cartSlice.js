import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteCart: (state, action) => {
      const removed = state.cartItems.filter(item => item.id !== action.payload)
      state.cartItems = removed;
    }
  }
})

export const { addCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;