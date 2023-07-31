import "../styles/product.css";

export default function Product({ product }) {
  return (
    <li className="flex flex-col items-center w-2/5 p-4 mb-6 bg-white rounded-md">
      <img className="product-image" src={product.image} alt="" />
      <div className="h-full flex flex-col justify-between pt-4">
        <h1 className="text-xs text-black mb-2">{product.title}</h1>
        <p className="text-sm text-black">R$ {product.price * 5}</p>
      </div>
      {console.log(product)}
    </li>
  );
}
