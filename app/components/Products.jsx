import Product from "./Product";

export default function Products({ products }) {
  return (
    <ul className="p-6 flex justify-around flex-wrap">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
