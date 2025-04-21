// components/layout/Rodape.jsx
import React from "react";
import Link from "next/link";
import IconeSvg from "../ui/IconeSvg";
import AnimacaoEntrada from "../ui/AnimacaoEntrada";

export default function Rodape() {
  // Obtém o ano atual para o copyright
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-slate-900 text-white py-16 relative z-10">
      {/* Forma SVG no topo do rodapé */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="text-gray-50 dark:text-slate-900"
          ></path>
        </svg>
      </div>

      <div className="container-custom mx-auto px-4">
        <AnimacaoEntrada tipo="fade" duracao={800} umaVez={true}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Coluna 1 - Sobre */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                  TechNews
                </span>
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-blue-400"></span>
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Notícias e atualizações sobre o mundo da programação, curadas
                com ajuda de inteligência artificial e revisadas por
                especialistas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.12 1.193 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="text-white">Links Rápidos</span>
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-blue-400"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors inline-block relative group"
                  >
                    <span className="flex items-center group-hover:ml-1 transition-all duration-200">
                      <IconeSvg
                        nome="setaDireita"
                        tamanho="12"
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-all"
                      />
                      Início
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categorias"
                    className="text-gray-300 hover:text-white transition-colors inline-block relative group"
                  >
                    <span className="flex items-center group-hover:ml-1 transition-all duration-200">
                      <IconeSvg
                        nome="setaDireita"
                        tamanho="12"
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-all"
                      />
                      Categorias
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="text-gray-300 hover:text-white transition-colors inline-block relative group"
                  >
                    <span className="flex items-center group-hover:ml-1 transition-all duration-200">
                      <IconeSvg
                        nome="setaDireita"
                        tamanho="12"
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-all"
                      />
                      Sobre
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/busca"
                    className="text-gray-300 hover:text-white transition-colors inline-block relative group"
                  >
                    <span className="flex items-center group-hover:ml-1 transition-all duration-200">
                      <IconeSvg
                        nome="setaDireita"
                        tamanho="12"
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-all"
                      />
                      Buscar
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Categorias Populares */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                <span className="text-white">Categorias Populares</span>
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-blue-400"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/categorias/javascript"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <IconeSvg nome="javascript" tamanho="14" />
                  JavaScript
                </Link>

                <Link
                  href="/categorias/python"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <IconeSvg nome="python" tamanho="14" />
                  Python
                </Link>

                <Link
                  href="/categorias/frameworks"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <IconeSvg nome="react" tamanho="14" />
                  Frameworks
                </Link>

                <Link
                  href="/categorias/cloud"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <IconeSvg nome="nuvem" tamanho="14" />
                  Cloud
                </Link>

                <Link
                  href="/categorias/banco-de-dados"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <IconeSvg nome="database" tamanho="14" />
                  Banco de Dados
                </Link>
              </div>
            </div>
          </div>

          {/* Barra de Copyright */}
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {anoAtual} TechNews. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 text-sm flex items-center">
              Desenvolvido com
              <IconeSvg
                nome="nextjs"
                tamanho="16"
                className="mx-1 dark:invert"
              />
              e
              <IconeSvg nome="ia" tamanho="16" className="mx-1" />
            </p>
          </div>
        </AnimacaoEntrada>
      </div>
    </footer>
  );
}
