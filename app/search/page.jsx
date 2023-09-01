"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import FeaturedProduct from "../components/products/FeaturedProduct";
import Order from "./components/Order";
import NoResult from "../components/NoResult";
import Skeleton from "../components/skeleton/Skeleton";

import languages from "../languages/languages.json";
import { useSelector } from "react-redux";

export default function Search() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams().get("search");
  const [cart, setCart] = useState([]);
  const [orderProduct, setOrderProduct] = useState(0);
  const filteredProducts = product.filter(
    (product) =>
      product.title.toLowerCase().indexOf(searchParams.toLowerCase()) !== -1
  );
  const { lang } = useSelector((reducer) => reducer.langReducer);

  useEffect(() => {
    // setCart(JSON.parse(localStorage.getItem("cart")) || []);
    fetch(`https://json-server-rose-one.vercel.app/products/`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Erro ao buscar dados: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Skeleton itemsNumber={1} />;
  }

  const handleOrder = (value) => {
    setOrderProduct(value);
    console.log(orderProduct);
  };

  let sortedProducts = filteredProducts;

  switch (orderProduct) {
    case 1:
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      break;
    case 2:
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      break;
    case 3:
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case 4:
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return (
    <>
      <section className="m-auto ">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-black text-xl overflow-hidden text-ellipsis">
            {languages.search.header.showing[lang]} {sortedProducts.length}
            {sortedProducts.length > 1 ? (
              <span> {languages.search.header.results.plural[lang]} </span>
            ) : (
              <span> {languages.search.header.results.singular[lang]} </span>
            )}
            <span> "</span>
            <span className="font-semibold">{searchParams}</span>
            <span>"</span>
          </h1>
        </div>
        <div className="border-t-2 border-neutral-200 mt-4 mb-12 mx-8"></div>
        {sortedProducts.length ? (
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/12 px-8">
              <Order
                handleOrder={setOrderProduct}
                orderProduct={orderProduct}
              />
            </div>
            <ul className="flex justify-center w-full flex-wrap px-4 lg:justify-start">
              {sortedProducts.map((product) => (
                <div className="py-4 w-full lg:w-1/2 px-4">
                  <FeaturedProduct
                    key={product.id}
                    product={product}
                    classStyle={`relative flex justify-center items-center w-full h-96 h-44rem cursor-pointer transition duration-200 ease-in-out overflow-hidden relative product-background`}
                    inlineStyle="rgb(244 244 244)"
                    inlineStyleBackground="rgb(244 244 244)"
                    degree={0}
                  />
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <NoResult value={languages.search.noResult[lang]} />
        )}
      </section>
    </>
  );
}
