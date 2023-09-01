"use client";
import { useEffect, useState } from "react";

import Products from "./components/products/Products";
import Skeleton from "./components/skeleton/Skeleton";
import NoResult from "./components/NoResult";
import { useSelector } from "react-redux";

import languages from "./languages/languages.json";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { lang } = useSelector((reducer) => reducer.langReducer);

  useEffect(() => {
    // const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // setCart(storedCart);

    fetch("https://json-server-rose-one.vercel.app/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Skeleton itemsNumber={20} />;
  }

  return (
    <>
      {error ? (
        <NoResult value={languages.home.noResult[lang]} />
      ) : (
        <Products products={data} />
      )}
    </>
  );
}
