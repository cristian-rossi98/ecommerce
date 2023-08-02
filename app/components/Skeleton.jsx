import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";

import Footer from "./Footer";
import "../styles/skeleton.css";

export default function Skeleton() {
  return (
    <>
      <header className="flex justify-between items-center p-10 bg-red-500 text-3xl shadow-md">
        <button>
          <BiSearchAlt2 />
        </button>
        <a href="/">
          <h1 className="main-logo contents">Ecommerce</h1>
        </a>
        <button>
          <BiShoppingBag />
        </button>
      </header>
      <main>
        <div className="w-full flex justify-center">
          <ul className="my-20 p-6 flex justify-center flex-wrap w-4/5">
            {[...Array(20)].map((_, index) => (
              <li className="skeleton flex flex-col items-center w-5/12 p-4 m-4 bg-white rounded-md cursor-pointer transition duration-200 ease-in-out shadow-lg sm:w-72">
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
