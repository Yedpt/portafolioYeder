'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Para activar el formulario: crea una cuenta gratuita en https://formspree.io,
// crea un form, y pon tu Form ID en .env.local -> NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx
// En Vercel: Settings > Environment Variables
const FORMSPREE_URL = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
              {t({ es: 'Contacto', en: 'Contact' })}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            {t({ 
              es: '¿Tienes un proyecto en mente? ¡Hablemos!', 
              en: 'Have a project in mind? Let\'s talk!' 
            })}
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contenedor principal: Formulario + Mapa */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Formulario de contacto */}
          <motion.div
            className="bg-white/80 dark:bg-[#0a0e1a]/70 backdrop-blur-sm border border-blue-400/30 dark:border-purple-500/20 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              {t({ es: 'Envíame un mensaje', en: 'Send me a message' })}
            </h3>

            {/* Mensaje de éxito */}
            {submitted && (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                  {t({ es: '¡Mensaje enviado!', en: 'Message sent!' })}
                </p>
                <p className="text-gray-400">
                  {t({ es: 'Te contactaré lo antes posible.', en: "I'll get back to you as soon as possible." })}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-cyan-400 hover:underline mt-2"
                >
                  {t({ es: 'Enviar otro mensaje', en: 'Send another message' })}
                </button>
              </div>
            )}

            {/* Mensaje de error */}
            {submitError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center mb-4">
                {t({ es: 'Error al enviar. Inténtalo de nuevo o escríbeme directamente.', en: 'Error sending. Try again or email me directly.' })}
              </div>
            )}

            <form onSubmit={handleSubmit} className={`space-y-6 ${submitted ? 'hidden' : ''}`}>
              {/* Nombre */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t({ es: 'Nombre', en: 'Name' })}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-[#1a1f35]/50 border border-blue-400/30 dark:border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-gray-200"
                  placeholder={t({ es: 'Tu nombre completo', en: 'Your full name' })}
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t({ es: 'Dirección de correo', en: 'Email address' })}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-[#1a1f35]/50 border border-blue-400/30 dark:border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-gray-200"
                  placeholder={t({ es: 'tu@email.com', en: 'you@email.com' })}
                />
              </div>

              {/* Tema */}
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t({ es: 'Tema', en: 'Subject' })}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-[#1a1f35]/50 border border-blue-400/30 dark:border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-gray-200"
                  placeholder={t({ es: '¿De qué quieres hablar?', en: 'What do you want to talk about?' })}
                />
              </div>

              {/* Mensaje */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t({ es: 'Mensaje', en: 'Message' })}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-[#1a1f35]/50 border border-blue-400/30 dark:border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-purple-500 transition-all duration-300 resize-none text-gray-800 dark:text-gray-200"
                  placeholder={t({ es: 'Cuéntame sobre tu proyecto...', en: 'Tell me about your project...' })}
                />
              </div>

              {/* Botón enviar */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={20} />
                {isSubmitting 
                  ? t({ es: 'Enviando...', en: 'Sending...' })
                  : t({ es: 'Enviar mensaje', en: 'Send Message' })
                }
              </motion.button>
            </form>
          </motion.div>

          {/* Mapa + Info de contacto */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tarjeta de ubicación — sin iframe pesado de Google Maps */}
            <a
              href="https://www.google.com/maps/place/Madrid,+Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/80 dark:bg-[#0a0e1a]/70 backdrop-blur-sm border border-blue-400/30 dark:border-purple-500/20 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Pseudo-mapa visual con CSS */}
              <div className="relative h-44 bg-linear-to-br from-slate-800 to-slate-900 overflow-hidden">
                {/* Grid de calles simulado */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />
                {/* Calles diagonales */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #8b5cf6 1px, transparent 1px), linear-gradient(-45deg, #8b5cf6 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                  }}
                />
                {/* Pin central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <FiMapPin className="text-white" size={16} />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rotate-45" />
                  </div>
                </div>
                {/* Overlay con texto */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-900/80 to-transparent p-3 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold">Madrid, España</span>
                  <span className="text-cyan-400 text-xs group-hover:underline">
                    {t({ es: 'Ver en Maps →', en: 'View on Maps →' })}
                  </span>
                </div>
              </div>
            </a>

            {/* Info de contacto */}
            <div className="bg-white/80 dark:bg-[#0a0e1a]/70 backdrop-blur-sm border border-blue-400/30 dark:border-purple-500/20 rounded-2xl p-6 shadow-xl space-y-4">
              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/30">
                  <FiMapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {t({ es: 'Ubicación', en: 'Location' })}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Madrid, España</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                  <FiMail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {t({ es: 'Email', en: 'Email' })}
                  </h4>
                  <a 
                    href="mailto:ypimentel.tapia@gmail.com"
                    className="text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    ypimentel.tapia@gmail.com
                  </a>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="pt-4 border-t border-blue-400/20 dark:border-purple-500/20">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {t({ es: 'Sígueme en', en: 'Follow me on' })}
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Yedpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-linear-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yeder-pimentel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decoración de fondo */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};

export default Contact;
