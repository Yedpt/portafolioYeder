'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Foto de perfil */}
        <motion.div
          className="mb-8 relative inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-[#0a0e1a] overflow-hidden">
              <Image
                src="/images/fotoYeder_in.jpeg"
                alt="Yeder Pimentel"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </motion.div>

        {/* Nombre */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            Yeder Pimentel Tapia
          </span>
        </motion.h1>

        {/* Título */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t({ es: 'Desarrollador web full stack | Desarrollador IA', en: 'Full Stack Web Developer | AI Developer' })}
        </motion.p>

        {/* Botones principales */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/Yedpt"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-linear-to-r from-purple-500/10 to-cyan-500/10 hover:from-purple-500/20 hover:to-cyan-500/20 border border-purple-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <div className="flex items-center space-x-3">
              <FaGithub className="text-cyan-400 text-2xl group-hover:rotate-12 transition-transform" />
              <span className="text-white font-semibold">GitHub</span>
            </div>
          </a>

          {/* CV Download */}
          <a
            href="/Yeder_CV.pdf"
            download
            className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <div className="flex items-center space-x-3">
              <FaFileDownload className="text-white text-2xl group-hover:translate-y-1 transition-transform" />
              <span className="text-white font-semibold">{t({ es: 'Descargar CV', en: 'Download CV' })}</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yeder-pimentel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-linear-to-r from-purple-500/10 to-cyan-500/10 hover:from-purple-500/20 hover:to-cyan-500/20 border border-cyan-500/50 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-cyan-400 text-2xl group-hover:rotate-12 transition-transform" />
              <span className="text-white font-semibold">LinkedIn</span>
            </div>
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          className="text-gray-400 flex items-center justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <HiMail className="text-cyan-400" size={20} />
          <a href="mailto:ypimentel.tapia@gmail.com" className="hover:text-cyan-400 transition-colors">
            ypimentel.tapia@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};
