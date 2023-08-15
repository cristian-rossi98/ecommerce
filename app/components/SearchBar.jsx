import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar({ handleSearchNavigate }) {
  return (
    <section className="w-full">
      <div className="relative">
        <input
          className="w-full p-2 text-black font-light text-sm bg-neutral-200 focus:outline-none focus:border-neutral-300 transition duration-300 border-2 border-transparent pr-10 rounded-sm"
          type="search"
          placeholder="Pesquise por produtos"
          maxLength={30}
          onKeyDown={(e) => handleSearchNavigate(e.key, e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-1 pointer-events-none">
          <BiSearchAlt2 className="text-neutral-800 text-lg " />
        </div>
      </div>
    </section>
  );
}
