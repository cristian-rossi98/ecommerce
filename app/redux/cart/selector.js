import { createSelector } from '@reduxjs/toolkit';

export const selectProductsCount = (rootReducer) => {
  // return rootReducer.cartReducer.products.reduce(
  //   (acc, curr) => acc + curr.quantity, 0
  // );
  // const productsCount = rootReducer.cartReducer.products.reduce(
  //   (acc, curr) => acc + curr.quantity, 0
  // );
  let cartStorage = []
  const storage = { ...localStorage };
  if (storage.cart) {
    cartStorage = JSON.parse(storage.cart) ;
  }
  const cartCount = cartStorage.reduce(
    (acc, curr) => acc + curr.quantity, 0
  );
  return cartCount;
  // const numeroDeItens = Object.keys(todosItens).length;
  // localStorage.setItem("cartLength", numeroDeItens);
};

const selectLang = (state) => state.langReducer.lang;
const selectCart = (state) => state.cartReducer.products;

// export const selectProductsTotalPrice = (rootReducer) => {
//   const { lang } = useSelector((reducer) => reducer.langReducer);
//   const cartTotalPrice = rootReducer.cartReducer.products.reduce(
//     (acc, curr) => acc + curr.quantity * curr.price[lang], 0
//   );
//   return cartTotalPrice;
// };

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