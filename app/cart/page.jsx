"use client";

import NoResult from "../components/NoResult";
import CartProduct from "./components/CartProduct";
import Modal from "../components/Modal";
import Skeleton from "../components/skeleton/Skeleton";

import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { useSelector } from "react-redux";

import { selectProductsTotalPrice } from "../redux/cart/selector";

import languages from "../languages/languages.json";

export default function Cart() {
  const { lang } = useSelector((reducer) => reducer.langReducer);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { products } = useSelector((reducer) => reducer.cartReducer);
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
          <h1 className="text-black font-bold text-xl">
            {languages.cart.header[lang]}
          </h1>
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
      <Modal isOpen={modalIsOpen} onClose={closeModal} width="75%">
        <h2 className="text-lg font-bold mb-4 text-black">
          {languages.cart.checkout.header[lang]}
        </h2>
        <p className="text-black text-justify">
          {languages.cart.checkout.paragraph[lang]}{" "}
          <strong>{languages.cart.checkout.paragraphStrong[lang]}</strong>
          <br></br>
          <br></br>
          {languages.cart.checkout.footer[lang]}
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
        <h1 className="text-black font-bold text-xl">
          {languages.cart.header[lang]}
        </h1>
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
                <p className="text-neutral-700 font-light mb-2">
                  {languages.cart.values.subtotal[lang]}
                </p>
                <p className="text-neutral-700 font-light">
                  {languages.product.price[lang]} {totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-neutral-700 font-light">
                  {languages.cart.values.shipping.title[lang]}
                </p>
                <p className="text-neutral-800 font-bold">
                  {languages.cart.values.shipping.value[lang]}
                </p>
              </div>
            </div>
            {totalPrice > 0 && (
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <p className="text-black font-semibold lg:text-2xl">
                    {languages.cart.values.total[lang]}
                  </p>
                  <p className="text-black font-semibold lg:text-2xl">
                    {languages.product.price[lang]} {totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={openModal}
                  className="bg-black p-4 mb-10 w-full rounded-sm border-2 border-black transition-all duration-300 hover:bg-neutral-50 hover:text-black"
                >
                  {languages.cart.button[lang]}
                </button>
              </div>
            )}
          </>
        ) : (
          <NoResult value={languages.cart.noResult[lang]} />
        )}
      </section>
    </>
  );
}
