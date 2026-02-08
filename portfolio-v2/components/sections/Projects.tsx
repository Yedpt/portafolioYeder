'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiExternalLink, FiGithub, FiX, FiPlay } from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiPython, SiFlutter, 
  SiUnity, SiSharp 
} from 'react-icons/si';

interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string; // Ruta de la imagen o GIF
  technologies: Array<{ name: string; icon: React.ComponentType<{ style?: React.CSSProperties; className?: string; size?: number }>; color: string }>;
  demoType: 'live' | 'video'; // 'live' para link directo, 'video' para modal con video
  demoUrl?: string; // URL del demo en vivo
  videoUrl?: string; // URL del video para el modal
  githubUrl: string;
  status: { es: string; en: string }; // "Live", "Proyecto", etc.
  statusColor: string;
}

const getProjects = (): Project[] => [
  {
    id: 1,
    title: { es: 'Computer Vision - Detección de Logos', en: 'Computer Vision - Logo Detection' },
    description: { 
      es: 'Sistema de detección de objetos utilizando Computer Vision y Deep Learning. Identifica y clasifica logos en imágenes con alta precisión mediante redes neuronales convolucionales.', 
      en: 'Object detection system using Computer Vision and Deep Learning. Identifies and classifies logos in images with high precision using convolutional neural networks.' 
    },
    image: '/images/projects/computer-vision.gif',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'TensorFlow', icon: SiPython, color: '#FF6F00' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    githubUrl: 'https://github.com/Yedpt/Proyecto-computer-vision--Deteccion-de-objetos',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
  },
  {
    id: 2,
    title: { es: 'LLM Generador de Contenido', en: 'LLM Content Generator' },
    description: { 
      es: 'Aplicación de generación de contenido impulsada por Large Language Models. Crea textos contextualizados y coherentes para diversas aplicaciones usando IA avanzada.', 
      en: 'Content generation application powered by Large Language Models. Creates contextualized and coherent texts for various applications using advanced AI.' 
    },
    image: '/images/projects/llm-generator.gif',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    githubUrl: 'https://github.com/Yedpt/proyecto-LLMs-generador-de-contenido',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
  },
  {
    id: 3,
    title: { es: 'Petland F5 - Tienda de Mascotas', en: 'Petland F5 - Pet Store' },
    description: { 
      es: 'E-commerce completo para tienda de mascotas con carrito de compras, gestión de productos, sistema de usuarios y panel de administración integrado.', 
      en: 'Complete e-commerce for pet store with shopping cart, product management, user system and integrated admin panel.' 
    },
    image: '/images/projects/petland.gif',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    demoType: 'live',
    demoUrl: 'https://petland-f5.vercel.app',
    githubUrl: 'https://github.com/Yedpt/petland_f5',
    status: { es: 'Live', en: 'Live' },
    statusColor: '#10B981',
  },
  {
    id: 4,
    title: { es: 'CleanCode - Principios SOLID', en: 'CleanCode - SOLID Principles' },
    description: { 
      es: 'Proyecto educativo que demuestra la aplicación de principios de Clean Code y patrones SOLID. Implementa las mejores prácticas de desarrollo de software.', 
      en: 'Educational project demonstrating the application of Clean Code principles and SOLID patterns. Implements software development best practices.' 
    },
    image: '/images/projects/cleancode.gif',
    technologies: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    githubUrl: 'https://github.com/Yedpt/cleanCode',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
  },
  {
    id: 5,
    title: { es: 'GitGame - Aprender Git Jugando', en: 'GitGame - Learn Git by Playing' },
    description: { 
      es: 'Juego interactivo para aprender comandos de Git de forma divertida. Incluye desafíos progresivos y feedback en tiempo real para dominar el control de versiones.', 
      en: 'Interactive game to learn Git commands in a fun way. Includes progressive challenges and real-time feedback to master version control.' 
    },
    image: '/images/projects/gitgame.gif',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    demoType: 'live',
    demoUrl: 'https://gitgame.vercel.app',
    githubUrl: 'https://github.com/Yedpt/GitGame',
    status: { es: 'Live', en: 'Live' },
    statusColor: '#10B981',
  },
  {
    id: 6,
    title: { es: 'Dog Breed Identifier - ML', en: 'Dog Breed Identifier - ML' },
    description: { 
      es: 'Identificador de razas de perros usando Machine Learning y redes neuronales. Clasifica más de 120 razas diferentes con alta precisión mediante visión artificial.', 
      en: 'Dog breed identifier using Machine Learning and neural networks. Classifies over 120 different breeds with high accuracy using computer vision.' 
    },
    image: '/images/projects/dog-breed.gif',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    githubUrl: 'https://github.com/Yedpt/Dog_Breed_Identifier_ML',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
  },
];

