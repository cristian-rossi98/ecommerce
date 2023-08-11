const Product = lazy(() => import("./FeaturedProduct"));
import BackButton from "./BackButton";
import CartProduct from "./CartProduct";
import NoResult from "./NoResult";
import calculatePrice from "./calculatePrice";
import { lazy, Suspense } from "react";

import "../styles/skeleton.css";

export default function Cart({
  handleRemoveCartProduct,
  cartProducts,
  handleSubCartProduct,
  handleSumCartProduct,
}) {
  const totalPrice = cartProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  const formatedPrice = calculatePrice(totalPrice);

  return (
    <section className="px-4 m-auto ">
      <h1 className="text-black font-bold text-xl">Meu carrinho</h1>
      <div className="border-t-2 border-neutral-200 mt-4 mb-12"></div>
      {cartProducts.length ? (
        <>
          <ul className="w-full flex flex-col justify-evenly items-center">
            {cartProducts.map((product) => (
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
              <p className="text-neutral-700 font-light">R$ {formatedPrice}</p>
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
                  R$ {formatedPrice}
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
  );
}
