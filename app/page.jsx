"use client";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import SearchBar from "./components/SearchBar";
import Order from "./components/Order";
import Cart from "./components/Cart";

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
    return <p className="text-black">Carregando dados...</p>;
  }

  const handleSearchBar = () => {
    setSearchBarActive(!searchBarActive);
    if (searchBarActive) {
      setSearchProduct("");
    }
  };

  const handleCartProduct = (product) => {
    try {
      setCartProducts((prevCart) => [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
          rating: {
            rate: product.rating.rate,
            count: product.rating.count,
          },
        },
      ]);
      toastSuccess("Produto adicionado ao carrinho");
    } catch (error) {
      toastError("Erro ao adicionar produto ao carrinho");
    }
  };

  const handleRemoveCartProduct = (productId) => {
    try {
      const updatedCart = cartProducts.filter((productCart) => productCart.id !== productId);
      setCartProducts(updatedCart);
      toastSuccess("Produto removido do carrinho");
    } catch (error) {
      toastError("Erro ao remover produto do carrinho");
    }
  };

  const toastSuccess = (msg) => {
    return toast.success(msg, {
      style: {
        border: "1px solid #ef4444",
        padding: "16px",
        color: "#ef4444",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#FFFAEE",
      },
    });
  };

  const toastError = (msg) => {
    return toast.error(msg, {
      style: {
        border: "1px solid #ef4444",
        padding: "16px",
        color: "#ef4444",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <>
      <Router>
        <Toaster />
        <Header
          clickSearch={handleSearchBar}
          searchActive={searchBarActive}
          cartLenght={cartProducts.length}
          cartProducts={cartProducts}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <main>
                <SearchBar
                  searchActive={searchBarActive}
                  searchProduct={searchProduct}
                  onSearchProductChange={setSearchProduct}
                />
                <Order
                  orderProduct={orderProduct}
                  onOrderProductChange={setOrderProduct}
                />
                <Products
                  products={data}
                  searchProduct={searchProduct}
                  orderProduct={orderProduct}
                />
              </main>
            }
          ></Route>
          <Route
            path="/product/:product"
            exact
            element={
              <main>
                <ProductInfo handleCartProduct={handleCartProduct} />
              </main>
            }
          />
          <Route
            path="/cart/:product"
            exact
            element={
              <main>
                <Cart 
                  handleRemoveCartProduct={handleRemoveCartProduct} 
                  cartProducts={cartProducts}
                />
              </main>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
