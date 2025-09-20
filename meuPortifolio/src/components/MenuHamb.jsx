import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

const MenuHamb = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botão */}
      <div className="flex border border-gray-400 bg-purple-400 h-7 w-7 justify-center items-center rounded-sm">
        <button onClick={() => setOpen(!isOpen)}>
          {isOpen ? (
            // Ícone "X"
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Ícone menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu (aparece quando isOpen é true) */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-purple-300 text-black border border-gray-300 p-4 flex flex-col gap-2 w-40 shadow-lg shadow-pink-50 z-50">
          <Link to="/">
            <h1 className=" font-semibold">Home</h1>
          </Link>
          <Link to="sobre">
            <h1 className=" font-semibold">Sobre mim</h1>
          </Link>
          <Link to="projetos">
            <h1 className=" font-semibold ">Meus projetos</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuHamb;
