import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

// Fondo: carga lazy con ssr:false (usa APIs del browser)
const StarryBackground = dynamic(
  () => import("@/components/ui/StarryBackground").then((m) => ({ default: m.StarryBackground })),
  { ssr: false, loading: () => null }
);

// Carrusel: carga lazy, no crítico para el LCP
const TechCarousel = dynamic(
  () => import("@/components/ui/TechCarousel").then((m) => ({ default: m.TechCarousel })),
  { ssr: false, loading: () => null }
);

// Secciones below-the-fold: se cargan a medida que el usuario scrollea
const About = dynamic(
  () => import("@/components/sections/About").then((m) => ({ default: m.About })),
  { loading: () => <div className="min-h-screen" /> }
);

const TechSkills = dynamic(
  () => import("@/components/sections/TechSkills").then((m) => ({ default: m.TechSkills })),
  { loading: () => <div className="min-h-[500px]" /> }
);

const SoftSkills = dynamic(
  () => import("@/components/sections/SoftSkills").then((m) => ({ default: m.SoftSkills })),
  { loading: () => <div className="min-h-[500px]" /> }
);

const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
  { loading: () => <div className="min-h-screen" /> }
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <div className="min-h-[400px]" /> }
);

export default function Home() {
  return (
    <>
      <StarryBackground />
      <main>
        <Hero />
        <TechCarousel />
        <About />
        <TechSkills />
        <SoftSkills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

