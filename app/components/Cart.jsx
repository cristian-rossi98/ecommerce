import { useParams } from "react-router-dom";
import Product from "./Product";

export default function Cart({ handleRemoveCartProduct, cartProducts }) {
  // const params = useParams();
  // const products = JSON.parse(decodeURIComponent(params.product));

  return (
    <>
      {cartProducts.length ? (
        <ul className="w-full flex flex-col justify-evenly items-center p-6">
          {cartProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              classStyle={
                "flex w-full items-center w-5/12 px-4 m-4 bg-white rounded-md cursor-pointer transition duration-200 ease-in-out shadow-lg sm:w-3/5"
              }
              cartPage={true}
              handleRemoveCartProduct={handleRemoveCartProduct}
            />
          ))}
        </ul>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-gray-700 text-2xl text-center">
            Nenhum produto adicionado
          </p>
        </div>
      )}
    </>
  );
}
