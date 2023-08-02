"use client";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Order";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [orderProduct, setOrderProduct] = useState("0");
  const [cartProducts, setCartProducts] = useState([]);

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
    setSearchBarActive(!searchBarActive);
    if (searchBarActive) {
      setSearchProduct("");
    }
  };

  const handleCartProduct = (product) => {
    setCartProducts((prevCart) => [
      ...prevCart,
      { id: product.id, title: product.title, price: product.price },
    ]);
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <>
      <Header clickSearch={handleSearchBar} searchActive={searchBarActive} />
      <SearchBar
        searchActive={searchBarActive}
        searchProduct={searchProduct}
        onSearchProductChange={setSearchProduct}
      />
      <Filter
        orderProduct={orderProduct}
        onOrderProductChange={setOrderProduct}
      />
      <main>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Products
                    products={data}
                    searchProduct={searchProduct}
                    orderProduct={orderProduct}
                  />
                </>
              }
            ></Route>
            <Route
              path="/product/:product"
              exact
              element={
                <>
                  <ProductInfo handleCartProduct={handleCartProduct} />
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
