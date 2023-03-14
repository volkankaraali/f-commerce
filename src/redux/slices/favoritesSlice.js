import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],

}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    deleteFavorite: (state, action) => {
      const removed = state.favorites.filter(item => item.id !== action.payload)
      state.favorites = removed;
    }
  }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;