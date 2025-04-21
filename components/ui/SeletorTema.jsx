// components/ui/SeletorTema.jsx
import React, { useEffect, useState } from "react";
import IconeSvg from "./IconeSvg"; // Usando nosso componente de ícones SVG

export default function SeletorTema() {
  // Estado para armazenar o tema atual (claro/escuro)
  const [temaEscuro, setTemaEscuro] = useState(false);
  // Estado para verificar se componente foi montado
  const [carregado, setCarregado] = useState(false);

  // Efeito para inicializar o tema com base na preferência do sistema ou localStorage
  useEffect(() => {
    // Verifica se preferência já foi salva no localStorage
    const temaArmazenado = localStorage.getItem("tema-escuro");

    // Se houver uma preferência salva, a usa
    if (temaArmazenado !== null) {
      setTemaEscuro(temaArmazenado === "true");
    } else {
      // Caso contrário, usa a preferência do sistema
      setTemaEscuro(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    // Marca componente como carregado para evitar flash inicial
    setCarregado(true);
  }, []);

  // Efeito para aplicar o tema ao document
  useEffect(() => {
    if (!carregado) return;

    // Aplica classe 'dark' ao elemento html quando tema escuro estiver ativo
    if (temaEscuro) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema-escuro", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema-escuro", "false");
    }
  }, [temaEscuro, carregado]);

  // Função para alternar entre temas
  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  // Não renderiza nada até o componente estar carregado para evitar flash
  if (!carregado) return null;

  return (
    <button
      onClick={alternarTema}
      aria-label={
        temaEscuro ? "Mudar para tema claro" : "Mudar para tema escuro"
      }
      className="p-2 rounded-full text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      title={temaEscuro ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {temaEscuro ? (
        // Ícone do sol para o tema escuro
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="transition-transform duration-300 hover:rotate-45"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Ícone da lua para o tema claro
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="transition-transform duration-300 hover:rotate-12"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
