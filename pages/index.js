// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Componentes
import Layout from "../components/layout/Layout";
import CardNoticia from "../components/ui/CardNoticia";
import CardCategoria from "../components/ui/CardCategoria";
import IconeSvg from "../components/ui/IconeSvg";

// Funções de API
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white pt-20 pb-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fique atualizado com o mundo da programação
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Notícias relevantes sobre tecnologia, linguagens de programação e
              ferramentas, curadas com inteligência artificial.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/categorias"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <IconeSvg nome="noticias" tamanho="20" className="mr-2" />
                Explorar Categorias
              </Link>
              <Link
                href="/sobre"
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <IconeSvg nome="ia" tamanho="20" className="mr-2" />
                Sobre o Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 text-gray-50 dark:text-slate-900"
            fill="currentColor"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Últimas Notícias
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
        </h2>

        {carregando ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.length > 0 ? (
              noticias.map((noticia) => (
                <CardNoticia key={noticia.id} noticia={noticia} />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Nenhuma notícia encontrada.
                </p>
                <p>Volte mais tarde para as últimas atualizações!</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Seção de Categorias com novos componentes SVG */}
      <section className="container mx-auto px-4 py-10 mt-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 relative inline-block">
            Categorias
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <CardCategoria
              nome="JavaScript"
              slug="javascript"
              icone="javascript"
              corClara="bg-yellow-50"
              corIcone="text-yellow-500"
            />

            <CardCategoria
              nome="Python"
              slug="python"
              icone="python"
              corClara="bg-green-50"
              corIcone="text-green-500"
            />

            <CardCategoria
              nome="Frameworks"
              slug="frameworks"
              icone="react"
              corClara="bg-purple-50"
              corIcone="text-purple-500"
            />

            <CardCategoria
              nome="Cloud"
              slug="cloud"
              icone="nuvem"
              corClara="bg-blue-50"
              corIcone="text-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Seção Sobre o Blog */}
      <section className="container mx-auto px-4 py-12 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Sobre este Blog</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Este blog utiliza inteligência artificial para curar notícias
            relevantes sobre o mundo da tecnologia. Todos os artigos são
            revisados antes da publicação para garantir qualidade e precisão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center px-5 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
            >
              Saiba mais sobre o blog
              <IconeSvg nome="setaDireita" tamanho="16" className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
