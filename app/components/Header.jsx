import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

import "../styles/header.css";

export default function Header({ clickSearch, searchActive }) {
  return (
    <header className="flex justify-between items-center p-10 bg-red-500 text-3xl">
      <button onClick={clickSearch}>
        {searchActive ? <FaTimes /> : <BiSearchAlt2 />}
      </button>
      <a href="/">
        <h1 className="main-logo contents">Ecommerce</h1>
      </a>
      <BiShoppingBag />
    </header>
  );
}
