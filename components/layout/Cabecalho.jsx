// components/layout/Cabecalho.jsx
import React, { useState } from "react";
import Link from "next/link";

export default function Cabecalho() {
  // Estado para controlar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para alternar o estado do menu
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Tech<span className="text-blue-400">News</span>
          </Link>

          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-400">
              Início
            </Link>
            <Link href="/categorias" className="hover:text-blue-400">
              Categorias
            </Link>
            <Link href="/sobre" className="hover:text-blue-400">
              Sobre
            </Link>
          </nav>

          {/* Botão do menu para mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={alternarMenu}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <nav className="mt-4 pb-4 space-y-3 md:hidden">
            <Link
              href="/"
              className="block hover:text-blue-400"
              onClick={alternarMenu}
            >
              Início
            </Link>
            <Link
              href="/categorias"
              className="block hover:text-blue-400"
              onClick={alternarMenu}
            >
              Categorias
            </Link>
            <Link
              href="/sobre"
              className="block hover:text-blue-400"
              onClick={alternarMenu}
            >
              Sobre
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
