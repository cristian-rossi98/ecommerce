"use client";

import Header from "../components/Header";
import NoResult from "../components/NoResult";
import CartProduct from "../components/CartProduct";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedItems);
  console.log(cart);

  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const handleRemoveCartProduct = (productId) => {
    const updateCart = cart.filter((product) => product.id !== productId);

    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    toast.success("Produto removido do carrinho");
  };

  const handleSubCartProduct = (product) => {
    const updateCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const handleSumCartProduct = (product) => {
    const updateCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  return (
    <>
      <Header cart={cart} />
      <section className="px-4 m-auto ">
        <h1 className="text-black font-bold text-xl">Meu carrinho</h1>
        <div className="border-t-2 border-neutral-200 mt-4 mb-12"></div>
        {cart.length ? (
          <>
            <ul className="w-full flex flex-col justify-evenly items-center">
              {cart.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  cartPage={true}
                  handleRemoveCartProduct={handleRemoveCartProduct}
                  handleSubCartProduct={handleSubCartProduct}
                  handleSumCartProduct={handleSumCartProduct}
                />
              ))}
            </ul>
            <div className="border-t-2 border-b-2 border-neutral-100 py-4 mb-2">
              <div className="flex justify-between">
                <p className="text-neutral-700 font-light mb-2">Subtotal</p>
                <p className="text-neutral-700 font-light">
                  R$ {totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-neutral-700 font-light">Frete</p>
                <p className="text-neutral-800 font-bold">GRÁTIS</p>
              </div>
            </div>
            {totalPrice > 0 && (
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <p className="text-black font-semibold lg:text-2xl">Total</p>
                  <p className="text-black font-semibold lg:text-2xl">
                    R$ {totalPrice.toFixed(2)}
                  </p>
                </div>
                <button className="bg-black p-4 mb-10 w-full rounded-sm md:w-2/5">
                  FINALIZAR COMPRA
                </button>
              </div>
            )}
          </>
        ) : (
          <NoResult value="Seu carrinho está vazio" />
        )}
      </section>
    </>
  );
}
