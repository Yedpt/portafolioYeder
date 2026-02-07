'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaComments, FaUsers, FaLightbulb, FaCogs, FaPalette, 
  FaClock, FaHandshake, FaChartLine, FaBookReader, FaBullseye 
} from 'react-icons/fa';

const getSoftSkills = (t: (translations: { es: string; en: string }) => string) => [
  {
    name: t({ es: 'Comunicación', en: 'Communication' }),
    icon: FaComments,
    color: '#06B6D4', // cyan
    description: t({ 
      es: 'Clara y efectiva en equipos', 
      en: 'Clear and effective in teams' 
    })
  },
  {
    name: t({ es: 'Trabajo en Equipo', en: 'Teamwork' }),
    icon: FaUsers,
    color: '#8B5CF6', // purple
    description: t({ 
      es: 'Colaboración y sinergia', 
      en: 'Collaboration and synergy' 
    })
  },
  {
    name: t({ es: 'Resolución de Problemas', en: 'Problem Solving' }),
    icon: FaLightbulb,
    color: '#F59E0B', // amber
    description: t({ 
      es: 'Análisis y soluciones creativas', 
      en: 'Analysis and creative solutions' 
    })
  },
  {
    name: t({ es: 'Adaptabilidad', en: 'Adaptability' }),
    icon: FaCogs,
    color: '#10B981', // green
    description: t({ 
      es: 'Flexible ante cambios', 
      en: 'Flexible to changes' 
    })
  },
  {
    name: t({ es: 'Creatividad', en: 'Creativity' }),
    icon: FaPalette,
    color: '#EC4899', // pink
    description: t({ 
      es: 'Ideas innovadoras', 
      en: 'Innovative ideas' 
    })
  },
  {
    name: t({ es: 'Gestión del Tiempo', en: 'Time Management' }),
    icon: FaClock,
    color: '#3B82F6', // blue
    description: t({ 
      es: 'Organización y priorización', 
      en: 'Organization and prioritization' 
    })
  },
  {
    name: t({ es: 'Liderazgo', en: 'Leadership' }),
    icon: FaBullseye,
    color: '#EF4444', // red
    description: t({ 
      es: 'Guía y motivación', 
      en: 'Guidance and motivation' 
    })
  },
  {
    name: t({ es: 'Empatía', en: 'Empathy' }),
    icon: FaHandshake,
    color: '#14B8A6', // teal
    description: t({ 
      es: 'Comprensión y conexión', 
      en: 'Understanding and connection' 
    })
  },
  {
    name: t({ es: 'Aprendizaje Continuo', en: 'Continuous Learning' }),
    icon: FaBookReader,
    color: '#A855F7', // violet
    description: t({ 
      es: 'Siempre mejorando', 
      en: 'Always improving' 
    })
  },
  {
    name: t({ es: 'Pensamiento Crítico', en: 'Critical Thinking' }),
    icon: FaChartLine,
    color: '#F97316', // orange
    description: t({ 
      es: 'Análisis profundo y lógico', 
      en: 'Deep and logical analysis' 
    })
  },
];

export const SoftSkills = () => {
  const { t } = useLanguage();
  const softSkills = getSoftSkills(t);

  return (
    <section className="py-20 px-6 relative">
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
              {t({ es: 'Habilidades Blandas', en: 'Soft Skills' })}
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Card con efecto neon */}
                <div 
                  className="relative bg-white/70 dark:bg-[#0a0e1a]/70 backdrop-blur-sm border rounded-xl p-5 h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-[#0f1729]"
                  style={{
                    borderColor: `${skill.color}40`,
                    boxShadow: `0 0 20px ${skill.color}15`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}25 0%, transparent 70%)`
                    }}
                  />

                  {/* Icon con efecto neon */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                      boxShadow: `0 0 30px ${skill.color}30, inset 0 0 20px ${skill.color}15`,
                      border: `1px solid ${skill.color}40`
                    }}
                  >
                    <Icon 
                      className="text-3xl transition-transform group-hover:scale-110 duration-300" 
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Skill name */}
                  <h3 
                    className="text-sm font-bold mb-2 transition-colors duration-300"
                    style={{ 
                      color: skill.color,
                      textShadow: `0 0 20px ${skill.color}50`
                    }}
                  >
                    {skill.name}
                  </h3>

                  {/* Description - aparece en hover */}
                  <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Partículas decorativas */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ background: skill.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Decoración de fondo */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -z-10" />
      </div>
    </section>
  );
};
