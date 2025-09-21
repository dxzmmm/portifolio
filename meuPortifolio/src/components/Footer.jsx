import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="relative max-w-screen h-15 shadow- bg-black flex flex-row justify-between sm:px-40 px-5 items-center font-semibold">
        <div>
          <p className="font-poppins text-white sm:text-sm text-[10px]">
            © 2025 Yuri – Todos os direitos reservados
          </p>
        </div>
        <div className="sm:flex flex-row gap-3 hidden">
          <a
            href="https://www.instagram.com/dxzmmm/"
            className="text-pink-600 font-poppins sm:text-sm hover:underline text-[10px]"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/yuri-marlon-260740203/"
            className="text-blue-500 font-poppins sm:text-sm hover:underline text-[10px]"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/dxzmmm"
            className="text-zinc-700 font-poppins sm:text-sm hover:underline text-[10px]"
          >
            Github
          </a>
        </div>
        <div>
          <p className="font-poppins text-white sm:text-sm text-[10px]">
            "Construindo ideias em código 🚀"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
