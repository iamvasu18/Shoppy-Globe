import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchReducer from './searchSlice'; // 👈 Add this

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer, // 👈 Register it here
  },
});

export default store;
