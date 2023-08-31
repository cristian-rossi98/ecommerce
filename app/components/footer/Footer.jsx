"use client";

import { AiFillGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeLang } from "../../redux/lang/slice";

export default function Footer() {
  const dispatch = useDispatch();

  const handleChangeLang = (lang) => {
    dispatch(changeLang(lang));
  };

  return (
    <footer className="flex flex-col items-center bg-neutral-50 text-white my-12 px-8">
      <div className="flex flex-row justify-start w-full mb-8">
        <a
          className="mr-4"
          href="https://github.com/cristian-rossi98/ecommerce"
        >
          <AiFillGithub className="text-neutral-800 text-4xl" />
        </a>
        <select
          onChange={(e) => handleChangeLang(e.target.value)}
          name=""
          id=""
        >
          <option value="pt">🇧🇷 Português</option>
          <option value="en">🇺🇸 Inglês</option>
        </select>
      </div>
      <div className="border-t-2 rounded-lg border-neutral-200 w-full mb-12"></div>
      {/* <a
        className="absolute left-7 pt-10"
        href="https://github.com/cristian-rossi98/ecommerce"
      >
        <AiFillGithub className="text-neutral-800 text-4xl" />
      </a> */}
      <p className="text-sm text-neutral-800 mb-4">© 2023 Cristian Rossi.</p>
      <p className="text-sm text-neutral-800">
        Feito com ♥ em Marília (SP), Brasil.
      </p>
    </footer>
  );
}
