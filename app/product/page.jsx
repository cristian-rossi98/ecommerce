"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Header from "../components/header/Header";
import Rating from "../components/products/Rating";
import Skeleton from "../components/skeleton/Skeleton";
import twoWords from "../utils/twoWords";

import "./styles/productInfo.css";

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart/slice";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams().get("info");

  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    fetch(`https://json-server-rose-one.vercel.app/products/${searchParams}`)
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

  const handleCartAddProduct = (product) => {
    dispatch(addProduct(product));
    // if (!cart.length) {
    //   const newCart = [
    //     {
    //       id: product.id,
    //       title: product.title,
    //       price: product.price,
    //       image: product.image,
    //       quantity: 1,
    //     },
    //   ];
    //   setCart(newCart);
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    //   toast.success("Produto adicionado ao carrinho");
    //   return;
    // }
    // const productExist = cart.find((item) => item.id === product.id);
    // const updateCart = productExist
    //   ? cart.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     )
    //   : [
    //       ...cart,
    //       {
    //         id: product.id,
    //         title: product.title,
    //         price: product.price,
    //         image: product.image,
    //         quantity: 1,
    //       },
    //     ];
    // setCart(updateCart);
    // localStorage.setItem("cart", JSON.stringify(updateCart));
    // toast.success("Produto adicionado ao carrinho");
  };

  return (
    <>
      {/* <Header cart={cart} /> */}
      <section className="w-full lg:flex">
        <div className="bg-slate-800 relative flex justify-center items-center w-full lg:w-3/5 h-auto py-20 transition duration-200 ease-in-out">
          <div className="flex items-center justify-center">
            <img
              className="product-image-info"
              src={product.image}
              alt={product.title}
              rel="preload"
            />
          </div>
          <div className="absolute top-5 left-0">
            <h1 className="text-3xl font-bold text-black bg-neutral-50 px-6 pt-4 lg:pb-4">
              {twoWords(product.title, 0, 1)}{" "}
              <span className="md:inline hidden">
                {twoWords(product.title, 1, 2)
                  ? twoWords(product.title, 1, 2)
                  : twoWords(product.title, 2, 3)}
              </span>
            </h1>
            <span className="md:hidden">
              {twoWords(product.title, 1, 2) ? (
                <h1 className="text-3xl font-bold text-black bg-neutral-50 px-6 py-2">
                  {twoWords(product.title, 1, 2)}
                </h1>
              ) : (
                <h1 className="text-3xl font-bold text-black bg-neutral-50 px-6 py-2">
                  {twoWords(product.title, 2, 3)}
                </h1>
              )}
            </span>
            <p className="table text-base font-bold text-neutral-700  bg-neutral-50 px-6 py-4">
              R$ {product.price}
            </p>
          </div>
        </div>

        <div className="px-8 lg:w-2/5">
          <div className="mb-16 mt-8 lg:mt-0">
            <h1 className="text-lg font-semibold text-neutral-800 text-justify lg:text-3xl lg:font-bold">
              {product.title}
            </h1>
            <p className="text-lg text-neutral-800 text-justify lg:text-xl lg:mt-4">
              {product.description}
            </p>
          </div>
          <div className="w-full">
            <button
              onClick={() => handleCartAddProduct(product)}
              className="bg-black p-4 mb-10 w-full font-medium rounded-sm border-2 border-black transition-all duration-300 hover:bg-neutral-50 hover:text-black"
            >
              COMPRAR
            </button>
          </div>
          <div className="flex flex-col items-center text-gray-900">
            <p className="text-6xl font-medium">
              {product.rating.rate}
              <span className="text-3xl">/5</span>
            </p>
            <Rating value={product.rating.rate} />
            <p className="text-xs font-medium text-gray-500">
              Baseado em {product.rating.count} avaliações
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
