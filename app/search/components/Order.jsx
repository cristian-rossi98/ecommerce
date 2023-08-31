import { BiMenuAltRight } from "react-icons/bi";

export default function Order({
  orderProduct,
  onOrderProductChange,
  handleOrder,
}) {
  const orderTypes = [
    {
      id: 0,
      name: "Relevantes",
    },
    {
      id: 1,
      name: "Nome A-Z",
    },
    {
      id: 2,
      name: "Nome Z-A",
    },
    {
      id: 3,
      name: "Menores Preços",
    },
    {
      id: 4,
      name: "Maiores Preços",
    },
  ];

  return (
    <div className="text-black">
      <h1 className="text-xl font-semibold mb-2">Ordenar</h1>
      {orderTypes.map((type) => (
        <button
          className={`mb-1 hover:underline w-6/12 text-left lg:w-full ${
            orderProduct === type.id ? "underline" : "hover:underline"
          }`}
          onClick={() => handleOrder(type.id)}
        >
          {type.name}
        </button>
      ))}
      {/* <button
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
      </button> */}
    </div>
  );
}
