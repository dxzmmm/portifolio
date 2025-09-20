import React from "react";
import Header from "./header";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      {/* Dark Dotted Grid Background */}
      <div
        className="min-h-screen w-full relative bg-black pt-10 sm:pt-0"
        id="home"
      >
        {/* Prismatic Aurora Burst - Multi-layered Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
          }}
        />

        <div className="relative flex flex-col items-center justify-center py-5 text-center h-dvh">
          <div className="flex flex-col sm:flex-row items-center sm:gap-10 gap-5  mx-10">
            <img
              src="/assets/img/imgYuri.png"
              alt="avatar do yuri"
              className="sm:w-40 sm:h-40 size-40 rounded-full border-purple-800 border bg-purple-300"
            />

            <div className="flex-col flex sm:gap-3 items-center sm:items-baseline">
              <div className="flex flex-col">
                <div className="flex sm:justify-start justify-center">
                  <h1 className="flex font-poppins text-gray-300 font-bold text-[15px] sm:text-md pl-1">
                    Fala, eae!
                  </h1>
                </div>
                <div className="flex items-center">
                  <h1 className=" text-4xl sm:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-pink-300">
                    Eu sou o Yuri
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-2 sm:text-start ">
                <p className="sm:text-3xl text-gray-300 font-poppins font-semibold text-[23px]">
                  Desenvolvedor Backend
                </p>
                <p className="font-semibold text-lg text-gray-400 mb-8 font-poppins text-[12px]sm:text-3xl">
                  Entusiasta da tecnologia e apaixonado por criar soluções.{" "}
                  <br />
                  Vivendo em uma busca constante por conhecimento e inovação.
                </p>
              </div>

              <div className="sm:flex flex-col sm:flex-row items-center flex sm:gap-15">
                <div className="gap-5 flex">
                  <button className="w-30 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer sm:text-sm font-semibold text-[10px]">
                    Fale comigo!
                  </button>
                  <button className="w-30 h-10 sm:w-40 text-[10px] bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105  cursor-pointer sm:text-sm font-semibold">
                    Veja meus projetos!
                  </button>
                </div>
                <div class="flex gap-4 pt-3">
                  <a href="https://github.com/dxzmmm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 fill-white hover:fill-zinc-700 transition"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1 1.8 2.8 1.3 3.5 1 .1-.7.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.9.8 1.3 1.9 1.3 3.1 0 4.8-2.8 5.7-5.5 6 .4.4.8 1 .8 2.1v3.2c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
                    </svg>
                  </a>

                  <a href="https://www.instagram.com/dxzmmm/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 fill-white hover:fill-pink-500 transition"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>

                  <a href="https://www.linkedin.com/in/yuri-marlon-260740203/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 fill-white hover:fill-blue-600 transition"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé / Redes sociais */}
          <div className="mt-16 flex gap-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
