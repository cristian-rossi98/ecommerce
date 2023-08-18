import { useRouter } from "next/navigation";

import "./snapProduct.css";

import twoWords from "../../utils/twoWords";

export default function SnapProduct({ product }) {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push(`/product?info=${product.id}`)}
        className="relative snap-center shrink-0 h-40 cursor-pointer w-full md:h-full flex justify-center"
      >
        <h1 className="absolute inline py-2 px-12 text-white bg-slate-600 text-sm font-bold product-title">
          {twoWords(product.title, 0, 2)}
        </h1>
        <h1 className="absolute inline py-2 px-12 text-white bg-slate-600 text-xs font-medium product-description">
          R$ {product.price}
        </h1>
        <div className=" h-40 md:h-56 lg:h-72 flex justify-center">
          <img
            className="mx-28"
            src={product.image}
            alt={product.title}
            rel="preload"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
