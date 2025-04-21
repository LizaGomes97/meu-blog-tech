// funçoes de integraçao com cms
// lib/api.js
// Dados simulados para testes enquanto não integramos o CMS
const noticiasTeste = [
  {
    id: "1",
    slug: "javascript-es2025-novidades",
    titulo:
      "JavaScript ES2025: As novidades que todo desenvolvedor precisa conhecer",
    resumo:
      "A nova versão do ECMAScript traz funcionalidades que prometem revolucionar a forma como desenvolvemos aplicações web. Conheça as mudanças mais importantes.",
    categoria: "JavaScript",
    imagemUrl: "/imagens/javascript-novidades.jpg",
    dataCriacao: "2025-04-18T10:00:00Z",
    autorNome: "Bot IA Tech",
    conteudo: "Conteúdo completo do artigo sobre JavaScript ES2025...",
  },
  {
    id: "2",
    slug: "python-4-lancamento",
    titulo: "Python 4.0 é lançado: Confira todas as mudanças importantes",
    resumo:
      "A aguardada versão 4.0 do Python foi finalmente lançada. Saiba o que mudou e como isso afeta seus projetos existentes.",
    categoria: "Python",
    imagemUrl: "/imagens/python-4.jpg",
    dataCriacao: "2025-04-15T14:30:00Z",
    autorNome: "Bot IA Tech",
    conteudo: "Conteúdo completo do artigo sobre Python 4.0...",
  },
  {
    id: "3",
    slug: "react-vs-vue-2025",
    titulo:
      "React vs Vue em 2025: Qual framework escolher para novos projetos?",
    resumo:
      "Uma análise comparativa entre React e Vue no cenário atual de desenvolvimento frontend. Performance, comunidade e casos de uso.",
    categoria: "Frameworks",
    imagemUrl: "/imagens/react-vue.jpg",
    dataCriacao: "2025-04-10T09:15:00Z",
    autorNome: "Bot IA Tech",
    conteudo: "Conteúdo completo do artigo comparando React e Vue...",
  },
  {
    id: "4",
    slug: "cloud-functions-performance",
    titulo:
      "Como otimizar o desempenho de Cloud Functions em aplicações serverless",
    resumo:
      "Técnicas avançadas para melhorar a performance e reduzir custos de Cloud Functions em ambientes de produção.",
    categoria: "Cloud",
    imagemUrl: "/imagens/cloud-functions.jpg",
    dataCriacao: "2025-04-05T11:45:00Z",
    autorNome: "Bot IA Tech",
    conteudo:
      "Conteúdo completo do artigo sobre otimização de Cloud Functions...",
  },
  {
    id: "5",
    slug: "typescript-5-2-recursos",
    titulo: "TypeScript 5.2: Os recursos que você precisa começar a usar hoje",
    resumo:
      "Os novos recursos do TypeScript 5.2 que estão transformando o desenvolvimento de aplicações JavaScript mais seguras e escaláveis.",
    categoria: "JavaScript",
    imagemUrl: "/imagens/typescript.jpg",
    dataCriacao: "2025-04-02T16:20:00Z",
    autorNome: "Bot IA Tech",
    conteudo: "Conteúdo completo do artigo sobre TypeScript 5.2...",
  },
  {
    id: "6",
    slug: "postgresql-16-novos-recursos",
    titulo: "PostgreSQL 16: Novos recursos para desenvolvedores backend",
    resumo:
      "As novidades do PostgreSQL 16 que todo desenvolvedor backend precisa conhecer para otimizar suas aplicações.",
    categoria: "Banco de Dados",
    imagemUrl: "/imagens/postgresql.jpg",
    dataCriacao: "2025-03-28T13:10:00Z",
    autorNome: "Bot IA Tech",
    conteudo: "Conteúdo completo do artigo sobre PostgreSQL 16...",
  },
];

/**
 * Função para buscar as últimas notícias
 * @param {number} quantidade - Quantidade de notícias para retornar
 * @returns {Promise<Array>} - Array com as notícias
 */
export async function buscarUltimasNoticias(quantidade = 6) {
  // Simula um delay de carregamento (como se estivesse buscando de uma API)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Retorna as notícias limitadas pela quantidade solicitada
  return noticiasTeste.slice(0, quantidade);
}

/**
 * Função para buscar uma notícia específica pelo slug
 * @param {string} slug - O slug da notícia
 * @returns {Promise<Object|null>} - A notícia encontrada ou null
 */
export async function buscarNoticiaPorSlug(slug) {
  // Simula um delay de carregamento
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Busca a notícia pelo slug
  const noticia = noticiasTeste.find((n) => n.slug === slug);
  return noticia || null;
}

/**
 * Função para buscar notícias por categoria
 * @param {string} categoria - A categoria para filtrar
 * @returns {Promise<Array>} - Array com as notícias da categoria
 */
export async function buscarNoticiasPorCategoria(categoria) {
  // Simula um delay de carregamento
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Filtra as notícias pela categoria (ignorando maiúsculas/minúsculas)
  return noticiasTeste.filter(
    (n) => n.categoria.toLowerCase() === categoria.toLowerCase()
  );
}
