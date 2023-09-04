import { createSelector } from '@reduxjs/toolkit';

export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
  (acc, curr) => acc + curr.quantity, 0
  )
};

const selectLang = (state) => state.langReducer.lang;
const selectCart = (state) => state.cartReducer.products;

export const selectProductsTotalPrice = createSelector (
  [selectLang, selectCart],
  (lang, cartProducts) => {
    const cartTotalPrice = cartProducts.reduce(
      (acc, curr) => acc + curr.quantity * curr.price[lang],
      0
    );
    return cartTotalPrice;
  }
);