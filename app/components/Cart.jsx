import { useParams } from "react-router-dom";
import Product from "./Product";
import BackButton from "./BackButton";
import calculatePrice from "./calculatePrice";

export default function Cart({
  handleRemoveCartProduct,
  cartProducts,
  handleSubCartProduct,
  handleSumCartProduct
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
            <Product
              key={product.id}
              product={product}
              classStyle={
                "flex w-full items-center w-5/12 p-4 m-4 bg-white rounded-md cursor-pointer transition duration-200 ease-in-out shadow-lg"
              }
              cartPage={true}
              handleRemoveCartProduct={handleRemoveCartProduct}
              handleSubCartProduct={handleSubCartProduct}
              handleSumCartProduct={handleSumCartProduct}
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
    </section>
  );
}
