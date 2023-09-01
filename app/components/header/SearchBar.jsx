import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";

import languages from "../../languages/languages.json";

export default function SearchBar({ handleSearchNavigate }) {
  const [inputValue, setInputValue] = useState("");
  const { lang } = useSelector((reducer) => reducer.langReducer);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <section className="w-full">
      <div className="relative flex">
        <input
          className="w-full p-2 text-black font-light text-sm bg-neutral-200 focus:outline-none focus:border-neutral-300 transition duration-300 border-2 border-transparent pr-10 rounded-sm"
          type="search"
          placeholder={languages.header.search.input[lang]}
          value={inputValue}
          maxLength={50}
          onKeyDown={(e) => handleSearchNavigate(e.key, e.target.value)}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button
          className="absolute right-0 top-0 bottom-0 flex items-center px-3 pt-1 rounded-r-sm rounded-br-sm text-neutral-500 hover:bg-neutral-300 hover:text-neutral-800"
          onClick={() => handleSearchNavigate("Enter", inputValue)}
        >
          <BiSearchAlt2 className="text-lg " />
        </button>
      </div>
    </section>
  );
}
