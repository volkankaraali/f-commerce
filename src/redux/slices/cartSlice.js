import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],

}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

  }
})


export default cartSlice.reducer;