import { useRouter } from "next/navigation";

import "./snapProduct.css";

import twoWords from "../../utils/twoWords";

import languages from "../../languages/languages.json";
import { useSelector } from "react-redux";

export default function SnapProduct({ product }) {
  const router = useRouter();
  const { lang } = useSelector((reducer) => reducer.langReducer);

  return (
    <>
      <div
        onClick={() => router.push(`/product?info=${product.id}`)}
        // className="relative snap-center shrink-0 h-40 cursor-pointer w-full md:h-full flex justify-center"
        className="w-80 ml-20 cursor-pointer lg:ml-60"
      >
        {/* <h1 className="absolute inline py-2 px-12 text-white bg-slate-600 text-sm font-bold product-title">
          {twoWords(product.title[lang], 0, 2)}
        </h1>
        <h1 className="absolute inline py-2 px-12 text-white bg-slate-600 text-xs font-medium product-description">
          {languages.product.price[lang]} {product.price[lang]}
        </h1> */}
        <div className=" h-40 flex justify-center">
          <img
            className="mx-28"
            src={product.image}
            alt={product.title[lang]}
            rel="preload"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
