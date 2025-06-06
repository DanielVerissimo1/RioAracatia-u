import Naty from "@/components/Naty";
import HeroSection from "@/components/HeroSection";
import CardRecursos from "@/components/Card";
import Pascal from "@/components/Pascal";
import Pascoa from "@/components/Pascoa";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-white">
      <div id="nav"><Naty/></div>
      <div id="hero"><HeroSection/> </div>
      <div id="section"><Pascoa/></div>
          <section className="bg-white py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                <CardRecursos
                  titulo="Plante com a gente"
                  subtitulo="A recuperação das matas ciliares e o combate ao assoreamento do Rio Aracatiaçu mostram como pequenas ações, unidas ao conhecimento ecológico, podem transformar o meio ambiente."
                  iconeSRC="🌱" />

                <CardRecursos
                  titulo="Compartilhe nosso conteúdo"
                  subtitulo="Leve a educação ambiental para mais pessoas. Incentive a proteção dos recursos hídricos e mostre como o engajamento coletivo fortalece a sustentabilidade."
                  iconeSRC="📣" />

                <CardRecursos
                  titulo="Comece com pequenas atitudes!"
                  subtitulo="A mudança começa em você: economize água, cuide do solo e inspire seus vizinhos. Ações simples, quando multiplicadas, criam um impacto poderoso. Vamos começar?"
                  iconeSRC="💡" />
            </div>

            </section>
            <div id="obj"><Pascal/></div>
            <div id="contato"><Footer/></div>
    </div>
  );
}
