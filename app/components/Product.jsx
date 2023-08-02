import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../styles/product.css";

export default function Product({
  product,
  classStyle,
  cartPage,
  handleRemoveCartProduct,
}) {
  const navigate = useNavigate();

  let price = product.price * 5;
  price = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleProductInfo = () => {
    const productString = JSON.stringify(product);
    navigate(`/product/${encodeURIComponent(productString)}`);
  };

  return (
    <li
      className={classStyle}
    >
      <div className="h-44 w-52 flex justify-center items-center mx-8">
        <img onClick={handleProductInfo} className="product-image" src={product.image} alt="" />
      </div>
      <div className="h-32 w-full flex flex-col justify-between pt-4">
        <h1 onClick={handleProductInfo} className="hover:underline text-xs font-semibold text-black mb-2">
          {product.title}
        </h1>
        <p className="text-sm font-light text-black">R$ {price}</p>
        {cartPage && (
          <button
            onClick={() => handleRemoveCartProduct(product.id)}
            className="text-sm font-medium bg-red-500 w-3/5 flex justify-center items-center p-1 rounded-sm hover:bg-red-600 md:w-2/5"
          >
            <FaTimes />
            <span className="ml-2">Remover</span>
          </button>
        )}
      </div>
    </li>
  );
}
