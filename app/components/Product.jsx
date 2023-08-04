import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../styles/product.css";
import calculatePrice from "./calculatePrice";

export default function Product({
  product,
  classStyle,
  cartPage,
  handleRemoveCartProduct,
  handleSubCartProduct,
  handleSumCartProduct,
}) {
  const navigate = useNavigate();

  let price = calculatePrice(product.price);

  const handleProductInfo = () => {
    // navigate({
    //   pathname: `/product/`,
    //   search: `${encodeURIComponent(JSON.stringify(product))}`,
    // });

    const productString = JSON.stringify(product);
    navigate(`/product/${encodeURIComponent(productString)}`);
  };

  return (
    <li className={classStyle}>
      <div className="h-44 w-52 flex justify-center items-center mx-8">
        <img
          onClick={handleProductInfo}
          className="product-image"
          src={product.image}
          alt={product.title}
          rel="preload"
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <h1
          onClick={handleProductInfo}
          className="hover:underline text-xs font-semibold text-black mb-2"
        >
          {product.title}
        </h1>
        <p className="text-sm font-light text-black">R$ {price}</p>
        {cartPage && (
          <>
            <div className="text-black flex flex-row justify-between w-20 border-solid border-2 border-gray-300 rounded-sm my-2">
              <button
                onClick={() => handleSubCartProduct(product)}
                className="w-1/3 font-extrabold flex items-center justify-center bg-gray-300 h-6 hover:bg-gray-400"
              >
                -
              </button>
              <p className="w-1/3 h-6 flex items-center justify-center">
                {product.quantity}
              </p>
              <button
                onClick={() => handleSumCartProduct(product)}
                className="w-1/3 font-medium flex items-center justify-center bg-gray-300 h-6 hover:bg-gray-400"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveCartProduct(product.id)}
              className="text-sm font-medium bg-red-500 w-4/5 flex justify-center items-center p-1 rounded-sm hover:bg-red-600 md:w-2/5"
            >
              <FaTimes />
              <span className="ml-2">Remover</span>
            </button>
          </>
        )}
      </div>
    </li>
  );
}
