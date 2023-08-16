import { BiShoppingBag } from "react-icons/bi";

import SearchBar from "./SearchBar";
import "../styles/skeleton.css";

export default function Skeleton({ itemsNumber, children }) {
  return (
    <>
      <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start py-4 px-8 bg-neutral-50 text-3xl sticky top-0 z-50">
        <div className="flex justify-between w-full lg:w-auto">
          <a
            href="/"
            className="bg-black rounded-2xl w-8 h-8 flex justify-center items-center"
          >
            <h1 className="main-logo">e</h1>
          </a>
          <button className="flex lg:hidden">
            <BiShoppingBag className="text-neutral-800" />
          </button>
        </div>
        <div className="flex pt-6 lg:pt-0 w-full lg:w-2/4">
          <SearchBar />
        </div>
        <button className="lg:flex hidden">
          <BiShoppingBag className="text-neutral-800" />
        </button>
      </header>
      <main className="">
        {children}
        <div className="w-full flex justify-center">
          <ul className="flex justify-center flex-wrap lg:mt-24">
            {[...Array(itemsNumber)].map((_, index) => (
              <li
                key={index}
                className="skeleton flex flex-col items-center w-full p-4 bg-white rounded-md h-96 lg:w-1/2 lg:h-44rem xl:w-1/4"
              >
                <div className="h-44 w-52 flex justify-center items-center mx-8">
                  <div className="skeleton__thumbnail"></div>
                </div>
                <div className="skeleton__info h-32 w-full flex flex-col pt-4">
                  <h1 className="skeleton__title text-xs font-semibold text-black"></h1>
                  <p className="skeleton__description text-sm font-light text-black"></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
