import { useRouter } from "next/navigation";
import "../styles/product.css";
import twoWords from "./twoWords";

export default function FeaturedProduct({
  product,
  classStyle,
  inlineStyle,
  inlineStyleBackground,
  degree,
}) {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/product?info=${product.id}`)}
      className={classStyle}
    >
      <div
        className="h-full w-full product-background"
        style={{
          backgroundImage: `repeating-linear-gradient(${degree}deg, ${inlineStyle}, ${inlineStyle} 10px, ${inlineStyleBackground} 10px, ${inlineStyleBackground} 20px)`,
          backgroundSize: "22px 22px",
        }}
      >
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
            rel="preload"
          />
        </div>
        <div className="absolute top-0 left-0">
          <h1 className="table text-3xl font-bold text-black mb-5 md:mb-0 bg-neutral-50 px-8 py-4 shadow-md product-text">
            {twoWords(product.title, 0, 1)}{" "}
            <span className="md:inline hidden">
              {twoWords(product.title, 1, 2)
                ? twoWords(product.title, 1, 2)
                : twoWords(product.title, 2, 3)}
            </span>
          </h1>
          <span className="md:hidden">
            {twoWords(product.title, 1, 2) ? (
              <h1 className="inline text-3xl font-bold text-black bg-neutral-50 px-8 py-4 shadow-md product-text">
                {twoWords(product.title, 1, 2)}
              </h1>
            ) : (
              <h1 className="inline text-3xl font-bold text-black bg-neutral-50 px-8 py-4 shadow-md product-text">
                {twoWords(product.title, 2, 3)}
              </h1>
            )}
          </span>
          <p className="table text-sm font-medium text-neutral-700 mt-5 md:mt-1 bg-neutral-50 px-8 py-4 shadow-md product-text">
            R$ {product.price}
          </p>
        </div>
      </div>
    </li>
  );
}
