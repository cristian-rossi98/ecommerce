import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clg: (state, action) => {
      console.log('redux');
    }
  }
})

export const { clg } = cartSlice.actions;

export default cartSlice.reducer;