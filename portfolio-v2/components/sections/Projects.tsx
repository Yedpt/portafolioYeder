'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiExternalLink, FiGithub, FiX, FiPlay, FiMaximize2 } from 'react-icons/fi';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { 
  SiReact, SiTailwindcss, 
  SiPython, SiFastapi, 
  SiPostgresql, SiDocker, SiMysql, 
  SiExpress, SiPytorch, SiOpencv, SiJavascript, SiNodedotjs
} from 'react-icons/si';

interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string; // Ruta de la imagen/GIF o archivo Lottie JSON
  technologies: Array<{ name: string; icon: React.ComponentType<{ style?: React.CSSProperties; className?: string; size?: number }>; color: string }>;
  demoType: 'live' | 'video'; // 'live' para link directo, 'video' para modal con video
  demoUrl?: string; // URL del demo en vivo
  videoUrl?: string; // URL del video para el modal
  githubUrl: string;
  status: { es: string; en: string }; // "Live", "Proyecto", etc.
  statusColor: string;
  category: 'web' | 'ai'; // 'web' para desarrollo web full stack, 'ai' para IA/ML/Computer Vision
}

const getProjects = (): Project[] => [
  {
    id: 1,
    title: { es: 'Computer Vision - Detección de Objetos', en: 'Computer Vision - Object Detection' },
    description: { 
      es: 'Sistema full-stack de detección de objetos con YOLOv8 personalizado. Backend FastAPI + frontend React, Base de datos PostgreSQL, tiempo real con WebSockets y despliegue Docker. Precisión de detección 90%+ (mAP@0.5: 0.94).', 
      en: 'Full-stack object detection system with custom YOLOv8. FastAPI backend + React frontend, PostgreSQL database, real-time WebSockets and Docker deployment. Detection accuracy 90%+ (mAP@0.5: 0.94).' 
    },
    image: '/images/projects/computer-vision.json',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/XWhtPLFnb5A',
    githubUrl: 'https://github.com/Yedpt/PROYECTO-COMPUTER-VISION---Deteccion-de-Objetos',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
    category: 'ai',
  },
  {
    id: 2,
    title: { es: 'LLM Generador de Contenido', en: 'LLM Content Generator' },
    description: { 
      es: 'Sistema multiagente IA con FastAPI + React 19. Usa Groq API (LLaMA), LangChain y RAG científico con arXiv. Genera contenido, imágenes (HuggingFace) y análisis avanzados con arquitectura modular.', 
      en: 'Multi-agent AI system with FastAPI + React 19. Uses Groq API (LLaMA), LangChain and scientific RAG with arXiv. Generates content, images (HuggingFace) and advanced analysis with modular architecture.' 
    },
    image: '/images/projects/llm-generator.json',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/MyOb_GqMVaU',
    githubUrl: 'https://github.com/Yedpt/proyecto-LLMs-generador-de-contenido',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
    category: 'ai',
  },
  {
    id: 3,
    title: { es: 'Petland F5 - Tienda de Mascotas', en: 'Petland F5 - Pet Store' },
    description: { 
      es: 'E-commerce full-stack con React 18 + FastAPI. Base de datos PostgreSQL, autenticación JWT, caché Redis, WebSockets en tiempo real, migraciones Alembic y arquitectura MVC. Panel admin integrado.', 
      en: 'Full-stack e-commerce with React 18 + FastAPI. PostgreSQL database, JWT authentication, Redis cache, real-time WebSockets, Alembic migrations and MVC architecture. Integrated admin panel.' 
    },
    image: '/images/projects/petland.json',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    demoType: 'live',
    demoUrl: 'https://petland-f5.vercel.app',
    githubUrl: 'https://github.com/Yedpt/Petland_F5',
    status: { es: 'Live', en: 'Live' },
    statusColor: '#10B981',
    category: 'web',
  },
  {
    id: 4,
    title: { es: 'CleanCode - Principios SOLID', en: 'CleanCode - SOLID Principles' },
    description: { 
      es: 'Blog para programadores con React + Vite y backend TypeScript. Express + Node.js, MySQL con Sequelize ORM, autenticación JWT, Bcrypt para contraseñas, Multer para archivos y Tailwind CSS.', 
      en: 'Blog platform for programmers with React + Vite and TypeScript backend. Express + Node.js, MySQL with Sequelize ORM, JWT authentication, Bcrypt for passwords, Multer for files and Tailwind CSS.' 
    },
    image: '/images/projects/cleancode.json',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    githubUrl: 'https://github.com/Yedpt/cleanCode',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
    category: 'web',
  },
  {
    id: 5,
    title: { es: 'GitGame - Aprender Git Jugando', en: 'GitGame - Learn Git by Playing' },
    description: { 
      es: 'Plataforma de noticias gaming con React + Vite y backend TypeScript. Express + Node.js, MySQL + Sequelize, autenticación JWT, sistema de roles (admin/usuario), noticias, videos, reviews y lanzamientos con Tailwind CSS.', 
      en: 'Gaming news platform with React + Vite and TypeScript backend. Express + Node.js, MySQL + Sequelize, JWT authentication, role-based system (admin/user), news, videos, reviews and releases with Tailwind CSS.' 
    },
    image: '/images/projects/gitgame.json',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    demoType: 'live',
    demoUrl: 'https://gitgame.vercel.app',
    githubUrl: 'https://github.com/Yedpt/gitGame',
    status: { es: 'Live', en: 'Live' },
    statusColor: '#10B981',
    category: 'web',
  },
  {
    id: 6,
    title: { es: 'Dog Breed Identifier - ML', en: 'Dog Breed Identifier - ML' },
    description: { 
      es: 'Clasificador ML con PyTorch 2.10 + FastAPI + React 19. CNN EfficientNetV2-S con Transfer Learning, 90.22% precisión, 119 razas de perros, Stanford Dogs Dataset (20,580 imágenes), OpenCV y Tailwind CSS v4.', 
      en: 'ML classifier with PyTorch 2.10 + FastAPI + React 19. EfficientNetV2-S CNN with Transfer Learning, 90.22% accuracy, 119 dog breeds, Stanford Dogs Dataset (20,580 images), OpenCV and Tailwind CSS v4.' 
    },
    image: '/images/projects/dog-breed.json',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
    ],
    demoType: 'video',
    videoUrl: 'https://www.youtube.com/embed/rsJhxqRUhTY',
    githubUrl: 'https://github.com/Yedpt/Dog_Breed_Identifier_ML',
    status: { es: 'Proyecto', en: 'Project' },
    statusColor: '#8B5CF6',
    category: 'ai',
  },
];

