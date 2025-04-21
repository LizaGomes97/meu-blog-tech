// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Componentes
import Layout from "../components/layout/Layout";
import CardNoticia from "../components/ui/CardNoticia";

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
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Explorar Categorias
              </Link>
              <Link
                href="/sobre"
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
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

      {/* Seção de Categorias */}
      <section className="container mx-auto px-4 py-10 mt-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 relative inline-block">
            Categorias
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Link
              href="/categorias/javascript"
              className="group bg-white dark:bg-gray-700 hover:bg-yellow-50 dark:hover:bg-gray-600 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
            >
              <div className="text-yellow-500 dark:text-yellow-300 text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">
                <Image
                  src="/imagens/typescript.svg"
                  alt="JavaScript"
                  width={40}
                  height={40}
                />
              </div>
              <span className="font-medium">JavaScript</span>
            </Link>

            <Link
              href="/categorias/python"
              className="group bg-white dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-gray-600 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
            >
              <div className="text-green-500 dark:text-green-300 text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 255"
                  className="fill-current"
                >
                  <path d="M126.915.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.915.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" />
                  <path
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                    fill="#5A9FD4"
                  />
                </svg>
              </div>
              <span className="font-medium">Python</span>
            </Link>

            <Link
              href="/categorias/frameworks"
              className="group bg-white dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
            >
              <div className="text-purple-500 dark:text-purple-300 text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 230"
                  className="fill-current"
                >
                  <path
                    d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
                    fill="#FFF"
                  />
                  <path
                    d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
                    fill="#53C1DE"
                  />
                  <path
                    d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.27 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
                    fill="#FFF"
                  />
                  <path
                    d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
                    fill="#53C1DE"
                  />
                </svg>
              </div>
              <span className="font-medium">Frameworks</span>
            </Link>

            <Link
              href="/categorias/cloud"
              className="group bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-32"
            >
              <div className="text-blue-500 dark:text-blue-300 text-3xl mb-2 transition-transform group-hover:scale-110 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C13.61 13.15 12.5 12 10 12z" />
                </svg>
              </div>
              <span className="font-medium">Cloud</span>
            </Link>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
