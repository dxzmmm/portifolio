import React from "react";
import MenuHamb from "./MenuHamb";

const Header = () => {
  return (
    <div className="flex bg-header gap-2 sm:gap-20">
      <div className="flex justify-between w-full items-center">
        <div className="py-3">
          <h1 className="text-2xl lg:ml-20 ml-5 sm:ml-10 font-inter font-bold bg-gradient-to-b from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Yuri Marlon
          </h1>
        </div>
        <div className="sm:hidden mr-5">
          <MenuHamb />
        </div>
      </div>
      <div className="md:flex justify-around w-md pt-2.5 hidden">
        <a href="#home">
          <p className="text-sm font-poppins font-semibold text-texto hover:bg-zinc-800 p-2 transition-all duration-200 delay-20 rounded-sm">
            Home
          </p>
        </a>

        <a href="#sobre">
          <p className="text-sm font-poppins font-semibold text-texto hover:bg-zinc-800 p-2 transition-all duration-200 delay-20 rounded-sm">
            Sobre Mim
          </p>
        </a>

        <a href="#projetos">
          <p className=" text-sm font-poppins font-semibold text-texto hover:bg-zinc-800 p-2 transition-all duration-200 delay-20 rounded-sm">
            Meus Projetos
          </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
