// components/layout/Cabecalho.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import IconeSvg from "../ui/IconeSvg";
import SeletorTema from "../ui/SeletorTema";
import AnimacaoEntrada from "../ui/AnimacaoEntrada";

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

  // Fechar menu quando clicar em um link (mobile)
  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "cabecalho-scrolled" : "cabecalho-transparente"
      }`}
    >
      <div className="container-custom mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <AnimacaoEntrada tipo="slide-right" duracao={600}>
            <Link href="/" className="text-2xl font-bold relative group">
              <span className="text-blue-600 dark:text-blue-400">Tech</span>
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </AnimacaoEntrada>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <AnimacaoEntrada tipo="fade" atraso={100} duracao={600}>
              <Link href="/" className="nav-link">
                Início
              </Link>
            </AnimacaoEntrada>

            <AnimacaoEntrada tipo="fade" atraso={200} duracao={600}>
              <Link href="/categorias" className="nav-link">
                Categorias
              </Link>
            </AnimacaoEntrada>

            <AnimacaoEntrada tipo="fade" atraso={300} duracao={600}>
              <Link href="/sobre" className="nav-link">
                Sobre
              </Link>
            </AnimacaoEntrada>

            <AnimacaoEntrada tipo="fade" atraso={400} duracao={600}>
              <SeletorTema />
            </AnimacaoEntrada>

            <AnimacaoEntrada tipo="fade" atraso={500} duracao={600}>
              <Link
                href="/busca"
                className="p-2 rounded-full text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Buscar no site"
                title="Buscar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </Link>
            </AnimacaoEntrada>
          </nav>

          {/* Área direita mobile (tema e botão menu) */}
          <div className="flex items-center space-x-3 md:hidden">
            <SeletorTema />

            {/* Botão do menu para mobile */}
            <button
              className="focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={alternarMenu}
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
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
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <nav className="mt-4 pb-4 space-y-3 md:hidden border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <Link
              href="/"
              className="block py-3 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              onClick={fecharMenu}
            >
              <span className="flex items-center">
                <IconeSvg nome="noticias" tamanho="18" className="mr-2" />
                Início
              </span>
            </Link>
            <Link
              href="/categorias"
              className="block py-3 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              onClick={fecharMenu}
            >
              <span className="flex items-center">
                <IconeSvg nome="javascript" tamanho="18" className="mr-2" />
                Categorias
              </span>
            </Link>
            <Link
              href="/sobre"
              className="block py-3 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              onClick={fecharMenu}
            >
              <span className="flex items-center">
                <IconeSvg nome="ia" tamanho="18" className="mr-2" />
                Sobre
              </span>
            </Link>
            <Link
              href="/busca"
              className="block py-3 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              onClick={fecharMenu}
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Buscar
              </span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
