"use client";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Products from "./components/Products";
import Skeleton from "./components/Skeleton";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    fetch("https://json-server-rose-one.vercel.app/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Erro ao buscar dados: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Skeleton itemsNumber={20} />;
  }

  return (
    <>
      <Header cart={cart} />
      <Products products={data} />
    </>
  );
}
