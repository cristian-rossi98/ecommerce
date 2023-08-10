import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";

import SearchBar from "./SearchBar";
import Footer from "./Footer";
import "../styles/skeleton.css";

export default function Skeleton() {
  return (
    <>
      <header className="flex flex-col items-start p-4 bg-neutral-50 text-3xl shadow-md lg:px-52">
      <div className="flex justify-between w-full">
        <button
          className="bg-black rounded-2xl w-8 h-8 flex justify-center items-center"
        >
          <h1 className="main-logo">e</h1>
        </button>
        <button className="flex">
            <BiShoppingBag className="text-neutral-800" />
        </button>
      </div>
      <div className="flex pt-6 w-full">
        <SearchBar
        />
      </div>
    </header>
      <main className="m-auto lg:w-4/5">
        <div className="w-full flex justify-center">
          <ul className="my-20 px-2 py-6 flex justify-center flex-wrap ">
            {[...Array(20)].map((_, index) => (
              <li key={index} className="skeleton flex flex-col items-center w-5/12 p-4 m-2 bg-white rounded-md cursor-pointer ease-in-out shadow-lg sm:w-60">
                <div className="h-44 w-52 flex justify-center items-center mx-8">
                  <div className="skeleton__thumbnail"></div>
                </div>
                <div className="skeleton__info h-32 w-full flex flex-col justify-between pt-4">
                  <h1 className="skeleton__title text-xs font-semibold text-black mb-2"></h1>
                  <p className="skeleton__description text-sm font-light text-black"></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
