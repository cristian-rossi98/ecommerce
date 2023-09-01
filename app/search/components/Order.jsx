import { useSelector } from "react-redux";
import languages from "../../languages/languages.json";

export default function Order({
  orderProduct,
  onOrderProductChange,
  handleOrder,
}) {
  const { lang } = useSelector((reducer) => reducer.langReducer);
  const orderTypes = [
    {
      id: 0,
      name: languages.search.order.types.relevance[lang],
    },
    {
      id: 1,
      name: languages.search.order.types.nameAZ[lang],
    },
    {
      id: 2,
      name: languages.search.order.types.nameZA[lang],
    },
    {
      id: 3,
      name: languages.search.order.types.lowerPrices[lang],
    },
    {
      id: 4,
      name: languages.search.order.types.higherPrices[lang],
    },
  ];

  return (
    <div className="text-black">
      <h1 className="text-xl font-semibold mb-2">
        {languages.search.order.title[lang]}
      </h1>
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
    </div>
  );
}
