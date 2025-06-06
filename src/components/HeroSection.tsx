'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagem-rio.jpg"
          alt="Pescador no Rio Aracatiaçu"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay para contraste */}
      </div>

      {/* Conteúdo textual */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 text-white md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            Reconectar o Passado <br />
            <span className="text-green-300">&</span> Construir o Futuro
          </h1>
          
          <div className="space-y-4 text-lg text-gray-200 md:text-xl">
            <p>O Rio Aracatiaçu pede socorro.</p>
            <p>
              E juntos, podemos garantir que ele continue sendo fonte de vida, cultura e sustento.
            </p>
            <p className="flex items-center gap-2 pt-4 text-green-300">
              <span className="text-2xl">🌱</span> 
              Um projeto de educação ambiental, participação social e preservação ecológica.
            </p>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}