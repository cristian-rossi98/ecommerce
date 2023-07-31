"use client";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Products from "./components/Products";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
    return <p>Carregando...</p>;
  }

  return (
    <>
      {console.log(data)}
      <Header />
      <main>
        <Products products={data} />
      </main>
    </>
  );
}
