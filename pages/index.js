// pagina principal
// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

// Componentes
import Layout from "../components/layout/Layout";
import CardNoticia from "../components/ui/CardNoticia";

// Funções de API (serão implementadas depois)
import { buscarUltimasNoticias } from "../lib/api";

export default function PaginaInicial() {
  // Estado para armazenar as notícias
  const [noticias, setNoticias] = useState([]);
  // Estado para controlar carregamento
  const [carregando, setCarregando] = useState(true);

  // Efeito para carregar as notícias quando a página iniciar
  useEffect(() => {
    async function carregarNoticias() {
      try {
        // Aqui vamos buscar as notícias do CMS (implementaremos depois)
        const ultimasNoticias = await buscarUltimasNoticias();
        setNoticias(ultimasNoticias);
      } catch (erro) {
        console.error("Erro ao carregar notícias:", erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarNoticias();
  }, []);

  return (
    <Layout>
      <Head>
        <title>TechNews - Notícias de Tecnologia para Programadores</title>
        <meta
          name="description"
          content="Blog de notícias sobre tecnologia, linguagens de programação e atualizações para desenvolvedores"
        />
      </Head>

      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Últimas Notícias de Tecnologia
        </h1>

        {carregando ? (
          <div className="flex justify-center items-center h-64">
            <p>Carregando notícias...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.length > 0 ? (
              noticias.map((noticia) => (
                <CardNoticia key={noticia.id} noticia={noticia} />
              ))
            ) : (
              <p>Nenhuma notícia encontrada.</p>
            )}
          </div>
        )}

        <div className="mt-10 mb-6">
          <h2 className="text-2xl font-bold mb-4">Categorias</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/categorias/javascript"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200"
            >
              JavaScript
            </Link>
            <Link
              href="/categorias/python"
              className="px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200"
            >
              Python
            </Link>
            <Link
              href="/categorias/frameworks"
              className="px-4 py-2 bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200"
            >
              Frameworks
            </Link>
            <Link
              href="/categorias/cloud"
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
            >
              Cloud
            </Link>
          </div>
        </div>

        <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-2">Sobre este Blog</h2>
          <p>
            Este blog utiliza inteligência artificial para curar notícias
            relevantes sobre o mundo da tecnologia. Todos os artigos são
            revisados antes da publicação para garantir qualidade e precisão.
          </p>
        </div>
      </section>
    </Layout>
  );
}
