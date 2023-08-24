"use client";

import Header from "../components/header/Header";
import NoResult from "../components/NoResult";
import CartProduct from "./components/CartProduct";
import Modal from "../components/Modal";
import Skeleton from "../components/skeleton/Skeleton";

import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { useSelector } from "react-redux";

import { selectProductsTotalPrice } from "../redux/cart/selector";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { products } = useSelector((reducer) => reducer.cartReducer);
  // setCart(products);
  const totalPrice = useSelector(selectProductsTotalPrice);

  useEffect(() => {
    // setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // setCart(products);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Skeleton itemsNumber={1}>
        <div className="px-8 m-auto">
          <h1 className="text-black font-bold text-xl">Meu carrinho</h1>
          <div className="border-t-2 border-neutral-200 mt-4"></div>
        </div>
      </Skeleton>
    );
  }

  // const totalPrice = products.reduce((accumulator, product) => {
  //   return accumulator + product.price * product.quantity;
  // }, 0);

  // const handleRemoveCartProduct = (productId) => {
  //   const updateCart = cart.filter((product) => product.id !== productId);

  //   setCart(updateCart);
  //   localStorage.setItem("cart", JSON.stringify(updateCart));
  //   toast.success("Produto removido do carrinho");
  // };

  // const handleSubCartProduct = (product) => {
  //   const updateCart = cart.map((item) =>
  //     item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  //   );

  //   setCart(updateCart);
  //   localStorage.setItem("cart", JSON.stringify(updateCart));
  // };

  // const handleSumCartProduct = (product) => {
  //   const updateCart = cart.map((item) =>
  //     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //   );

  //   setCart(updateCart);
  //   localStorage.setItem("cart", JSON.stringify(updateCart));
  // };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-4 text-black">
          Compra Simulada com Sucesso
        </h2>
        <p className="text-black text-justify">
          Obrigado por escolher nossa loja para simular sua compra. Fique
          tranquilo, esta é apenas uma demonstração para o meu portfólio.{" "}
          <strong>
            Não será feita nenhuma cobrança e nenhum produto será enviado.
          </strong>
          <br></br>
          <br></br>
          Obrigado por ter chegado até aqui! ♥︎
          <br></br>
          <br></br>
        </p>
        <p className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/cristian-rossi-ccosta/"
            target="_blank"
          >
            <AiFillLinkedin className="text-black text-3xl mr-2" />
          </a>
          <a href="https://github.com/cristian-rossi98" target="_blank">
            <AiFillGithub className="text-black text-3xl mr-2" />
          </a>
          <a href="https://cristian-rossi98.github.io/" target="_blank">
            <MdContactPage className="text-black text-3xl" />
          </a>
        </p>
      </Modal>
      {/* <Header cart={cart} /> */}
      <section className="px-8 m-auto ">
        <h1 className="text-black font-bold text-xl">Meu carrinho</h1>
        <div className="border-t-2 border-neutral-200 mt-4 mb-12"></div>
        {products.length ? (
          <>
            <ul className="w-full flex flex-col justify-evenly items-center">
              {products.map((product, index) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  cartLenght={products.length}
                  index={index}
                  // handleRemoveCartProduct={handleRemoveCartProduct}
                  // handleSubCartProduct={handleSubCartProduct}
                  // handleSumCartProduct={handleSumCartProduct}
                />
              ))}
            </ul>
            <div className="border-t-2 border-b-2 border-neutral-100 py-4 mb-2">
              <div className="flex justify-between">
                <p className="text-neutral-700 font-light mb-2">Subtotal</p>
                <p className="text-neutral-700 font-light">
                  R$ {totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-neutral-700 font-light">Frete</p>
                <p className="text-neutral-800 font-bold">GRÁTIS</p>
              </div>
            </div>
            {totalPrice > 0 && (
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <p className="text-black font-semibold lg:text-2xl">Total</p>
                  <p className="text-black font-semibold lg:text-2xl">
                    R$ {totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={openModal}
                  className="bg-black p-4 mb-10 w-full rounded-sm border-2 border-black transition-all duration-300 hover:bg-neutral-50 hover:text-black"
                >
                  FINALIZAR COMPRA
                </button>
              </div>
            )}
          </>
        ) : (
          <NoResult value="Seu carrinho está vazio" />
        )}
      </section>
    </>
  );
}
