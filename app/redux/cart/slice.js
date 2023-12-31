import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
}

if (typeof window !== "undefined") {
  initialState.products = JSON.parse(localStorage.getItem("cart")) || [];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const storage = { ...localStorage };
      if (storage.cart) {
        const cartStorage = JSON.parse(storage.cart);

        const productExistInCart = cartStorage.some(
          (product) => product.id === action.payload.id
        );
  
        if (productExistInCart) {
          state.products = cartStorage.map((product) => 
            product.id === action.payload.id 
            ? { ...product, quantity: product.quantity + 1}
            : product
          );
          localStorage.setItem("cart", JSON.stringify(state.products));
          return;
        }

        state.products = [ ... cartStorage, { ...action.payload, quantity: 1}]
        localStorage.setItem("cart", JSON.stringify(state.products));
        return;
      }
      
      state.products = [ ... state.products, { ...action.payload, quantity: 1}]
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
        ? { ...product, quantity: product.quantity + 1}
        : product
      )
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
        ? { ...product, quantity: product.quantity - 1}
        : product
      )
      .filter((product) => product.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    setCart: (state, action) => {
      state.products = action.payload;
    }
  },
});

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct, setCart } = cartSlice.actions;

export default cartSlice.reducer;