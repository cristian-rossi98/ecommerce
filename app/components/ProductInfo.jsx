import "../styles/productInfo.css";
import { useParams } from "react-router-dom";

import Rating from "./Rating";
import calculatePrice from "./calculatePrice";
import twoWords from "./twoWords";

export default function ProductInfo({ handleCartProduct, products }) {
  console.log("load");
  const params = useParams();
  let productId;

  try {
    productId = JSON.parse(atob(params.product));
  } catch (error) {
    productId = JSON.parse(decodeURIComponent(params.product));
  }

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const price = calculatePrice(product.price);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <section className="md:flex">
      <div
        className="bg-blue-800 relative flex justify-center items-center w-full h-auto py-20 
                  cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:w-60"
      >
        {/* <img className="m-auto" src={product.image} alt="" /> */}
        <div>
          <img
            className="product-image-info"
            src={product.image}
            alt={product.title}
            rel="preload"
          />
        </div>
        <div className="absolute top-5 left-0">
          <h1 className="hover:underline text-3xl font-bold text-black bg-neutral-50 px-6 pt-4">
            {twoWords(product.title, 0, 1)}
          </h1>
          {twoWords(product.title, 1, 2) ? (
            <h1 className="hover:underline text-3xl font-bold text-black bg-neutral-50 px-6 py-2">
              {twoWords(product.title, 1, 2)}
            </h1>
          ) : (
            <h1 className="hover:underline text-3xl font-bold text-black bg-neutral-50 px-6 py-2">
              {twoWords(product.title, 2, 3)}
            </h1>
          )}
          <p className="hover:underline table text-base font-bold text-neutral-700  bg-neutral-50 px-6 py-4">
            R$ {price}
          </p>
        </div>
      </div>

      <div className="px-4">
        <div className="md:w-2/4 lg:w-2/4">
          <div className="mb-16 mt-8">
            <h1 className="text-lg font-semibold text-neutral-800 text-justify">
              {product.title}
            </h1>
            <p className="text-lg text-neutral-800 text-justify">
              {product.description}
            </p>
          </div>
          <div className="w-full">
            <button
              onClick={() => handleCartProduct(product)}
              className="bg-black p-4 mb-10 w-full rounded-sm md:w-2/5"
            >
              COMPRAR
            </button>
          </div>
          <div className="flex flex-col items-center text-gray-900">
            <p className="text-6xl font-medium">
              {product.rating.rate}
              <span className="text-3xl">/5</span>
            </p>
            <Rating value={product.rating.rate} />
            <p className="text-xs font-medium text-gray-500">
              Baseado em {product.rating.count} avaliações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
