const Product = lazy(() => import("./Product"));
import BackButton from "./BackButton";
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
    <section className="px-2 py-6 m-auto ">
      <div className="flex justify-between items-start">
        <BackButton />
        {totalPrice > 0 && (
          <h1 className="text-black font-semibold text-xl lg:text-2xl">
            Total R$ {formatedPrice}
          </h1>
        )}
      </div>
      {cartProducts.length ? (
        <ul className="w-full flex flex-col justify-evenly items-center">
          {cartProducts.map((product) => (
            // <Suspense
            //   fallback={
            //     <div key={product.id} className="skeleton flex w-full items-center p-4 m-4 bg-white rounded-md cursor-pointer">
            //       <div className="skeleton__thumbnail mr-2"></div>
            //       <div className="skeleton__info">
            //         <div className="skeleton__title"></div>
            //         <div className="skeleton__description"></div>
            //       </div>
            //     </div>
            //   }
            // >
            <Product
              key={product.id}
              product={product}
              classStyle={
                "flex w-full items-center p-4 m-4 bg-white rounded-md cursor-pointer transition duration-200 ease-in-out shadow-lg"
              }
              cartPage={true}
              handleRemoveCartProduct={handleRemoveCartProduct}
              handleSubCartProduct={handleSubCartProduct}
              handleSumCartProduct={handleSumCartProduct}
            />
            // </Suspense>
          ))}
        </ul>
      ) : (
        <NoResult value="Nenhum produto adicionado" />
      )}
    </section>
  );
}
