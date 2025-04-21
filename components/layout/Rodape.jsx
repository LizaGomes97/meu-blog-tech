// components/layout/Rodape.jsx
import React from "react";
import Link from "next/link";

export default function Rodape() {
  // Obtém o ano atual para o copyright
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechNews</h3>
            <p className="text-gray-300">
              Notícias e atualizações sobre o mundo da programação, curadas com
              ajuda de inteligência artificial.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Categorias Populares */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categorias Populares</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categorias/javascript"
                  className="text-gray-300 hover:text-blue-400"
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/python"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Python
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/frameworks"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Frameworks
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {anoAtual} TechNews. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com Next.js e gerenciado com IA.
          </p>
        </div>
      </div>
    </footer>
  );
}
