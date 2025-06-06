'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function Pascoa() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Rio_Aracatia%C3%A7u_em_Moitas%2C_perto_de_Icara%C3%AD_de_Amontada.jpg",
    "https://lirp.cdn-website.com/05420395/dms3rep/multi/opt/rio-aracatiacu-moitas-icarai-de-amontada--640w.png",
    "https://blogdeviagemeturismo.com.br/wp-content/uploads/2022/12/Rio-Aracatiacu-Moitas-Icarai-de-Amontada-CE-.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troca a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen bg-blue-50 p-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Lado esquerdo - Conteúdo ampliado */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 p-10"
          >
            <h1 className="text-4xl font-bold text-blue-800 mb-8">
              Sobre Nós
            </h1>
            
            <p className=" text-gray-700 mb-10 leading-relaxed">
             O projeto Rio Aracatiaçu: Passado e futuro sustentável busca reconectar a comunidade de Amontada com seu patrimônio natural, promovendo a preservação do rio diante da degradação ambiental e do assoreamento. Unindo ciência e saberes locais, a iniciativa aposta na educação ambiental participativa para fortalecer a consciência ecológica e estimular ações sustentáveis. Mais do que proteger um rio, o projeto propõe uma mudança de atitude em favor de um futuro mais equilibrado e responsável.


            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "85%", label: "Degradação da mata ciliar" },
                { value: "78%", label: "Impacto das mudanças climáticas" },
                { value: "63%", label: "Taxa de assoreamento" },
                { value: "61%", label: "Soluções propostas" }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-2xl font-bold text-blue-700 mb-2">{item.value}</p>
                  <p className="text-lg text-blue-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lado direito - Carrossel de imagens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2 min-h-[500px] relative"
          >
            {images.map((img, index) => (
              <motion.img
                key={img}
                src={img}
                alt={`Rio Aracatiaçu ${index + 1}`}
                className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}