// Componente para renderizar imagen normal o Lottie JSON
const ProjectMedia = ({ 
  src, 
  alt, 
  className = '' 
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) => {
  const isLottie = src.endsWith('.json');
  const [lottieData, setLottieData] = useState<object | null>(null);

  // Cargar Lottie si es JSON usando useEffect
  useEffect(() => {
    if (isLottie) {
      fetch(src)
        .then(res => res.json())
        .then(data => setLottieData(data))
        .catch(err => console.error('Error loading Lottie:', err));
    }
  }, [src, isLottie]);

  if (isLottie) {
    if (!lottieData) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1f35]">
          <div className="text-cyan-400 text-sm">Cargando animación...</div>
        </div>
      );
    }
    return (
      <div className="absolute inset-0">
        <Lottie
          animationData={lottieData}
          loop
          style={{ 
            width: '100%', 
            height: '100%'
          }}
        />
      </div>
    );
  }

  // Imagen normal o GIF
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-cover ${className}`}
      unoptimized
    />
  );
};

export const Projects = () => {
  const { t, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ image: string; title: string } | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'web' | 'ai'>('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFilterDropdown(false);
      }
    };
    
    if (showFilterDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilterDropdown]);
  
  const allProjects = getProjects();
  const projects = filterCategory === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filterCategory);
  
  const filterOptions = [
    { value: 'all', label: { es: 'Todos', en: 'All' } },
    { value: 'web', label: { es: 'Desarrollo Web Full Stack', en: 'Full Stack Web Development' } },
    { value: 'ai', label: { es: 'IA / Machine Learning', en: 'AI / Machine Learning' } },
  ] as const;

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
          
          {/* Botón de filtro con dropdown */}
          <div ref={dropdownRef} className="mt-8 flex justify-center relative">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="px-6 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 text-cyan-400 font-semibold border border-purple-500/20 flex items-center gap-2"
            >
              <span className="text-sm">{t({ es: 'Filtrar por Categoría', en: 'Filter by Category' })}</span>
              <span className="text-xs text-gray-500">
                ({projects.length} {t({ es: 'de', en: 'of' })} {allProjects.length} {t({ es: 'proyectos', en: 'projects' })})
              </span>
              <svg 
                className={`w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            {showFilterDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 bg-slate-800 dark:bg-[#0a0e1a] border border-purple-500/20 rounded-lg shadow-xl z-50 w-64"
              >
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setFilterCategory(option.value);
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-purple-500/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      filterCategory === option.value ? 'bg-purple-500/20 text-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    {t(option.label)}
                  </button>
                ))}
              </motion.div>
            )}
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

                {/* Imagen del proyecto con botón de zoom */}
                <div className="relative w-full h-48 overflow-hidden bg-[#1a1f35] group/image">
                  {/* GIF/Imagen/Lottie del proyecto */}
                  <ProjectMedia
                    src={project.image}
                    alt={project.title[lang]}
                    className="transition-transform duration-500 group-hover/image:scale-110"
                  />
                  
                  {/* Botón de zoom sobre la imagen */}
                  <button
                    onClick={() => setZoomedImage({ image: project.image, title: project.title[lang] })}
                    className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/image:opacity-100 hover:bg-black/70 hover:scale-110 transition-all duration-300"
                    title={t({ es: 'Ver imagen completa', en: 'View full image' })}
                  >
                    <FiMaximize2 size={18} />
                  </button>
                  
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

        {/* Modal de Zoom de Imagen/GIF */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
            >
              <motion.div
                className="relative w-full max-w-5xl bg-white dark:bg-[#0a0e1a] rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header del modal */}
                <div className="flex items-center justify-between p-6 border-b border-purple-500/20 bg-white/50 dark:bg-[#0a0e1a]/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                    {zoomedImage.title}
                  </h3>
                  <button
                    onClick={() => setZoomedImage(null)}
                    className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Imagen/GIF/Lottie a pantalla completa */}
                <div className="relative w-full aspect-video bg-[#1a1f35]">
                  <ProjectMedia
                    src={zoomedImage.image}
                    alt={zoomedImage.title}
                  />
                </div>

                {/* Footer del modal */}
                <div className="p-4 border-t border-purple-500/20 bg-white/50 dark:bg-[#0a0e1a]/50 backdrop-blur-sm text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t({ es: 'Haz clic fuera de la imagen para cerrar', en: 'Click outside the image to close' })}
                  </p>
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
