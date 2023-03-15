import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('f-cart')) || [],

}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const isInCart = state.cartItems.find(item => item.item.id === action.payload.id ? item : false);

      if (!isInCart) {
        state.cartItems.push({ item: { ...action.payload }, count: 1 })
        localStorage.setItem('f-cart', JSON.stringify(state.cartItems));
      }
      else {
        const newArr = state.cartItems.map((i) => {
          if (i.item.id === isInCart.item.id) {
            i.count += 1
            return i
          }
          else return i
        })
        state.cartItems = newArr;
        localStorage.setItem('f-cart', JSON.stringify(newArr));
      }

    },
    deleteCart: (state, action) => {
      const removed = state.cartItems.filter(item => item.id !== action.payload)
      state.cartItems = removed;
      localStorage.setItem('f-cart', JSON.stringify(removed));

    },
    increaseCount: (state, action) => {
      const { id } = action.payload;
      const increaseCount = state.cartItems.map((i) => {
        if (i.item.id === id) {
          i.count += 1;
          return i
        }
        else return i
      })
      state.cartItems = increaseCount;
      localStorage.setItem('f-cart', JSON.stringify(increaseCount));
    },
    decreaseCount: (state, action) => {
      const { id } = action.payload;
      const decreaseCount = state.cartItems.map((i) => {
        if (i.item.id === id) {
          i.count -= 1;
          return i
        }
        else return i
      })
      state.cartItems = decreaseCount;
      localStorage.setItem('f-cart', JSON.stringify(decreaseCount));
    },
    deleteAllItemInCart: (state, action) => {
      const { id } = action.payload;
      const removed = state.cartItems.filter(i => i.item.id !== id);
      state.cartItems = removed;
      localStorage.setItem('f-cart', JSON.stringify(removed));
    },
  }
})

export const { addCart, deleteCart, increaseCount, decreaseCount, deleteAllItemInCart } = cartSlice.actions;

export default cartSlice.reducer;