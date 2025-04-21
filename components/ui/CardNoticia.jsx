// components/ui/CardNoticia.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Imagem da notícia */}
      <div className="relative h-48 w-full">
        {noticia.imagemUrl ? (
          <Image
            src={noticia.imagemUrl}
            alt={noticia.titulo}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="bg-gray-200 h-full w-full flex items-center justify-center">
            <span className="text-gray-500">Sem imagem</span>
          </div>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="p-5">
        {/* Categoria da notícia */}
        {noticia.categoria && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
            {noticia.categoria}
          </span>
        )}

        {/* Título da notícia */}
        <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
          <Link href={`/posts/${noticia.slug}`}>{noticia.titulo}</Link>
        </h2>

        {/* Resumo da notícia */}
        <p className="text-gray-600 mb-4">{limitarResumo(noticia.resumo)}</p>

        {/* Metadados (data e autor) */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{formatarData(noticia.dataCriacao)}</span>
          {noticia.autorNome && <span>Por {noticia.autorNome}</span>}
        </div>

        {/* Botão para ler mais */}
        <Link
          href={`/posts/${noticia.slug}`}
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          Ler mais &rarr;
        </Link>
      </div>
    </article>
  );
}
