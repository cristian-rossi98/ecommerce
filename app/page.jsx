"use client";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [back, setBack] = useState(false);

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

  const handleSearchBar = () => {
    setSearch(!search);
  }

  return (
    <>
      {console.log(data)}
      <Header clickSearch={handleSearchBar} searchActive={search} />
      <SearchBar searchActive={search} />
      <main>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Products products={data} />
                </>
              }
            ></Route>
            <Route
              path="/product/:product"
              exact
              element={
                <>
                  <ProductInfo />
                </>
              }
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}
