// pages/sobre.js
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function PaginaSobre() {
  return (
    <Layout>
      <Head>
        <title>Sobre o TechNews | Blog de Tecnologia para Programadores</title>
        <meta
          name="description"
          content="Conheça mais sobre o TechNews, um blog de notícias de tecnologia curado com inteligência artificial."
        />
      </Head>

      <div className="pt-16 pb-12 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o TechNews
            </h1>
            <p className="text-xl opacity-90">
              Um blog de tecnologia com curadoria inteligente para programadores
              e entusiastas.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Nossa Missão
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              O TechNews nasceu da necessidade de manter desenvolvedores
              atualizados com as constantes mudanças no mundo da tecnologia.
              Nossa missão é fornecer conteúdo relevante, atualizado e de alta
              qualidade sobre programação, linguagens, frameworks, ferramentas e
              tendências do mercado.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Utilizamos inteligência artificial para identificar, filtrar e
              sugerir os tópicos mais relevantes, mas cada artigo é revisado
              cuidadosamente antes da publicação para garantir precisão e
              utilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Curadoria Inteligente</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Utilizamos algoritmos avançados para monitorar fontes confiáveis
                e identificar as notícias mais relevantes para desenvolvedores.
                Nossa IA ajuda a categorizar e resumir o conteúdo, tornando a
                informação mais acessível.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Revisão Humana</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Cada artigo gerado ou sugerido pela IA passa por uma revisão
                humana detalhada antes da publicação. Isso garante a qualidade,
                precisão e relevância do conteúdo que chega até você.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Tecnologias Utilizadas
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              O TechNews é desenvolvido utilizando tecnologias modernas e
              eficientes:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                {/* SVG do Next.js */}
                <svg
                  className="h-16 w-16 mb-3 dark:invert"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_408_139"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="180"
                    height="180"
                  >
                    <circle cx="90" cy="90" r="90" fill="black" />
                  </mask>
                  <g mask="url(#mask0_408_139)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="url(#paint0_linear_408_139)"
                    />
                    <rect
                      x="115"
                      y="54"
                      width="12"
                      height="72"
                      fill="url(#paint1_linear_408_139)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_408_139"
                      x1="109"
                      y1="116.5"
                      x2="144.5"
                      y2="160.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_408_139"
                      x1="121"
                      y1="54"
                      x2="120.799"
                      y2="106.875"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                {/* SVG do React */}
                <svg
                  className="h-16 w-16 mb-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 841.9 595.3"
                >
                  <g fill="currentColor">
                    <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                    <circle cx="420.9" cy="296.5" r="45.7" />
                    <path d="M520.5 78.1z" />
                  </g>
                </svg>
                <span className="font-medium">React</span>
              </div>
              <div className="flex flex-col items-center">
                {/* SVG do Tailwind CSS */}
                <svg
                  className="h-16 w-16 mb-3 text-cyan-400"
                  viewBox="0 0 248 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146C15.01 6.764 17.764 5.424 20.517 6.125C22.131 6.54 23.288 7.717 24.552 9.004C26.691 11.183 29.148 13.696 34.275 13.696C41.08 13.696 45.332 10.314 47.035 3.55C44.782 6.932 42.029 8.272 39.275 7.571C37.661 7.156 36.505 5.979 35.241 4.692C33.102 2.513 30.645 0 25.517 0ZM12.758 17.228C5.954 17.228 1.701 20.61 0 27.374C2.252 23.992 5.005 22.652 7.758 23.353C9.372 23.768 10.528 24.945 11.792 26.232C13.931 28.411 16.388 30.924 21.517 30.924C28.321 30.924 32.573 27.542 34.275 20.778C32.023 24.16 29.27 25.5 26.517 24.799C24.903 24.384 23.747 23.207 22.483 21.92C20.344 19.741 17.887 17.228 12.758 17.228Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                {/* SVG de IA */}
                <svg
                  className="h-16 w-16 mb-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  <path d="M7 10.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0zm9.5 4H15m-6 0H7.5" />
                  <circle cx="12" cy="10.5" r="1.5" />
                  <path d="M8 14c0 .5.9 1 2 1s2-.5 2-1" />
                </svg>
                <span className="font-medium">IA</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Entre em Contato
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Tem sugestões, feedback ou gostaria de colaborar com o TechNews?
              Entre em contato conosco através das nossas redes sociais ou envie
              um e-mail para contato@technews.com.br.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-8 h-8"
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
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-8 h-8"
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
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
