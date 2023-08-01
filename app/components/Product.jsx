import { useNavigate } from "react-router-dom";
import "../styles/product.css";

export default function Product({ product }) {
  const navigate = useNavigate();

  let price = product.price * 5;
  price = price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleProductInfo = () => {
    const productString = JSON.stringify(product);
    navigate(`/product/${encodeURIComponent(productString)}`);
  }

  return (
    <li onClick={handleProductInfo} className="flex flex-col items-center w-2/5 p-4 mb-6 bg-white rounded-md hover:cursor-pointer">
      <img className="product-image" src={product.image} alt="" />
      <div className="h-full flex flex-col justify-between pt-4">
        <h1 className="hover:underline text-xs font-semibold text-black mb-2">{product.title}</h1>
        <p className="text-sm font-light text-black">R$ {price}</p>
      </div>
    </li>
  );
}
