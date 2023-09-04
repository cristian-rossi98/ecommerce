export const localStorageMiddleware = () => (dispatch) => {
  try {
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(setCart(cartProducts));
  } catch (error) {
    console.log('local storage error: ', error);
  }
};

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../slice";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;