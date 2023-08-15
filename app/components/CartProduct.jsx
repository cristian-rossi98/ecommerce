import { FiTrash2 } from "react-icons/fi";
import twoWords from "./twoWords";

import "../styles/cartProduct.css";

export default function CartProduct({
  product,
  handleSubCartProduct,
  handleSumCartProduct,
  handleRemoveCartProduct,
}) {
  const title = `${twoWords(product.title, 0, 1)} ${
    twoWords(product.title, 1, 2)
      ? twoWords(product.title, 1, 2)
      : twoWords(product.title, 2, 3)
  }`;

  return (
    <li className="w-full mb-16">
      <div className="flex items-start justify-between w-full">
        <img
          className="product-image-cart mr-4"
          src={product.image}
          alt={product.title}
          rel="preload"
        />
        <h1 className="w-full text-base font-semibold text-black lg:text-2xl lg:font-bold">
          {title}
        </h1>
        <p className="w-full text-sm font-normal text-neutral-700 bg-neutral-50 text-end lg:text-lg lg:font-medium">
          R$ {product.price}
        </p>
      </div>

      <div className="flex justify-between w-full">
        <div className="w-12 mr-4 lg:mr-32"></div>
        <div className="w-full">
          <div className="text-black flex flex-row justify-between w-20 rounded-sm my-2">
            <button
              onClick={() => handleSubCartProduct(product)}
              className="w-1/3 font-extrabold flex items-center justify-center bg-neutral-200 h-6 hover:bg-neutral-300 "
            >
              -
            </button>
            <p className="w-1/3 h-6 flex items-center justify-center border-t-2 border-b-2 border-neutral-200">
              {product.quantity}
            </p>
            <button
              onClick={() => handleSumCartProduct(product)}
              className="w-1/3 font-medium flex items-center justify-center bg-neutral-200 h-6 hover:bg-neutral-300 "
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => handleRemoveCartProduct(product.id)}
          className="text-2xl text-neutral-700 font-medium flex justify-center items-center rounded-sm px-2 hover:bg-neutral-800 hover:text-white"
        >
          <FiTrash2 />
        </button>
      </div>
      <div className="border-t-2 border-neutral-100 mt-8"></div>
    </li>
  );
}
