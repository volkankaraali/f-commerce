import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem('f-favorites')) || [],

}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const existInFavorites = state.favorites.find(item => item.id === action.payload.id)
      if (!existInFavorites) {
        state.favorites.push(action.payload)
        localStorage.setItem('f-favorites', JSON.stringify(state.favorites))
      };
    },
    deleteFavorite: (state, action) => {
      const removed = state.favorites.filter(item => item.id !== action.payload)
      state.favorites = removed;
      localStorage.setItem('f-favorites', JSON.stringify(removed))
    }
  }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;