"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import FeaturedProduct from "../components/FeaturedProduct";
import Order from "../components/Order";
import NoResult from "../components/NoResult";
import Skeleton from "../components/Skeleton";

export default function Page() {
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
      <Header cart={cart} />
      <section className="px-4 m-auto ">
        <h1 className="text-black font-bold text-xl">
          Pesquisa: {searchParams}
        </h1>
        <div className="border-t-2 border-neutral-200 mt-4 mb-12"></div>
        {sortedProducts.length ? (
          <>
            <Order
              orderProduct={orderProduct}
              onOrderProductChange={setOrderProduct}
            />
            <ul>
              {sortedProducts.map((product) => (
                <div className="p-8">
                  <FeaturedProduct
                    key={product.id}
                    product={product}
                    classStyle={`relative flex justify-center items-center w-full h-96 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:w-60`}
                    inlineStyle="rgb(245 245 245)"
                    inlineStyleBackground="rgb(245 245 245)"
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
