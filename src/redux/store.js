import { configureStore } from "@reduxjs/toolkit";

// slices
import { cartSlice, favoritesSlice } from "./slices";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
  }
})