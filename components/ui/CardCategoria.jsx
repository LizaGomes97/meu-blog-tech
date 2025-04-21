// components/ui/CardCategoria.jsx
import React from "react";
import Link from "next/link";
import IconeSvg from "./IconeSvg";

/**
 * Componente de card para categorias na página inicial
 * @param {Object} props - Propriedades do componente
 * @param {string} props.nome - Nome da categoria
 * @param {string} props.slug - Slug da categoria para o link
 * @param {string} props.icone - Nome do ícone a ser exibido
 * @param {string} props.corClara - Classe de cor de fundo para modo claro (hover)
 * @param {string} props.corIcone - Classe de cor do ícone
 */
export default function CardCategoria({
  nome,
  slug,
  icone,
  corClara = "bg-blue-50",
  corIcone = "text-blue-500",
}) {
  return (
    <Link
      href={`/categorias/${slug}`}
      className={`group bg-white dark:bg-gray-700 hover:${corClara} dark:hover:bg-gray-600 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32`}
    >
      <div
        className={`${corIcone} dark:${corIcone.replace(
          "text-",
          "text-"
        )}300 text-3xl mb-2 transition-transform group-hover:scale-110 duration-300`}
      >
        <IconeSvg nome={icone} tamanho="40" />
      </div>
      <span className="font-medium">{nome}</span>
    </Link>
  );
}
