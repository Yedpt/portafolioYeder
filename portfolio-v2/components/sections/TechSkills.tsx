'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiAngular, 
  SiHtml5, SiCss3, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiPhp,
  SiMongodb, SiMysql, SiPostgresql, SiSequelize, SiSqlalchemy,
  SiDocker, SiGit, SiGithub, SiVercel, SiNetlify,
  SiPandas, SiNumpy, SiPytorch, SiTensorflow, SiScikitlearn,
  SiPostman, SiFigma, SiStripe, SiSwagger, SiWordpress,
  SiTrello, SiRender, SiAxios
} from 'react-icons/si';
import { FaBrain, FaRobot, FaMicrochip, FaCode, FaEye, FaSearch, FaPuzzlePiece, FaUsers } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const getTechCategories = (t: (translations: { es: string; en: string }) => string) => [
  {
    title: t({ es: 'Frontend', en: 'Frontend' }),
    color: 'from-cyan-400 to-blue-500',
    techs: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
    ]
  },
  {
    title: t({ es: 'Backend', en: 'Backend' }),
    color: 'from-purple-400 to-pink-500',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ]
  },
  {
    title: t({ es: 'Base de Datos', en: 'Database' }),
    color: 'from-green-400 to-emerald-500',
    techs: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7' },
      { name: 'SQLAlchemy', icon: SiSqlalchemy, color: '#D71F00' },
    ]
  },
  {
    title: t({ es: 'Cloud & DevOps', en: 'Cloud & DevOps' }),
    color: 'from-orange-400 to-red-500',
    techs: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
    ]
  },
  {
    title: t({ es: 'Ciencia de Datos & IA', en: 'Data Science & AI' }),
    color: 'from-pink-400 to-purple-500',
    techs: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'LangChain', icon: FaBrain, color: '#00D4AA' },
      { name: 'RAG', icon: FaRobot, color: '#8B5CF6' },
      { name: 'LLM', icon: FaMicrochip, color: '#06B6D4' },
      { name: 'Computer Vision', icon: FaEye, color: '#FF6B6B' },
      { name: 'Web Scraping', icon: FaSearch, color: '#4ECDC4' },
      { name: 'Prompt Eng.', icon: FaPuzzlePiece, color: '#A8E6CF' },
    ]
  },
  {
    title: t({ es: 'Herramientas & Diseño', en: 'Tools & Design' }),
    color: 'from-yellow-400 to-amber-500',
    techs: [
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
      { name: 'VSCode', icon: FaCode, color: '#007ACC' },
      { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
      { name: 'Trello', icon: SiTrello, color: '#0052CC' },
      { name: 'Axios', icon: SiAxios, color: '#5A29E4' },
      { name: 'Scrum', icon: FaUsers, color: '#FF9800' },
    ]
  }
];

export const TechSkills = () => {
  const { t } = useLanguage();
  const techCategories = getTechCategories(t);

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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              {t({ es: 'Habilidades Técnicas', en: 'Technical Skills' })}
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/70 dark:bg-[#0a0e1a]/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Título de categoría */}
              <h3 className={`text-lg font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r ${category.color}`}>
                {category.title}
              </h3>

              {/* Grid de tecnologías */}
              <div className="grid grid-cols-3 gap-3">
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-2 bg-white/60 dark:bg-[#1a1f35]/50 rounded-lg hover:bg-white/90 dark:hover:bg-[#1a1f35] transition-all duration-300 group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    >
                      <Icon 
                        className="text-2xl mb-1.5 group-hover:scale-110 transition-transform" 
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] text-gray-400 text-center font-medium leading-tight">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
