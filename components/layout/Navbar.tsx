'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = {
  es: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contact' }
  ],
  en: [
    { name: 'Home', href: '#inicio' },
    { name: 'About', href: '#sobre-mi' },
    { name: 'Projects', href: '#proyectos' },
    { name: 'Contact', href: '#contact' }
  ]
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#0a0e1a]/80 backdrop-blur-md border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-18">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 transition-transform group-hover:scale-110 duration-300">
              <Image
                src="/images/YP_logo.webp"
                alt="YP Logo"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-slate-700 dark:text-cyan-400 font-semibold text-xl hidden sm:block group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">Yeder Pimentel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems[lang].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[1.08rem] text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 relative group font-semibold"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300 text-blue-600 dark:text-cyan-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 text-blue-600 dark:text-cyan-400 font-semibold border border-purple-500/20"
            >
              {lang.toUpperCase()}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-xl border border-cyan-400/40 bg-[#0d1b2e]/90 text-cyan-300 hover:bg-[#132844] transition-all duration-300 shadow-[0_0_12px_rgba(34,211,238,0.25)] z-60"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-[#050b18]/97 backdrop-blur-xl border-t border-purple-500/20 z-40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'calc(100vh - 72px)' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="h-full px-6 py-8 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs rounded-2xl border border-cyan-400/20 bg-[#0b1730]/70 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.10)] p-4 space-y-2">
              {navItems[lang].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-center text-gray-100 hover:text-cyan-300 transition-all duration-300 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 text-3xl font-bold leading-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-6 border-t border-purple-500/20">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors text-cyan-300 border border-cyan-400/30"
              >
                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 font-semibold border border-cyan-400/30"
              >
                {lang.toUpperCase()}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
