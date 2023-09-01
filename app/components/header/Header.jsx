"use client";

import { BiShoppingBag, BiUserCircle, BiExit } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Badge from "@mui/material/Badge";
import toast from "react-hot-toast";

import SearchBar from "./SearchBar";
import Modal from "../Modal";

import "./header.css";

import { selectProductsCount } from "../../redux/cart/selector";
import { login, logout } from "../../redux/user/slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import languages from "../../languages/languages.json";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const productsCount = useSelector(selectProductsCount);
  const { logged, userName } = useSelector((reducer) => reducer.userReducer);

  const { lang } = useSelector((reducer) => reducer.langReducer);

  const handleCartNavigate = () => {
    router.push("/cart");
  };

  const handleSearchNavigate = (key, value) => {
    if (key === "Enter") {
      if (value.trim() === "") {
        toast.error(languages.header.search.toast.error[lang]);
        return;
      }
      router.push(`/search?search=${value.trim()}`);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleLogin = () => {
    if (inputValue.trim() === "") {
      toast.error(languages.header.login.toast.error[lang]);
      return;
    }
    dispatch(login(inputValue.trim()));
    setModalIsOpen(false);
    setInputValue("");
    toast.success(languages.header.login.toast.login[lang]);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success(languages.header.login.toast.logout[lang]);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={closeModal} width="75%">
        <div className="flex flex-col justify-center items-center pt-8">
          <div className="bg-black rounded-full text-5xl w-14 h-14 flex justify-center items-center pt-2">
            <h1 className="main-logo">e</h1>
          </div>
          <input
            className="w-full mt-14 p-2 text-black font-light text-sm bg-neutral-50 focus:outline-none focus:border-neutral-300 transition duration-300 border-2 pr-10 rounded-sm"
            placeholder={languages.header.login.name[lang]}
            value={inputValue}
            maxLength={15}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-black mt-4 p-2 mb-10 w-full rounded-sm border-2 border-black transition-all duration-300 hover:bg-neutral-50 hover:text-black"
          >
            Log In
          </button>
        </div>
      </Modal>

      <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start py-6 px-8 bg-neutral-50 text-3xl sticky top-0 z-40">
        <div className="flex justify-between w-full lg:w-auto">
          <div className="flex items-center">
            <a
              href="/"
              className="bg-black rounded-2xl w-8 h-8 flex justify-center items-center mr-4"
            >
              <h1 className="main-logo">e</h1>
            </a>
            {logged && (
              <p className="text-black text-base main-greetings pt-2">
                {languages.header.welcome[lang]}
                {userName}
              </p>
            )}
          </div>
          <div className="flex">
            <button
              className="flex lg:hidden outline-none"
              onClick={handleCartNavigate}
            >
              <Badge badgeContent={productsCount} color="primary">
                <BiShoppingBag className="text-neutral-800" />
              </Badge>
            </button>
            {logged ? (
              <button
                className="flex lg:hidden outline-none ml-2"
                onClick={handleLogout}
              >
                <BiExit className="text-neutral-800" />
              </button>
            ) : (
              <button
                className="flex lg:hidden outline-none ml-2"
                onClick={openModal}
              >
                <BiUserCircle className="text-neutral-800" />
              </button>
            )}
          </div>
        </div>
        <div className="flex pt-6 lg:pt-0 w-full lg:w-2/4">
          <SearchBar handleSearchNavigate={handleSearchNavigate} />
        </div>
        <div className="flex">
          <button
            className="lg:flex hidden outline-none"
            onClick={handleCartNavigate}
          >
            <Badge badgeContent={productsCount} color="primary">
              <BiShoppingBag className="text-neutral-800" />
            </Badge>
          </button>
          {logged ? (
            <button
              className="lg:flex hidden outline-none ml-2"
              onClick={handleLogout}
            >
              <BiExit className="text-neutral-800" />
            </button>
          ) : (
            <button
              className="lg:flex hidden outline-none ml-2"
              onClick={openModal}
            >
              <BiUserCircle className="text-neutral-800" />
            </button>
          )}
        </div>
      </header>
    </>
  );
}
