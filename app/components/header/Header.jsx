"use client";

import { BiShoppingBag, BiUserCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Badge from "@mui/material/Badge";
import toast from "react-hot-toast";

import SearchBar from "./SearchBar";

import { useDispatch } from "react-redux";
import { clg } from "../../redux/cart/slice";

import "./header.css";

export default function Header({ cart }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCartNavigate = () => {
    router.push("/cart");
  };

  const handleSearchNavigate = (key, value) => {
    if (key === "Enter") {
      if (value.trim() === "") {
        toast.error("Digite o produto que deseja buscar");
        return;
      }
      router.push(`/search?search=${value.trim()}`);
    }
  };

  const handleRedux = () => {
    dispatch(clg());
  };

  return (
    <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start py-6 px-8 bg-neutral-50 text-3xl sticky top-0 z-40">
      <div className="flex justify-between w-full lg:w-auto">
        <a
          href="/"
          className="bg-black rounded-2xl w-8 h-8 flex justify-center items-center"
        >
          <h1 className="main-logo">e</h1>
        </a>
        <div className="flex">
          <button
            className="flex lg:hidden outline-none mr-2"
            onClick={handleCartNavigate}
          >
            <BiUserCircle className="text-neutral-800" />
          </button>
          <button
            className="flex lg:hidden outline-none"
            onClick={handleCartNavigate}
          >
            <Badge badgeContent={cart.length} color="primary">
              <BiShoppingBag className="text-neutral-800" />
            </Badge>
          </button>
        </div>
      </div>
      <div className="flex pt-6 lg:pt-0 w-full lg:w-2/4">
        <SearchBar handleSearchNavigate={handleSearchNavigate} />
      </div>
      <div className="flex">
        <button
          className="lg:flex hidden outline-none mr-2"
          onClick={handleRedux}
        >
          <BiUserCircle className="text-neutral-800" />
        </button>
        <button
          className="lg:flex hidden outline-none"
          onClick={handleCartNavigate}
        >
          <Badge badgeContent={cart.length} color="primary">
            <BiShoppingBag className="text-neutral-800" />
          </Badge>
        </button>
      </div>
    </header>
  );
}
