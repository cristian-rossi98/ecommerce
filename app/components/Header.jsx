import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";

import '../styles/header.css';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-10 bg-red-500 text-3xl">
      <BiSearchAlt2 />
      <h1 className="main-logo contents">Ecommerce</h1>
      <BiShoppingBag />
    </header>
  );
}
