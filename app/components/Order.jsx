import { BiMenuAltRight } from "react-icons/bi";

export default function Order({ orderProduct, onOrderProductChange }) {
  return (
    <div className="w-8 h-full z-0">
      <span className="text-neutral-800 absolute text-2xl w-8 flex justify-end z-0 outline-none">
        <BiMenuAltRight />
      </span>
      <select
        className="w-8 appearance-none bg-transparent text-transparent cursor-pointer relative z-10 outline-none"
        value={orderProduct}
        onChange={(e) => onOrderProductChange(e.target.value)}
      >
        <option value="0">Padrão</option>
        <option value="1">Nome A-Z</option>
        <option value="2">Nome Z-A</option>
        <option value="3">Menores Preços</option>
        <option value="4">Maiores Preços</option>
      </select>
    </div>
  );
}
