import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MetodoSection from "@/components/sections/MetodoSection";
import ServiciosSection from "@/components/sections/ServiciosSection";
import ConsultoriasSection from "@/components/sections/ConsultoriasSection";
import ProyectosSection from "@/components/sections/ProyectosSection";
import CursosSection from "@/components/sections/CursosSection";
import EquipoSection from "@/components/sections/EquipoSection";
import ContactoSection from "@/components/sections/ContactoSection";
import BlogSection from "@/components/sections/BlogSection";

import IntroLoader from "@/components/ui/IntroLoader";

export default function Home() {
  return (
    <>
      <IntroLoader />
      {/* Hero - Iluminamos tu camino en la era digital */}
      <HeroSection />

      {/* Sobre Nosotros - Los 3 pilares */}
      <AboutSection />

      {/* Metodología S.E.N.T.I.D.O. - Scroll horizontal */}
      <MetodoSection />

      {/* Equipo - CEO, Director y Socios */}
      <EquipoSection />

      {/* Servicios - Ecosistema Digital y Consultorías */}
      <ServiciosSection />

      {/* Consultorías Especializadas */}
      <ConsultoriasSection />

      {/* Proyectos - Secuencia Cinematográfica */}
      <ProyectosSection />

      {/* Cursos y Talleres - Carpetas Interactivas */}
      <CursosSection />

      {/* Blog - Últimas Noticias */}
      <BlogSection />

      {/* Contacto - CTA Final */}
      <ContactoSection />
    </>
  );
}
