// pages/categorias/[cat].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

// Componentes
import Layout from "../../components/layout/Layout";
import CardNoticia from "../../components/ui/CardNoticia";
import IconeSvg from "../../components/ui/IconeSvg";

// Funções de API
import { buscarNoticiasPorCategoria } from "../../lib/api";

// Mapeamento de cores para cada categoria
const coresCategorias = {
  javascript: "bg-yellow-100 text-yellow-800",
  python: "bg-green-100 text-green-800",
  frameworks: "bg-purple-100 text-purple-800",
  cloud: "bg-blue-100 text-blue-800",
  "banco de dados": "bg-red-100 text-red-800",
  default: "bg-gray-100 text-gray-800",
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

// Função para formatar o nome da categoria
const formatarNomeCategoria = (categoria) => {
  if (!categoria) return "";

  // Transforma a primeira letra em maiúscula
  return categoria.charAt(0).toUpperCase() + categoria.slice(1);
};

export default function PaginaCategoria() {
  const router = useRouter();
  const { cat } = router.query;

  // Estado para armazenar as notícias
  const [noticias, setNoticias] = useState([]);
  // Estado para controlar carregamento
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Só fazemos a busca quando a categoria está disponível (após a hidratação do router)
    if (!cat) return;

    async function carregarNoticias() {
      try {
        const noticiasDaCategoria = await buscarNoticiasPorCategoria(cat);
        setNoticias(noticiasDaCategoria);
      } catch (erro) {
        console.error("Erro ao carregar notícias da categoria:", erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarNoticias();
  }, [cat]);

  // Determinamos a classe de cor com base na categoria
  const classeCorCategoria = coresCategorias[cat] || coresCategorias.default;

  // Determinamos o ícone baseado na categoria
  const iconeCategoria = iconesCategorias[cat] || iconesCategorias.default;

  return (
    <Layout>
      <Head>
        <title>
          {cat ? `${formatarNomeCategoria(cat)} | TechNews` : "Carregando..."}
        </title>
        <meta
          name="description"
          content={`Artigos sobre ${cat || "tecnologia"} para programadores`}
        />
      </Head>

      <section className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <IconeSvg
              nome="setaDireita"
              tamanho="16"
              className="rotate-180 mr-2"
            />
            Voltar para a página inicial
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <IconeSvg nome={iconeCategoria} tamanho="32" className="mr-3" />
            Artigos sobre {formatarNomeCategoria(cat)}
          </h1>
          <div
            className={`inline-block px-4 py-2 rounded-md ${classeCorCategoria} text-sm font-medium flex items-center`}
          >
            <IconeSvg nome={iconeCategoria} tamanho="16" className="mr-2" />
            {formatarNomeCategoria(cat)}
          </div>
        </div>

        {carregando ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.length > 0 ? (
              noticias.map((noticia) => (
                <CardNoticia key={noticia.id} noticia={noticia} />
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl text-gray-600 mb-4">
                  Nenhuma notícia encontrada para a categoria{" "}
                  {formatarNomeCategoria(cat)}.
                </p>
                <div className="flex justify-center">
                  <IconeSvg
                    nome={iconeCategoria}
                    tamanho="64"
                    className="text-gray-400 mb-4"
                  />
                </div>
                <p>
                  Novas notícias serão adicionadas em breve. Volte mais tarde!
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
}
