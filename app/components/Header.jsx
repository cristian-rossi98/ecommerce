"use client";

import { BiShoppingBag } from "react-icons/bi";
import Badge from "@mui/material/Badge";

import SearchBar from "./SearchBar";

import "../styles/header.css";
import { useRouter } from "next/navigation";

export default function Header({
  cartLenght,
  cartProducts,
  searchProduct,
  setSearchProduct,
  cart,
}) {
  // const navigates = useNavigate();
  const router = useRouter();
  // const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleCartNavigate = () => {
    // const cartString = JSON.stringify(cartProducts);
    // try {
    //   navigates(`/cart/${btoa(cartString)}`);
    // } catch (error) {
    //   navigates(`/cart/${encodeURIComponent(cartString)}`);
    // }
    router.push("/cart");
  };

  const handleSearchNavigate = (key, value) => {
    key === "Enter" && router.push(`/search?search=${value}`);
  };

  return (
    <header className="flex flex-col items-start p-4 bg-neutral-50 text-3xl sticky top-0 z-50 lg:px-52">
      <div className="flex justify-between w-full">
        <a
          href="/"
          className="bg-black rounded-2xl w-8 h-8 flex justify-center items-center"
        >
          <h1 className="main-logo">e</h1>
        </a>
        <button className="flex" onClick={handleCartNavigate}>
          <Badge badgeContent={cart.length} color="primary">
            <BiShoppingBag className="text-neutral-800" />
          </Badge>
        </button>
      </div>
      <div className="flex pt-6 w-full">
        <SearchBar
          // searchProduct={searchProduct}
          // onSearchProductChange={setSearchProduct}
          handleSearchNavigate={handleSearchNavigate}
        />
      </div>
    </header>
  );
}
