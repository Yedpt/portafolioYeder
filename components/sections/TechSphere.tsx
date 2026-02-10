'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiNextdotjs, SiExpress, SiFastapi, SiPytorch, SiTensorflow
} from 'react-icons/si';

const techIcons = [
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { Icon: SiPython, color: '#3776AB', name: 'Python' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
  { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
  { Icon: SiGit, color: '#F05032', name: 'Git' },
  { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
  { Icon: SiNextdotjs, color: '#FFFFFF', name: 'Next.js' },
  { Icon: SiExpress, color: '#FFFFFF', name: 'Express' },
  { Icon: SiFastapi, color: '#009688', name: 'FastAPI' },
  { Icon: SiPytorch, color: '#EE4C2C', name: 'PyTorch' },
  { Icon: SiTensorflow, color: '#FF6F00', name: 'TensorFlow' },
];

export const TechSphere = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            Stack Tecnológico
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías que domino y utilizo en mis proyectos
          </p>
        </motion.div>

        {/* Esfera 3D */}
        <motion.div
          className="relative w-full h-125 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="relative w-100 h-100"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg) rotateX(${Math.sin(rotation * 0.02) * 10}deg)`,
            }}
          >
            {techIcons.map((tech, index) => {
              const Icon = tech.Icon;
              const phi = Math.acos(-1 + (2 * index) / techIcons.length);
              const theta = Math.sqrt(techIcons.length * Math.PI) * phi;
              
              const x = 200 * Math.cos(theta) * Math.sin(phi);
              const y = 200 * Math.sin(theta) * Math.sin(phi);
              const z = 200 * Math.cos(phi);

              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                    left: '50%',
                    top: '50%',
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a0e1a]/80 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 shadow-lg"
                    style={{
                      transform: `rotateY(${-rotation}deg)`,
                      boxShadow: `0 0 20px ${tech.color}40`,
                    }}
                  >
                    <Icon 
                      className="text-2xl"
                      style={{ color: tech.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
            
            {/* Centro brillante */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
              <div className="w-full h-full rounded-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        {/* Texto descriptivo */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 italic">
            ✨ Pasa el cursor sobre los iconos para interactuar
          </p>
        </motion.div>
      </div>
    </section>
  );
};
