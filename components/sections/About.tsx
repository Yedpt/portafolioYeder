'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBrain } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="px-6 pt-8 pb-20 md:pt-12 md:pb-24 relative">
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-900 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {t({ es: 'Soy ', en: "I'm " })}
              <span className="text-cyan-400 font-semibold">Yeder Pimentel</span>
              {t({
                es: ', desarrollador Full Stack especializado en crear soluciones inteligentes con IA. Apasionado por automatizar procesos y optimizar la experiencia de usuario con soluciones inteligentes. Busco aplicar mi formación intensiva y habilidades técnicas en proyectos reales que valoren la comunicación clara.',
                en: ', a Full Stack developer specialized in building intelligent AI-powered solutions. I am passionate about automating processes and improving user experience with practical solutions. I aim to apply my intensive training and technical skills in real projects that value clear communication.'
              })}
            </p>
            
            <p className="text-slate-900 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {t({
                es: 'Mi experiencia abarca el desarrollo completo: desde el frontend con ',
                en: 'My experience covers full-stack development: from frontend with '
              })}
              <span className="text-purple-400">JavaScript, TypeScript {t({ es: 'y', en: 'and' })} React</span>
              {t({ es: ', hasta el backend con ', en: ', to backend with ' })}
              <span className="text-purple-400">Python {t({ es: 'y', en: 'and' })} Node.js</span>
              {t({ es: ', donde implemento soluciones de IA como ', en: ', where I implement AI solutions like ' })}
              <span className="text-cyan-400">RAG</span>
              {t({ es: ', aplicaciones con ', en: ', applications with ' })}
              <span className="text-cyan-400">LLMs</span>
              {t({ es: ', agentes con ', en: ', agents with ' })}
              <span className="text-cyan-400">LangChain</span>
              {t({ es: ' y aplicaciones de ', en: ' and ' })}
              <span className="text-cyan-400">Computer Vision</span>
              {t({ es: ' con PyTorch y YOLO.', en: ' applications using PyTorch and YOLO.' })}
            </p>

            <p className="text-slate-900 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              {t({
                es: 'Busco colaborar en un equipo donde pueda aportar estas habilidades para resolver problemas reales, aprender continuamente y contribuir con soluciones técnicas que funcionen.',
                en: 'I am looking to collaborate with a team where I can apply these skills to solve real problems, keep learning continuously, and contribute technical solutions that truly work.'
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
            <div className="p-5 md:p-6 bg-[#0d1b2e] border border-[#1e3a5f]/50 rounded-xl hover:border-purple-400/60 transition-all duration-300 group shadow-lg shadow-black/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaCode className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Full Stack Development</h3>
                  <p className="text-gray-300">
                    {t({
                      es: 'Frontend & Backend con JavaScript, TypeScript, React, Python/FastAPI y Node.js/Express',
                      en: 'Frontend & Backend with JavaScript, TypeScript, React, Python/FastAPI and Node.js/Express'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* IA */}
            <div className="p-5 md:p-6 bg-[#0d1b2e] border border-[#1e3a5f]/50 rounded-xl hover:border-cyan-400/60 transition-all duration-300 group shadow-lg shadow-black/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaRobot className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">
                    {t({ es: 'Inteligencia Artificial', en: 'Artificial Intelligence' })}
                  </h3>
                  <p className="text-gray-300">
                    {t({
                      es: 'RAG, LangChain, LangGraph, LLMs, agentes IA, ChromaDB y Computer Vision con PyTorch + YOLO.',
                      en: 'RAG, LangChain, LangGraph, LLMs, AI agents, ChromaDB and Computer Vision with PyTorch + YOLO.'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="p-5 md:p-6 bg-[#0d1b2e] border border-[#1e3a5f]/50 rounded-xl hover:border-purple-400/60 transition-all duration-300 group shadow-lg shadow-black/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FaBrain className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Data Science & ML</h3>
                  <p className="text-gray-300">
                    {t({
                      es: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Machine Learning y Deep Learning.',
                      en: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Machine Learning and Deep Learning.'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
