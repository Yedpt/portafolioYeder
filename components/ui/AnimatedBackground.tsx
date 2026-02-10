'use client';

import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]" />
      
      {/* Orbes animados */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
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
        className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-cyan-500/10 rounded-full blur-[130px]"
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
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px),
                           linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};
