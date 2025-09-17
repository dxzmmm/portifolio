import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <div className="flex bg-header gap-20">
      <div className="py-3">
        <h1 className="text-2xl  ml-60 font-inter font-bold bg-gradient-to-b from-purple-400 to-purple-900 bg-clip-text text-transparent">
          Yuri Marlon
        </h1>
      </div>
      <div className="flex justify-around w-md pt-3">
        <Link to="/">
          <p className="text-sm font-poppins font-semibold text-texto hover:bg-zinc-800 p-2 transition-all duration-200 delay-120 rounded-sm">
            Home
          </p>
        </Link>

        <Link to="Projetos">
          <p className=" text-sm font-poppins font-semibold text-texto hover:bg-zinc-800 p-2 transition-all duration-200 delay-120 rounded-sm">
            Meus Projetos
          </p>
        </Link>

        <Link to="Sobre mim">
          <p className="text-sm font-poppins font-semibold text-texto hover:bg-zinc-800 p-2 transition-all duration-200 delay-120 rounded-sm">
            Sobre Mim
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
