// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = state.find(p => p.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const item = state.find(p => p.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
