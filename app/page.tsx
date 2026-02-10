import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechSkills } from "@/components/sections/TechSkills";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { TechCarousel } from "@/components/ui/TechCarousel";
import { StarryBackground } from "@/components/ui/StarryBackground";

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

