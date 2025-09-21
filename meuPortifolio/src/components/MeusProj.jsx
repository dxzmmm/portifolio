import React from "react";
import TelaAviso from "../pages/TelaAviso";
import { Link } from "react-router-dom";

const MeusProj = () => {
  return (
    <div id="projetos">
      <div className="min-h-screen w-full relative">
        {/* Violet Abyss */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
          }}
        />

        <div className="flex justify-center relative">
          <h1 className="font-inter font-extrabold text-5xl sm:text-6xl pb-5 flex justify-center pt-20 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Meus Projetos
          </h1>
        </div>
        <div className="relative flex flex-col items-center px-6 py-20">
          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
            {/* Card GreenRH */}
            <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-lg rounded-md shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-500">
              {/* Imagem */}
              <div className="w-full md:w-1/2 h-60 md:h-auto">
                <img
                  src="assets/img/greenRH.png"
                  alt="GreenRH"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
                <h1 className="font-inter font-bold text-2xl text-green-400 mb-3">
                  GreenRH
                </h1>
                <p className="font-poppins text-zinc-200 text-sm leading-relaxed font-semibold">
                  Projeto desenvolvido para ajudar departamentos de RH. Permite
                  upload de currículos em texto, armazena em banco de dados e
                  organiza automaticamente. Inclui busca avançada com filtros
                  personalizados.
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/dxzmmm/greenRH"
                    target="_blank"
                    className="px-5 py-2 bg-black/80 border border-gray-50 rounded-xl text-white font-medium hover:bg-black transition"
                  >
                    Github
                  </a>
                  <Link
                    to="/TelaAviso"
                    className="px-5 py-2 bg-purple-800 border border-gray-50 rounded-xl text-white font-medium hover:bg-purple-900 transition"
                  >
                    Site
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Réplica do Airbnb */}
            <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-lg rounded-md shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-500 ">
              {/* Imagem */}
              <div className="w-full md:w-1/2 h-60 md:h-auto">
                <img
                  src="assets/img/replicaBNB.png"
                  alt="Airbnb"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
                <h1 className="font-inter font-bold text-2xl text-red-400">
                  Réplica do Airbnb
                </h1>
                <p className="font-poppins text-zinc-200 text-sm font-semibold leading-relaxed">
                  Projeto desenvolvido como estudo de backend, onde fiz a
                  implementação de autenticação JWT, além do banco de dados
                  usando o mongoDB, e todo backend em nodeJS com Express.
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/dxzmmm/replicandoAirbnb"
                    target="_blank"
                    className="px-5 py-2 bg-black/80 border border-gray-50 rounded-xl text-white font-medium hover:bg-black transition"
                  >
                    Github
                  </a>
                  <Link
                    to="/TelaAviso"
                    className="px-5 py-2 bg-purple-800 border border-gray-50 rounded-xl text-white font-medium hover:bg-purple-900 transition "
                  >
                    Site
                  </Link>
                </div>
              </div>
            </div>

            {/* Card vazio para futuros projetos */}
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-md rounded-md border border-dashed border-gray-400 h-72 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition cursor-pointer">
              <p className="font-poppins font-semibold">
                Novo projeto em breve...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeusProj;
