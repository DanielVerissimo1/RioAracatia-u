// components/Footer.tsx
import { Mail, Instagram, Facebook, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo e Descrição */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="text-green-300" size={28} />
            <h2 className="text-2xl font-bold">Projeto Rio Aracatiaçu</h2>
          </div>
          <p className="text-sm text-green-100 leading-relaxed">
            Educação, sustentabilidade e preservação ambiental caminham juntas neste projeto que conecta a comunidade de Amontada à natureza viva do Rio Aracatiaçu.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <p className="flex items-center space-x-2">
            <Mail size={18} className="text-green-300" />
            <span>silvapaulojoseda@gmail.com</span>
          </p>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Siga nas redes</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-300 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <Facebook size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-green-800 pt-6 text-center text-sm text-green-100">
        © {new Date().getFullYear()} Projeto Rio Aracatiaçu. Todos os direitos reservados.
      </div>
    </footer>
  );
}
