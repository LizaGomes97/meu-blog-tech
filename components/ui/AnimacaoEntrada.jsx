// components/ui/AnimacaoEntrada.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Componente para adicionar animações de entrada aos elementos
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Elementos filhos
 * @param {string} props.tipo - Tipo de animação: 'fade', 'slide-up', 'slide-right', 'scale'
 * @param {number} props.atraso - Atraso em ms antes de iniciar a animação
 * @param {number} props.duracao - Duração da animação em ms
 * @param {boolean} props.umaVez - Se true, a animação ocorre apenas uma vez (não quando elemento volta a vista)
 */
export default function AnimacaoEntrada({
  children,
  tipo = "fade",
  atraso = 0,
  duracao = 500,
  umaVez = false,
}) {
  const [visivel, setVisivel] = useState(false);
  const [animado, setAnimado] = useState(false);
  const ref = useRef();

  // Estilos para diferentes tipos de animação
  const estilosAnimacao = {
    inicial: {
      fade: { opacity: 0 },
      "slide-up": { opacity: 0, transform: "translateY(30px)" },
      "slide-right": { opacity: 0, transform: "translateX(-30px)" },
      scale: { opacity: 0, transform: "scale(0.95)" },
    },
    animado: {
      fade: { opacity: 1, transform: "none" },
      "slide-up": { opacity: 1, transform: "none" },
      "slide-right": { opacity: 1, transform: "none" },
      scale: { opacity: 1, transform: "none" },
    },
  };

  // Estilo de transição
  const transicao = {
    transition: `opacity ${duracao}ms cubic-bezier(0.4, 0, 0.2, 1), 
                transform ${duracao}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDelay: `${atraso}ms`,
  };

  // Determina o estilo conforme estado de visibilidade
  const estilo = {
    ...transicao,
    ...(visivel
      ? estilosAnimacao.animado[tipo]
      : estilosAnimacao.inicial[tipo]),
  };

  useEffect(() => {
    // Função para verificar se elemento está visível na tela
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          setAnimado(true);

          // Se umaVez é true, desconecta o observador após a animação
          if (umaVez && entrada.isIntersecting) {
            observador.disconnect();
          }
        } else if (!umaVez) {
          // Se não for umaVez, volta estado quando elemento sai da tela
          setVisivel(false);
        }
      },
      { threshold: 0.1 } // Elemento começa a aparecer quando 10% está visível
    );

    if (ref.current) {
      observador.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observador.disconnect();
      }
    };
  }, [umaVez]);

  // Se já foi animado e umaVez é true, mantém visível
  const estiloFinal =
    umaVez && animado
      ? { ...transicao, ...estilosAnimacao.animado[tipo] }
      : estilo;

  return (
    <div ref={ref} style={estiloFinal}>
      {children}
    </div>
  );
}
