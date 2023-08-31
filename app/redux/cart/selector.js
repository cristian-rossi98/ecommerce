export const selectProductsCount = (rootReducer) => {
  // return rootReducer.cartReducer.products.reduce(
  //   (acc, curr) => acc + curr.quantity, 0
  // );
  // const productsCount = rootReducer.cartReducer.products.reduce(
  //   (acc, curr) => acc + curr.quantity, 0
  // );
  
  const storage = { ...localStorage };
  const cartStorage = JSON.parse(storage.cart);
  const cartCount = cartStorage.reduce(
    (acc, curr) => acc + curr.quantity, 0
  );
  return cartCount;
  // const numeroDeItens = Object.keys(todosItens).length;
  // localStorage.setItem("cartLength", numeroDeItens);
};

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price, 0
  );
};