import "../styles/productInfo.css";
import { useLocation, useParams } from "react-router-dom";

import Rating from "./Rating";
import BackButton from "./BackButton";
import calculatePrice from "./calculatePrice";

export default function ProductInfo({ handleCartProduct }) {
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const product = JSON.parse(decodeURIComponent(params.get('product')));
  console.log('before decode');
  const params = useParams();
  console.log('params ', params);
  const product = JSON.parse(decodeURIComponent(params.product));
  console.log('after decode', product);

  let price = calculatePrice(product.price);

  return (
    <section className="px-2 py-6">
      <BackButton />
      <section className="md:flex">
        <div className="bg-white text-center p-10 rounded-md mb-4 md:w-2/4 md:mr-6 lg:w-2/4">
          <img className="m-auto" src={product.image} alt="" />
        </div>
        <div className="md:w-2/4 lg:w-2/4">
          <div className="mb-6">
            <h1 className="text-lg text-gray-900 font-semibold uppercase mb-2">
              {product.title}
            </h1>
            <p className="text-base text-gray-700 mb-4">R$ {price}</p>
            <p className="text-xs text-gray-500">{product.description}</p>
          </div>
          <div className="w-full">
            <button
              onClick={() => handleCartProduct(product)}
              className="bg-red-500 p-4 mb-10 w-full rounded-sm hover:bg-red-600 md:w-2/5"
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
      </section>
    </section>
  );
}
