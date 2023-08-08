import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Badge from "@mui/material/Badge";

import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header({
  clickSearch,
  searchActive,
  cartLenght,
  cartProducts,
}) {
  const navigates = useNavigate();

  const handleCartNavigate = () => {
    const cartString = JSON.stringify(cartProducts);
    try {
      navigates(`/cart/${btoa(cartString)}`);
    } catch (error) {
      navigates(`/cart/${encodeURIComponent(cartString)}`);
    }
    
  };

  return (
    <header className="flex justify-between items-start p-10 bg-red-500 text-3xl shadow-md lg:px-52">
      <button className="flex" onClick={clickSearch}>
        {searchActive ? <FaTimes /> : <BiSearchAlt2 />}
      </button>
      <a href="/">
        <h1 className="main-logo contents">E-commerce</h1>
      </a>
      <button className="flex" onClick={handleCartNavigate}>
        <Badge badgeContent={cartLenght} color="primary">
          <BiShoppingBag />
        </Badge>
      </button>
    </header>
  );
}
