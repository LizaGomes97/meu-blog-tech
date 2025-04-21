// components/layout/Cabecalho.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Cabecalho() {
  // Estado para controlar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);
  // Estado para controlar scroll
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para alternar o estado do menu
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold relative group">
            Tech<span className="text-blue-600 dark:text-blue-400">News</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="relative py-2 group font-medium">
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/categorias"
              className="relative py-2 group font-medium"
            >
              Categorias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/sobre" className="relative py-2 group font-medium">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
                d={
                  menuAberto
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <nav className="mt-4 pb-4 space-y-3 md:hidden transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              onClick={alternarMenu}
            >
              Início
            </Link>
            <Link
              href="/categorias"
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              onClick={alternarMenu}
            >
              Categorias
            </Link>
            <Link
              href="/sobre"
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
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
