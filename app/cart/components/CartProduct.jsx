import { FiTrash2 } from "react-icons/fi";
import twoWords from "../../utils/twoWords";

import languages from "../../languages/languages.json";

import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
} from "../../redux/cart/slice";

import "./cartProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function CartProduct({ product, cartLenght, index }) {
  const router = useRouter();
  const { lang } = useSelector((reducer) => reducer.langReducer);
  const title = `${twoWords(product.title[lang], 0, 1)} ${
    twoWords(product.title[lang], 1, 2)
      ? twoWords(product.title[lang], 1, 2)
      : twoWords(product.title[lang], 2, 3)
  }`;
  const dispatch = useDispatch();

  return (
    <li className="w-full mb-16">
      <div
        className="flex items-start justify-between w-full"
        onClick={() => router.push(`/product?info=${product.id}`)}
      >
        <img
          className="product-image-cart mr-4 cursor-pointer"
          src={product.image}
          alt={product.title[lang]}
          rel="preload"
          loading="lazy"
        />
        <h1 className="w-full text-base font-semibold text-black cursor-pointer lg:text-2xl lg:font-bold">
          {title}
        </h1>
        <p className="w-full text-sm font-normal text-neutral-700 bg-neutral-50 text-end cursor-pointer lg:text-lg lg:font-medium">
          {languages.product.price[lang]} {product.price[lang]}
        </p>
      </div>

      <div className="flex justify-between w-full">
        <div className="w-12 mr-8 md:mr-32"></div>
        <div className="w-full">
          <div className="text-black flex flex-row justify-between w-20 rounded-sm my-2">
            <button
              onClick={() => dispatch(decreaseProductQuantity(product))}
              className="w-1/3 font-extrabold flex items-center justify-center bg-neutral-200 h-6 hover:bg-neutral-300 "
            >
              -
            </button>
            <p className="w-1/3 h-6 flex items-center justify-center border-t-2 border-b-2 border-neutral-200">
              {product.quantity}
            </p>
            <button
              onClick={() => dispatch(increaseProductQuantity(product))}
              className="w-1/3 font-medium flex items-center justify-center bg-neutral-200 h-6 hover:bg-neutral-300 "
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => dispatch(removeProduct(product.id))}
          className="text-2xl text-neutral-700 font-medium flex justify-center items-center rounded-sm px-2 hover:bg-neutral-800 hover:text-white"
        >
          <FiTrash2 />
        </button>
      </div>
      {cartLenght !== index + 1 && (
        <div className="border-t-2 border-neutral-100 mt-8"></div>
      )}
    </li>
  );
}
