'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useState } from 'react';

// Tipos

type CategoryKey = 'destaques' | 'estatisticas' | 'objetivos' | 'metodologia';

interface CardInfo {
  title: string;
  content: string;
  icon: string;
  value?: string;
}

const CATEGORIES: Record<CategoryKey, CardInfo[]> = {
  destaques: [
    {
      title: 'Missão do Projeto',
      content:
        'Investigar impactos socioambientais e propor soluções sustentáveis para a bacia do Rio Aracatiaçu.',
      icon: '🌿'
    },
    {
      title: 'Abordagem Integrada',
      content:
        'Combina pesquisa científica, educação ambiental e saberes tradicionais da comunidade.',
      icon: '🔬'
    },
    {
      title: 'Área de Atuação',
      content: 'Comunidades ribeirinhas de Amontada e região do baixo Aracatiaçu.',
      icon: '📍'
    },
    {
      title: 'Parcerias',
      content: 'Colaboração com instituições locais e órgãos ambientais.',
      icon: '🤝'
    }
  ],
  estatisticas: [
    {
      title: 'Degradação Ambiental',
      value: '85%',
      content: 'reconhecem a perda da mata ciliar como crítica',
      icon: '🌳'
    },
    {
      title: 'Mudanças Climáticas',
      value: '78%',
      content: 'relacionam a eventos extremos na região',
      icon: '🌡️'
    },
    {
      title: 'Assoreamento',
      value: '63%',
      content: 'atribuem ao desmatamento descontrolado',
      icon: '🏜️'
    },
    {
      title: 'Soluções',
      value: '61%',
      content: 'priorizam o reflorestamento como ação',
      icon: '✅'
    },
    {
      title: 'Consciência Ecológica',
      value: '72%',
      content: 'demonstram preocupação com preservação',
      icon: '💡'
    },
    {
      title: 'Participação',
      value: '54%',
      content: 'dispostos a engajar em ações comunitárias',
      icon: '👥'
    }
  ],
  objetivos: [
    {
      title: 'Conservação',
      content: 'Preservar a biodiversidade da bacia hidrográfica',
      icon: '🛡️'
    },
    {
      title: 'Educação',
      content: 'Implementar programas de conscientização ambiental',
      icon: '📚'
    },
    {
      title: 'Sustentabilidade',
      content: 'Promover práticas econômicas ecológicas',
      icon: '♻️'
    },
    {
      title: 'Governança',
      content: 'Fortalecer a gestão participativa dos recursos hídricos',
      icon: '🏛️'
    },
    {
      title: 'Pesquisa',
      content: 'Monitorar os ecossistemas aquáticos e terrestres',
      icon: '🔍'
    },
    {
      title: 'Cultura',
      content: 'Valorizar os saberes tradicionais locais',
      icon: '🎭'
    }
  ],
  metodologia: [
    {
      title: 'Diagnóstico',
      content: 'Avaliação detalhada dos pontos críticos de degradação',
      icon: '📝'
    },
    {
      title: 'Pesquisa de Campo',
      content: 'Coleta sistemática de dados ambientais e sociais',
      icon: '🌐'
    },
    {
      title: 'Oficinas',
      content: 'Encontros participativos com a comunidade',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Monitoramento',
      content: 'Acompanhamento contínuo dos indicadores',
      icon: '📊'
    },
    {
      title: 'Tecnologias',
      content: 'Uso de georreferenciamento e análise de dados',
      icon: '💻'
    },
    {
      title: 'Avaliação',
      content: 'Análise periódica dos resultados obtidos',
      icon: '📈'
    }
  ]
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 }
  })
};

export default function Pascal() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('destaques');

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <m.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            role="banner"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              Rio Aracatiaçu
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Uma iniciativa integrada para preservação ambiental e desenvolvimento comunitário sustentável
            </p>
          </m.header>

          {/* Navegação */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(CATEGORIES).map((category) => (
              <m.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category as CategoryKey)}
                aria-pressed={activeCategory === category}
                className={`px-6 py-3 rounded-full capitalize font-medium transition-all focus:outline-none focus:ring-2 ring-offset-2 ring-blue-500 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.replace('-', ' ')}
              </m.button>
            ))}
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {CATEGORIES[activeCategory].map((item, index) => (
              <m.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                <div className="p-6 flex-grow">
                  <div className="text-4xl mb-4" role="img" aria-label={item.title}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  {item.value && (
                    <p className="text-5xl font-bold text-blue-600 mb-4">{item.value}</p>
                  )}
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
