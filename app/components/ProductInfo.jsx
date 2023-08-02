import "../styles/productInfo.css";
import { useNavigate, useParams } from "react-router-dom";

import Rating from "./Rating";

export default function ProductInfo() {
  const params = useParams();
  const product = JSON.parse(decodeURIComponent(params.product));
  const navigate = useNavigate();

  let price = product.price * 5;
  price = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function handleBack() {
    navigate(-1);
  }

  return (
    <section className="p-6">
      <button
        className="mb-4 bg-red-500 p-2 text-sm font-semibold rounded-2xl"
        onClick={handleBack}
      >
        VOLTAR
      </button>
      <div className="bg-white p-10 rounded-md mb-4">
        <img className="" src={product.image} alt="" />
      </div>
      <div className="mb-10">
        <h1 className="text-lg text-gray-900 font-semibold uppercase mb-2">
          {product.title}
        </h1>
        <p className="text-base text-gray-700 mb-4">R$ {price}</p>
        <p className="text-xs text-gray-500">{product.description}</p>
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
    </section>
  );
}
