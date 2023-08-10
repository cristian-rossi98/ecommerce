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
import Filter from "./components/Filter";
import Skeleton from "./components/Skeleton";

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
    return <Skeleton />;
  }

  const handleSearchBar = () => {
    setSearchBarActive(!searchBarActive);
    if (searchBarActive) {
      setSearchProduct("");
    }
  };

  // const handleSearchProduct = (value) => {
  //   setSearchProduct(value);
  //   const filteredProducts = data.filter(
  //     (product) =>
  //       product.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1,
  //       console.log('filtering produt')
  //   );
  // }

  const handleCartProduct = (product) => {
    try {
      const existingProduct = cartProducts.find(
        (item) => item.id === product.id
      );

      existingProduct
        ? setCartProducts((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          )
        : setCartProducts((prevCart) => [
            ...prevCart,
            {
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
              image: product.image,
              quantity: 1,
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
      const updatedCart = cartProducts.filter(
        (productCart) => productCart.id !== productId
      );
      setCartProducts(updatedCart);
      toastSuccess("Produto removido do carrinho");
    } catch (error) {
      toastError("Erro ao remover produto do carrinho");
    }
  };

  const handleSubCartProduct = (product) => {
    product.quantity === 1 && handleRemoveCartProduct(product.id);
    setCartProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleSumCartProduct = (product) => {
    setCartProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
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
          cartLenght={cartProducts.length}
          cartProducts={cartProducts}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <main className="m-auto lg:w-4/5">
                  {/* <Order
                    orderProduct={orderProduct}
                    onOrderProductChange={setOrderProduct}
                  /> */}
                  <Products
                    products={data}
                    searchProduct={searchProduct}
                    orderProduct={orderProduct}
                  />
                </main>
              </>
            }
          ></Route>
          <Route
            path="/product/:product"
            element={
              <main className="m-auto sm:w-4/5 lg:w-3/5">
                <ProductInfo handleCartProduct={handleCartProduct} />
              </main>
            }
          />
          <Route
            path="/cart/:product"
            exact
            element={
              <main className="m-auto sm:w-4/5 lg:w-3/5">
                <Cart
                  handleRemoveCartProduct={handleRemoveCartProduct}
                  cartProducts={cartProducts}
                  handleSubCartProduct={handleSubCartProduct}
                  handleSumCartProduct={handleSumCartProduct}
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
