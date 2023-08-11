import { useNavigate, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../styles/product.css";
import calculatePrice from "./calculatePrice";
import twoWords from "./twoWords";

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

    // const productString = JSON.stringify(product.id);
    // try {
    //   navigate(`/product/${btoa(productString)}`);
    // } catch (error) {
    //   navigate(`/product/${encodeURIComponent(productString)}`);
    // }
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <li
        onClick={handleProductInfo}
        className={classStyle}
        style={{
          backgroundImage: `repeating-linear-gradient(${degree}deg, ${inlineStyle}, ${inlineStyle} 10px, ${inlineStyleBackground} 10px, ${inlineStyleBackground} 20px)`,
          backgroundSize: "22px 22px",
        }}
      >
        <div>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
            rel="preload"
          />
        </div>
        <div className="absolute top-0 left-0">
          <h1
            onClick={handleProductInfo}
            className="hover:underline table text-3xl font-bold text-black mb-5 bg-neutral-50 px-8 py-4 shadow-md"
          >
            {twoWords(product.title, 0, 1)}
          </h1>
          {twoWords(product.title, 1, 2) ? (
            <h1
              onClick={handleProductInfo}
              className="hover:underline inline text-3xl font-bold text-black bg-neutral-50 px-8 py-4 shadow-md"
            >
              {twoWords(product.title, 1, 2)}
            </h1>
          ) : (
            <h1
              onClick={handleProductInfo}
              className="hover:underline inline text-3xl font-bold text-black bg-neutral-50 px-8 py-4 shadow-md"
            >
              {twoWords(product.title, 2, 3)}
            </h1>
          )}
          <p
            onClick={handleProductInfo}
            className="hover:underline table text-sm font-medium text-neutral-700 mt-5 bg-neutral-50 px-8 py-4 shadow-md"
          >
            R$ {price}
          </p>
        </div>
      </li>
    </>
  );
}
