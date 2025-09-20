import React from "react";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import { FaReact, FaGithub } from "react-icons/fa6";
import { SiVite, SiMysql } from "react-icons/si";

const Sobre = () => {
  return (
    <div>
      <div
        className="min-h-screen w-full bg-[#020617] relative flex items-center justify-center px-6"
        id="sobre"
      >
        {/* Fundo com grid + orb */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 60%, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)
            `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
        />

        {/* Card de conteúdo */}
        <div className="relative border border-gray-600 bg-transparent backdrop-blur-md rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full sm:w-[85%] max-w-6xl p-10 sm:p-14 z-10">
          {/* Texto */}
          <div className="flex flex-col gap-8 sm:w-2/3">
            <h1 className="font-inter font-extrabold text-4xl sm:text-5xl text-center sm:text-left bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Um pouco mais sobre mim
            </h1>
            <p className="font-poppins text-lg sm:text-xl text-gray-200 leading-relaxed text-center sm:text-left">
              Olá! Me chamo{" "}
              <span className="font-semibold text-pink-400">Yuri</span>, tenho{" "}
              <span className="font-semibold text-violet-400">22 anos</span> e
              sou de{" "}
              <span className="font-semibold text-blue-400">Contagem (MG)</span>
              . Desde sempre, a tecnologia despertou minha curiosidade.
              <br />
              Atualmente, sou estudante de{" "}
              <span className="font-semibold text-emerald-400">
                Análise e Desenvolvimento de Sistemas
              </span>{" "}
              na Faculdade Anhanguera e complemento minha formação com cursos
              focados em{" "}
              <span className="font-semibold text-yellow-400">programação</span>{" "}
              e{" "}
              <span className="font-semibold text-indigo-400">
                desenvolvimento web
              </span>
              , com foco no{" "}
              <span className="font-semibold text-pink-400">backend</span>.
            </p>

            {/* Tecnologias */}
            <div className="flex flex-col items-center sm:items-start gap-6">
              <h2 className="text-2xl font-semibold text-gray-100">
                Tecnologias que utilizo
              </h2>
              <div className="flex flex-wrap gap-4">
                {/* Cada ícone com hover estilizado */}
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <BiLogoJavascript className="text-yellow-400 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <BiLogoTypescript className="text-blue-400 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <BiLogoMongodb className="text-green-500 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaReact className="text-cyan-400 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <SiVite className="text-purple-400 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <FaGithub className="text-gray-200 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
                <div className="group border border-gray-700 w-14 h-14 flex justify-center items-center rounded-xl cursor-pointer bg-black/20 hover:bg-black/40 transition duration-300 transform hover:scale-110 hover:shadow-lg">
                  <SiMysql className="text-blue-500 text-3xl group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="hidden sm:flex justify-center items-center sm:w-1/3 mt-10 sm:mt-0">
            <img
              src="/assets/img/fotoYuri.png"
              alt="Foto do Yuri"
              className="w-72 h-96 object-cover rounded-2xl shadow-2xl border border-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
