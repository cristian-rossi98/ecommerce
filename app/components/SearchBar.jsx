import { useState } from "react";

export default function SearchBar({ searchActive, searchProduct, onSearchProductChange }) {
  return (
    <section className="w-full h-12">
      {searchActive && (
        <input
          className="w-full text-black text-center font-extralight p-1 border-solid border-b-2 border-t-2 border-red-500 focus:outline-none shadow-md"
          type="search" placeholder="PESQUISE AQUI"
          value={searchProduct} onChange={(e) => onSearchProductChange(e.target.value)}
        />
      )}
    </section>
  );
}
