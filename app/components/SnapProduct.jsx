import "../styles/snapProduct.css";

import twoWords from "./twoWords";
import calculatePrice from "./calculatePrice";
import { useNavigate } from "react-router-dom";

export default function SnapProduct({ product }) {
  const navigate = useNavigate();

  const handleProductInfo = () => {
    // const productString = JSON.stringify(product);
    // try {
    //   navigate(`/product/${btoa(productString)}`);
    // } catch (error) {
    //   navigate(`/product/${encodeURIComponent(productString)}`);
    // }
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <div
        onClick={handleProductInfo}
        className="relative snap-center shrink-0 h-40 cursor-pointer"
      >
        <h1 className="absolute inline py-2 px-12 text-white bg-blue-700 text-lg font-bold product-title">
          {twoWords(product.title, 0, 2)}
        </h1>
        <h1 className="absolute inline py-2 px-12 text-white bg-blue-700 text-xs font-medium product-description">
          R$ {calculatePrice(product.price)}
        </h1>
        <img
          className="product-image mx-28"
          src={product.image}
          alt={product.title}
          rel="preload"
        />
      </div>
    </>
  );
}
