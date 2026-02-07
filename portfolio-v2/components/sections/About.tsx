'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBrain } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              {t({ es: 'Sobre mí', en: 'About Me' })}
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t({
                es: 'Soy Yeder Pimentel, desarrollador Full Stack especializado en IA enfocado en integrar soluciones con Inteligencia Artificial en aplicaciones web modernas.',
                en: "I'm Yeder Pimentel, a Full Stack developer specialized in AI focused on integrating Artificial Intelligence solutions into modern web applications."
              })} <span className="text-cyan-400 font-semibold">Yeder Pimentel</span>
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t({
                es: 'Mi experiencia abarca el desarrollo completo: desde el frontend con ',
                en: 'My experience covers full development: from frontend with '
              })}<span className="text-purple-400">JavaScript, TypeScript {t({ es: 'y', en: 'and' })} React</span>{t({
                es: ', hasta el backend con ',
                en: ', to backend with '
              })}<span className="text-purple-400">Node.js {t({ es: 'y', en: 'and' })} Python</span>{t({
                es: ', donde diseño e implemento soluciones de IA como sistemas ',
                en: ', where I design and implement AI solutions such as '
              })}<span className="text-cyan-400">RAG</span>{t({
                es: ', agentes con ',
                en: ' systems, agents with '
              })}<span className="text-cyan-400">LangChain</span> {t({ es: 'y aplicaciones de', en: 'and' })} <span className="text-cyan-400">Computer Vision</span> {t({ es: 'con PyTorch y YOLO', en: 'applications with PyTorch and YOLO' })}.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {t({
                es: 'Busco colaborar en un equipo donde pueda aportar estas habilidades para resolver problemas reales, aprender continuamente y contribuir con soluciones técnicas que funcionen.',
                en: 'I seek to collaborate in a team where I can contribute these skills to solve real problems, continuously learn, and contribute technical solutions that work.'
              })}
            </p>
          </motion.div>

          {/* Cards de especialidades */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Full Stack */}
            <div className="p-6 bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaCode className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Full Stack Development</h3>
                  <p className="text-gray-400">
                    {t({
                      es: 'Frontend & Backend con JavaScript, TypeScript, React, Node.js',
                      en: 'Frontend & Backend with JavaScript, TypeScript, React, Node.js'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* IA */}
            <div className="p-6 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaRobot className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">
                    {t({ es: 'Inteligencia Artificial', en: 'Artificial Intelligence' })}
                  </h3>
                  <p className="text-gray-400">
                    {t({
                      es: 'RAG, LangChain, LLMs, Computer Vision con PyTorch',
                      en: 'RAG, LangChain, LLMs, Computer Vision with PyTorch'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="p-6 bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaBrain className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Data Science & ML</h3>
                  <p className="text-gray-400">Python, Pandas, NumPy, Machine Learning, Deep Learning</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
