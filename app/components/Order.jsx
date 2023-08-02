export default function Order({ orderProduct, onOrderProductChange }) {
  return (
    <section className="w-full flex justify-end pr-10">
      <select
        className="shadow-md"
        value={orderProduct}
        onChange={(e) => onOrderProductChange(e.target.value)}
      >
        <option value="0">Ordenar por:</option>
        <option value="1">Nome A-Z</option>
        <option value="2">Nome Z-A</option>
        <option value="3">Menores Preços</option>
        <option value="4">Maiores Preços</option>
      </select>
    </section>
  );
}
