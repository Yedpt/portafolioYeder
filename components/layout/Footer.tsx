'use client';

import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-[#0a0e1a] border-t border-purple-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Logo y texto */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/YP_logo.webp"
                  alt="YP Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                Yeder Pimentel
              </div>
            </div>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
              {t({ es: 'Hecho con', en: 'Made with' })} <FaHeart className="text-red-500 animate-pulse" size={14} /> {t({ es: 'en', en: 'in' })} {currentYear}
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Yedpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yeder-pimentel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:ypimentel.tapia@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <HiMail size={26} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            © {currentYear} {t({ es: 'Todos los derechos reservados', en: 'All rights reserved' })}
          </div>
        </div>
      </div>
    </footer>
  );
};
