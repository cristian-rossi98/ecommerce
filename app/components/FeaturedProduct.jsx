import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../styles/product.css";
import calculatePrice from "./calculatePrice";

export default function FeaturedProduct({
  product,
  classStyle,
  cartPage,
  handleRemoveCartProduct,
  handleSubCartProduct,
  handleSumCartProduct,
  inlineStyle,
  inlineStyleBackground,
  degree,
  category,
}) {
  const navigate = useNavigate();

  let price = calculatePrice(product.price);

  const handleProductInfo = () => {
    // navigate({
    //   pathname: `/product`,
    //   search: `?product=${encodeURIComponent(JSON.stringify(product))}`,
    // });

    const productString = JSON.stringify(product);
    try {
      navigate(`/product/${btoa(productString)}`);
    } catch (error) {
      navigate(`/product/${encodeURIComponent(productString)}`);
    }
  };

  const getFirstTwoWords = (inputString, pos1, pos2) => {
    const stringWithoutHyphens = inputString.replace(/-/g, "");
    const words = stringWithoutHyphens.split(" ");
    const firstTwoWords = words.slice(pos1, pos2);
    return firstTwoWords.join(" ");
  };

  return (
    <>
      {product.category == category && (
        <li
          className={classStyle}
          style={{
            backgroundImage: `repeating-linear-gradient(${degree}deg, ${inlineStyle}, ${inlineStyle} 10px, ${inlineStyleBackground} 10px, ${inlineStyleBackground} 20px)`,
            backgroundSize: "22px 22px",
          }}
        >
          <div>
            <img
              onClick={handleProductInfo}
              className="product-image"
              src={product.image}
              alt={product.title}
              rel="preload"
            />
          </div>
          <div className="absolute top-0 left-0">
            <h1
              onClick={handleProductInfo}
              className="hover:underline table text-3xl font-bold text-black mb-5 bg-neutral-50 px-8 py-4"
            >
              {getFirstTwoWords(product.title, 0, 1)}
            </h1>
            {getFirstTwoWords(product.title, 1, 2) ? (
              <h1
                onClick={handleProductInfo}
                className="hover:underline inline text-3xl font-bold text-black bg-neutral-50 px-8 py-4"
              >
                {getFirstTwoWords(product.title, 1, 2)}
              </h1>
            ) : (
              <h1
                onClick={handleProductInfo}
                className="hover:underline inline text-3xl font-bold text-black bg-neutral-50 px-8 py-4"
              >
                {getFirstTwoWords(product.title, 2, 3)}
              </h1>
            )}
            <p
              onClick={handleProductInfo}
              className="hover:underline table text-sm font-medium text-neutral-700 mt-5 bg-neutral-50 px-8 py-4"
            >
              R$ {price}
            </p>
          </div>
        </li>
      )}

      {/* <p className="text-sm font-light text-black">R$ {price}</p> */}
      {/* Carrinho */}
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
    </>
  );
}
