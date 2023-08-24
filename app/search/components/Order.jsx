import { BiMenuAltRight } from "react-icons/bi";

export default function Order({
  orderProduct,
  onOrderProductChange,
  handleOrder,
}) {
  return (
    <div className="text-black">
      <h1 className="text-xl font-semibold mb-2">Ordenar</h1>
      <button
        className={`mb-1 hover:underline w-full text-left ${
          orderProduct === 0 ? "underline" : "hover:underline"
        }`}
        onClick={() => handleOrder(0)}
      >
        Relevantes
      </button>
      <button
        className={`mb-1 hover:underline w-full text-left ${
          orderProduct === 1 ? "underline" : "hover:underline"
        }`}
        onClick={() => handleOrder(1)}
      >
        Nome A-Z
      </button>
      <button
        className={`mb-1 hover:underline w-full text-left ${
          orderProduct === 2 ? "underline" : "hover:underline"
        }`}
        onClick={() => handleOrder(2)}
      >
        Nome Z-A
      </button>
      <button
        className={`mb-1 hover:underline w-full text-left ${
          orderProduct === 3 ? "underline" : "hover:underline"
        }`}
        onClick={() => handleOrder(3)}
      >
        Menores Preços
      </button>
      <button
        className={`mb-1 hover:underline w-full text-left ${
          orderProduct === 4 ? "underline" : "hover:underline"
        }`}
        onClick={() => handleOrder(4)}
      >
        Maiores Preços
      </button>
    </div>
  );
}
