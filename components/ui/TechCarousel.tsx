'use client';

import { 
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiAngular, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiPython, SiFastapi, 
  SiMongodb, SiMysql, SiPostgresql, SiDocker, SiGit,
  SiPandas, SiNumpy, SiPytorch, SiTensorflow, SiFigma,
  SiHtml5, SiCss3, SiPostman
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

// Duplicamos el array: con translateX(-50%) CSS crea un loop infinito perfecto
const duplicatedTechs = [...technologies, ...technologies];

export const TechCarousel = () => {
  return (
    <section className="relative py-8 overflow-hidden border-y border-purple-500/20">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/5 to-transparent"></div>
      
      {/* Animación CSS pura: corre en el GPU compositor, no bloquea el JS thread */}
      <div className="flex gap-12 items-center w-max animate-marquee">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="shrink-0 flex flex-col items-center gap-2 min-w-20 group cursor-default"
          >
            <div 
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0f1729] border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110"
              style={{
                boxShadow: `0 0 20px ${tech.color}30`
              }}
            >
              <tech.icon 
                className="w-7 h-7" 
                style={{ color: tech.color }}
              />
            </div>
            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Gradientes laterales para efecto fade */}
      <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-[#0a0e1a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-[#0a0e1a] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};
