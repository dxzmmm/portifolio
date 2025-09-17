import React from "react";

const About = () => {
  return (
    <div className="bg-transparent ">
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <img
            src="/assets/img/imgYuri.png"
            alt="avatar do yuri"
            className="w-40 h-40 rounded-full border-purple-800 border bg-purple-300"
          />

          <div className="flex-1">
            <div className="flex flex-col">
              <div>
                <h1 className="flex">Fala eae!</h1>
              </div>
              <div className="flex">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-pink-300">
                  Eu me chamo Yuri
                </h1>
                <p className=" flex justify-center text-8xl">✨</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              A fullstack developer with solid foundations in design.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Passionate about crafting seamless user experiences at the
              intersection of creativity and functionality.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 border border-purple-500">
                Contact Me
              </button>
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 border border-purple-500">
                View Projects
              </button>
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
  );
};

export default About;
