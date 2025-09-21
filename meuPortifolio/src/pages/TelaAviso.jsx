import { Link } from "react-router-dom";

const TelaAviso = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Ícone de aviso animado */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-24 h-24 text-yellow-400 mb-8 animate-pulse drop-shadow-lg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>

      {/* Título principal */}
      <div className="flex flex-row justify-center sm:gap-0">
        <h1 className="text-2xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4 animate-fade-in pb-2">
          Calma, jovem Padawan!
        </h1>
        <span className="text-3xl relative bottom-2 sm:text-5xl">🧙‍♂️</span>
      </div>

      {/* Subtítulo com humor */}
      <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-2 max-w-2xl">
        O site ainda{" "}
        <span className="font-bold text-yellow-300">
          não foi lançado no espaço
        </span>{" "}
        🚀
      </p>

      {/* Mensagem principal */}
      <p className="text-lg text-gray-300 max-w-md mb-8 px-4">
        Estou polindo os últimos detalhes, ajustando os parafusos e carregando a
        bateria.
        <br />
        <strong className="text-purple-300">
          Em breve estará disponível para todo mundo!
        </strong>
      </p>

      {/* Botão pra voltar */}
      <Link
        to="/"
        className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 flex items-center gap-2"
      >
        <span>Voltar para o maravilhoso portifólio</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>

      {/* Assinatura divertida */}
      <p className="mt-12 text-md font-semibold text-gray-500 font-poppins">
        — Yuri, o mago do backend, trabalhando nos bastidores ✨
      </p>
    </div>
  );
};

export default TelaAviso;
