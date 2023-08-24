"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import FeaturedProduct from "../components/products/FeaturedProduct";
import Order from "./components/Order";
import NoResult from "../components/NoResult";
import Skeleton from "../components/skeleton/Skeleton";

export default function Search() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams().get("search");
  const [cart, setCart] = useState([]);
  const [orderProduct, setOrderProduct] = useState("0");
  const filteredProducts = product.filter(
    (product) =>
      product.title.toLowerCase().indexOf(searchParams.toLowerCase()) !== -1
  );

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
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

  let sortedProducts = filteredProducts;

  switch (orderProduct) {
    case "1":
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      break;
    case "2":
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      break;
    case "3":
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case "4":
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return (
    <>
      {/* <Header cart={cart} /> */}
      <section className="m-auto ">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-black font-bold text-xl overflow-hidden text-ellipsis">
            Resultados para: {searchParams}
          </h1>
          <Order
            orderProduct={orderProduct}
            onOrderProductChange={setOrderProduct}
          />
        </div>
        <div className="border-t-2 border-neutral-200 mt-4 mb-12 mx-8"></div>
        {sortedProducts.length ? (
          <>
            <ul className="flex justify-center flex-wrap px-4 lg:justify-start">
              {sortedProducts.map((product) => (
                <div className="px-4 py-4 w-full lg:w-1/2 xl:w-1/4 lg:py-4">
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
          </>
        ) : (
          <NoResult value="Nenhum produto encontrado" />
        )}
      </section>
    </>
  );
}