export const Projects = () => {
  const { t, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects = getProjects();

  return (
    <section id="proyectos" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500">
              {t({ es: 'Mis Proyectos', en: 'My Projects' })}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            {t({ 
              es: 'Una colección de mi trabajo reciente y proyectos personales', 
              en: 'A collection of my recent work and personal projects' 
            })}
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          
          {/* Botón de filtro */}
          <div className="mt-8 flex justify-center">
            <button
              className="px-6 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 text-cyan-400 font-semibold border border-purple-500/20 flex items-center gap-2"
              title={t({ es: 'Filtrar por Tech (Próximamente)', en: 'Filter by Tech (Coming Soon)' })}
            >
              <span className="text-sm">{t({ es: 'Filtrar por Tech', en: 'Filter by Tech' })}</span>
              <span className="text-xs text-gray-500">({t({ es: '7 de 7 proyectos', en: '7 of 7 projects' })})</span>
            </button>
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className="group relative bg-linear-to-br from-slate-700 to-slate-800 dark:bg-[#0a0e1a]/70 backdrop-blur-sm border border-blue-400/30 dark:border-purple-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 dark:hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-blue-900/20 dark:shadow-purple-900/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Badge de estado */}
                <div 
                  className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md"
                  style={{
                    background: `${project.statusColor}20`,
                    border: `1px solid ${project.statusColor}40`,
                    color: project.statusColor,
                  }}
                >
                  {project.status[lang]}
                </div>

                {/* Imagen del proyecto */}
                <div className="relative w-full h-48 overflow-hidden bg-[#1a1f35]">
                  {/* Placeholder para la imagen - Usuario debe agregar sus imágenes */}
                  <div 
                    className="w-full h-full flex items-center justify-center text-gray-500 text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #1a1f35 0%, #0a0e1a 100%)',
                    }}
                  >
                    <div className="text-center p-4">
                      <p className="text-cyan-400 font-bold mb-2">{project.title[lang]}</p>
                      <p className="text-xs text-gray-400">
                        {t({ es: 'Agregar imagen:', en: 'Add image:' })} {project.image}
                      </p>
                    </div>
                  </div>
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0e1a] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Título */}
                  <h3 className="text-xl font-bold mb-3 text-white dark:text-transparent dark:bg-clip-text dark:bg-linear-to-r dark:from-cyan-400 dark:to-purple-500">
                    {project.title[lang]}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm text-gray-200 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-600/50 dark:bg-[#1a1f35]/50 border border-blue-400/20 dark:border-purple-500/10"
                          title={tech.name}
                        >
                          <Icon style={{ color: tech.color }} className="text-sm" />
                          <span className="text-xs text-gray-100 dark:text-gray-400 font-medium">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    {/* Botón View Demo */}
                    {project.demoType === 'live' ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        <FiExternalLink size={16} />
                        {t({ es: 'View Demo', en: 'View Demo' })}
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        <FiPlay size={16} />
                        {t({ es: 'Ver Video', en: 'Watch Video' })}
                      </button>
                    )}

                    {/* Botón Code */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-cyan-400 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <FiGithub size={16} />
                      {t({ es: 'Code', en: 'Code' })}
                    </a>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-xl blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal de Video */}
        <AnimatePresence>
          {selectedProject && selectedProject.demoType === 'video' && (
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative w-full max-w-4xl bg-white dark:bg-[#0a0e1a] rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header del modal */}
                <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                      {selectedProject.title[lang]}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {selectedProject.description[lang]}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-cyan-400 transition-colors duration-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Video */}
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title[lang]}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Footer del modal */}
                <div className="p-6 border-t border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {selectedProject.technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#1a1f35]/50 border border-purple-500/10"
                          >
                            <Icon style={{ color: tech.color }} />
                            <span className="text-xs text-gray-700 dark:text-gray-400 font-medium">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300"
                    >
                      <FiGithub size={16} />
                      {t({ es: 'Ver Código', en: 'View Code' })}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decoración de fondo */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};
