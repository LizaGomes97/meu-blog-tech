// components/ui/CardNoticia.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconeSvg from "./IconeSvg";

export default function CardNoticia({ noticia }) {
  // Formatação da data para exibição em português
  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Função para limitar o tamanho do resumo
  const limitarResumo = (texto, tamanhoMaximo = 120) => {
    if (texto.length <= tamanhoMaximo) return texto;
    return texto.slice(0, tamanhoMaximo) + "...";
  };

  // Mapeamento de cores para cada categoria
  const coresCategorias = {
    javascript: "bg-yellow-100 text-yellow-800 border-yellow-200",
    python: "bg-green-100 text-green-800 border-green-200",
    frameworks: "bg-purple-100 text-purple-800 border-purple-200",
    cloud: "bg-blue-100 text-blue-800 border-blue-200",
    "banco de dados": "bg-red-100 text-red-800 border-red-200",
    default: "bg-gray-100 text-gray-800 border-gray-200",
  };

  // Mapeamento de ícones para categorias
  const iconesCategorias = {
    javascript: "javascript",
    python: "python",
    frameworks: "react",
    cloud: "nuvem",
    "banco de dados": "database",
    default: "noticias",
  };

  // Determinamos a classe de cor com base na categoria (case insensitive)
  const categoriaKey = noticia.categoria ? noticia.categoria.toLowerCase() : "";
  const classeCorCategoria =
    coresCategorias[categoriaKey] || coresCategorias.default;

  // Determinamos o ícone baseado na categoria
  const iconeCategoria =
    iconesCategorias[categoriaKey] || iconesCategorias.default;

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700 group">
      {/* Imagem da notícia */}
      <div className="relative h-52 w-full overflow-hidden">
        {noticia.imagemUrl ? (
          <Image
            src={noticia.imagemUrl}
            alt={noticia.titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
            {/* Usar o ícone SVG apropriado para a categoria quando não há imagem */}
            <div className="p-6 flex items-center justify-center">
              <IconeSvg
                nome={iconeCategoria}
                tamanho="64"
                className="text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
        )}

        {/* Badge da categoria posicionada sobre a imagem */}
        {noticia.categoria && (
          <span
            className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${classeCorCategoria} border font-medium flex items-center gap-1`}
          >
            <IconeSvg nome={iconeCategoria} tamanho="14" />
            {noticia.categoria}
          </span>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Título da notícia */}
        <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          <Link href={`/posts/${noticia.slug}`} className="block">
            {noticia.titulo}
          </Link>
        </h2>

        {/* Resumo da notícia */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {limitarResumo(noticia.resumo)}
        </p>

        {/* Metadados (data e autor) */}
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
          <span>{formatarData(noticia.dataCriacao)}</span>
          {noticia.autorNome && (
            <span className="italic">Por {noticia.autorNome}</span>
          )}
        </div>

        {/* Botão para ler mais */}
        <Link
          href={`/posts/${noticia.slug}`}
          className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
        >
          Ler mais
          <IconeSvg
            nome="setaDireita"
            tamanho="16"
            className="ml-1 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
