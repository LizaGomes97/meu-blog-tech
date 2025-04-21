// Pagina de artigo individual
// pages/posts/[slug].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Componentes
import Layout from "../../components/layout/Layout";

// Funções de API
import { buscarNoticiaPorSlug } from "../../lib/api";

export default function PaginaArtigo() {
  const router = useRouter();
  const { slug } = router.query;

  // Estado para armazenar os dados do artigo
  const [noticia, setNoticia] = useState(null);
  // Estado para controlar carregamento
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Só fazemos a busca quando o slug está disponível (após a hidratação do router)
    if (!slug) return;

    async function carregarNoticia() {
      try {
        const dadosNoticia = await buscarNoticiaPorSlug(slug);

        if (dadosNoticia) {
          setNoticia(dadosNoticia);
        } else {
          // Se não encontrar a notícia, redireciona para a página inicial
          router.push("/");
        }
      } catch (erro) {
        console.error("Erro ao carregar notícia:", erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarNoticia();
  }, [slug, router]);

  // Formatação da data para exibição em português
  const formatarData = (dataString) => {
    if (!dataString) return "";

    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Layout>
      <Head>
        <title>
          {noticia ? `${noticia.titulo} | TechNews` : "Carregando..."}
        </title>
        <meta
          name="description"
          content={noticia ? noticia.resumo : "Carregando artigo..."}
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {carregando ? (
          <div className="flex justify-center items-center h-64">
            <p>Carregando artigo...</p>
          </div>
        ) : noticia ? (
          <article className="max-w-4xl mx-auto">
            {/* Cabeçalho do artigo */}
            <header className="mb-8">
              <div className="mb-4">
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  &larr; Voltar para a página inicial
                </Link>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {noticia.titulo}
              </h1>

              <div className="flex flex-wrap items-center text-gray-600 mb-6">
                <span className="mr-4">
                  {formatarData(noticia.dataCriacao)}
                </span>
                {noticia.autorNome && (
                  <span className="mr-4">Por {noticia.autorNome}</span>
                )}
                {noticia.categoria && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                    {noticia.categoria}
                  </span>
                )}
              </div>

              {/* Imagem destacada */}
              <div className="relative h-64 md:h-96 w-full mb-6">
                {noticia.imagemUrl ? (
                  <Image
                    src={noticia.imagemUrl}
                    alt={noticia.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-gray-500">Sem imagem</span>
                  </div>
                )}
              </div>
            </header>

            {/* Resumo */}
            <div className="text-xl text-gray-700 mb-6 font-semibold">
              {noticia.resumo}
            </div>

            {/* Conteúdo do artigo */}
            <div className="prose prose-lg max-w-none">
              {/* Aqui você pode usar uma biblioteca como react-markdown para renderizar 
                  o conteúdo markdown se for armazenado assim, ou simplesmente usar 
                  dangerouslySetInnerHTML se for HTML */}
              <p>{noticia.conteudo}</p>
            </div>
          </article>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-600">Artigo não encontrado.</p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
            >
              Voltar para a página inicial
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
