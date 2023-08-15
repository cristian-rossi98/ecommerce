import { useRouter } from "next/navigation";

import "../styles/snapProduct.css";

import twoWords from "./twoWords";

export default function SnapProduct({ product }) {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push(`/product?info=${product.id}`)}
        className="relative snap-center shrink-0 h-40 cursor-pointer w-full md:h-full"
      >
        <h1 className="absolute inline py-2 px-12 text-white bg-blue-700 text-lg font-bold product-title">
          {twoWords(product.title, 0, 2)}
        </h1>
        <h1 className="absolute inline py-2 px-12 text-white bg-blue-700 text-xs font-medium product-description">
          R$ {product.price}
        </h1>
        <img
          className="product-image mx-28"
          src={product.image}
          alt={product.title}
          rel="preload"
        />
      </div>
    </>
  );
}
