'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

// Función para generar número pseudo-aleatorio determinístico
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generar estrellas de forma determinística
const generateStars = (): Star[] => {
  const starArray: Star[] = [];
  for (let i = 0; i < 80; i++) {
    starArray.push({
      id: i,
      x: seededRandom(i * 1) * 100,
      y: seededRandom(i * 2) * 100,
      size: seededRandom(i * 3) * 2 + 1,
      duration: seededRandom(i * 4) * 3 + 2,
      delay: seededRandom(i * 5) * 2,
      opacity: seededRandom(i * 6) * 0.5 + 0.3,
    });
  }
  return starArray;
};

const stars = generateStars();

export const StarryBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Usar setTimeout para evitar el warning de setState sincrono
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  // Colores según el tema
  const isDark = theme === 'dark';
  const bgGradient = isDark 
    ? 'bg-linear-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]'
    : 'bg-linear-to-br from-white via-blue-50/30 to-white';
  
  const orbColor1 = isDark ? 'bg-purple-500/10' : 'bg-blue-400/8';
  const orbColor2 = isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/8';
  
  const starGradient = isDark 
    ? 'from-cyan-400 to-purple-400' 
    : 'from-blue-500 to-cyan-500';
  
  const starShadow = isDark ? 'shadow-cyan-400/50' : 'shadow-blue-500/40';
  
  const shootingStarGradient = isDark
    ? 'from-cyan-400 to-transparent'
    : 'from-blue-500 to-transparent';
  
  const shootingStarShadow = isDark ? 'shadow-cyan-400/50' : 'shadow-blue-500/40';
  
  const gridColor = isDark ? '#06b6d4' : '#3b82f6';
  const gridOpacity = isDark ? 0.02 : 0.015;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradiente base */}
      <div className={`absolute inset-0 ${bgGradient}`} />
      
      {/* Orbes de luz animados (fondo) */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 ${orbColor1} rounded-full blur-[120px]`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-125 h-125 ${orbColor2} rounded-full blur-[130px]`}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Estrellas flotantes */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: isDark ? star.opacity : star.opacity * 0.6,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: isDark 
              ? [star.opacity, star.opacity * 0.3, star.opacity]
              : [star.opacity * 0.6, star.opacity * 0.2, star.opacity * 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <div className={`w-full h-full bg-linear-to-br ${starGradient} rounded-full shadow-lg ${starShadow}`} />
        </motion.div>
      ))}

      {/* Partículas adicionales más grandes (shooting stars ocasionales) */}
      <motion.div
        className="absolute w-1 h-1 rounded-full left-[25%] top-[20%]"
        animate={{
          x: [-100, 1920],
          y: [0, 200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0,
          ease: "easeIn",
        }}
      >
        <div className={`w-20 h-0.5 bg-linear-to-r ${shootingStarGradient} shadow-lg ${shootingStarShadow}`} />
      </motion.div>
      
      <motion.div
        className="absolute w-1 h-1 rounded-full left-[65%] top-[35%]"
        animate={{
          x: [-100, 1920],
          y: [0, 200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 4,
          ease: "easeIn",
        }}
      >
        <div className={`w-20 h-0.5 bg-linear-to-r ${shootingStarGradient} shadow-lg ${shootingStarShadow}`} />
      </motion.div>
      
      <motion.div
        className="absolute w-1 h-1 rounded-full left-[45%] top-[10%]"
        animate={{
          x: [-100, 1920],
          y: [0, 200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 8,
          ease: "easeIn",
        }}
      >
        <div className={`w-20 h-0.5 bg-linear-to-r ${shootingStarGradient} shadow-lg ${shootingStarShadow}`} />
      </motion.div>

      {/* Grid sutil de fondo */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px),
                           linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: gridOpacity,
        }}
      />
    </div>
  );
};

