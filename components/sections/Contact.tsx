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

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const NAME_REGEX = /^[A-Za-zÀ-ÿ' -]{2,60}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SUBJECT_REGEX = /^[A-Za-zÀ-ÿ0-9.,:;!?()'"\- ]{4,100}$/;
const CONTACT_RATE_LIMIT_WINDOW_MS = 60_000;
const CONTACT_RATE_LIMIT_KEY = 'contact:last-submit-ms';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<keyof ContactFormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const validateField = (field: keyof ContactFormData, value: string): string => {
    const trimmedValue = value.trim();

    switch (field) {
      case 'name':
        if (!trimmedValue) {
          return t({ es: 'El nombre es obligatorio.', en: 'Name is required.' });
        }
        if (!NAME_REGEX.test(trimmedValue)) {
          return t({
            es: 'Usa 2-60 caracteres, solo letras, espacios, apóstrofe o guion.',
            en: 'Use 2-60 characters: letters, spaces, apostrophe or hyphen only.'
          });
        }
        return '';

      case 'email':
        if (!trimmedValue) {
          return t({ es: 'El correo es obligatorio.', en: 'Email is required.' });
        }
        if (!EMAIL_REGEX.test(trimmedValue)) {
          return t({
            es: 'Introduce un correo válido, por ejemplo: nombre@dominio.com',
            en: 'Enter a valid email, e.g. name@domain.com'
          });
        }
        return '';

      case 'subject':
        if (!trimmedValue) {
          return t({ es: 'El tema es obligatorio.', en: 'Subject is required.' });
        }
        if (!SUBJECT_REGEX.test(trimmedValue)) {
          return t({
            es: 'El tema debe tener 4-100 caracteres y formato válido.',
            en: 'Subject must have 4-100 characters and valid format.'
          });
        }
        return '';

      case 'message':
        if (!trimmedValue) {
          return t({ es: 'El mensaje es obligatorio.', en: 'Message is required.' });
        }
        if (trimmedValue.length < 20) {
          return t({
            es: 'El mensaje debe tener al menos 20 caracteres.',
            en: 'Message must be at least 20 characters.'
          });
        }
        if (trimmedValue.length > 1200) {
          return t({
            es: 'El mensaje no puede superar 1200 caracteres.',
            en: 'Message cannot exceed 1200 characters.'
          });
        }
        return '';

      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const nextErrors: ContactFormErrors = {};

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) nextErrors[field] = error;
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const getInputClassName = (field: keyof ContactFormData) => {
    const hasError = touched[field] && errors[field];
    return `w-full px-4 py-3 bg-[#162040] border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-gray-100 ${
      hasError
        ? 'border-red-500/80 focus:ring-red-500'
        : 'border-[#1e3a5f]/50 focus:ring-cyan-400'
    }`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    setSubmitError(null);

    // Honeypot: los bots suelen rellenar campos ocultos.
    if (honeypot.trim().length > 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    if (typeof window !== 'undefined') {
      const lastSubmitAt = Number(localStorage.getItem(CONTACT_RATE_LIMIT_KEY) || '0');
      const elapsed = Date.now() - lastSubmitAt;
      if (lastSubmitAt > 0 && elapsed < CONTACT_RATE_LIMIT_WINDOW_MS) {
        const remaining = Math.ceil((CONTACT_RATE_LIMIT_WINDOW_MS - elapsed) / 1000);
        setSubmitError(t({
          es: `Espera ${remaining}s antes de enviar otro mensaje.`,
          en: `Please wait ${remaining}s before sending another message.`
        }));
        return;
      }
    }

    if (!validateForm()) {
      return;
    }

    if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) {
      setSubmitError(t({
        es: 'Falta configurar NEXT_PUBLIC_FORMSPREE_ID en Vercel para habilitar el envío.',
        en: 'NEXT_PUBLIC_FORMSPREE_ID is missing in Vercel. Configure it to enable sending.'
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _gotcha: honeypot,
        }),
      });

      if (res.ok) {
        if (typeof window !== 'undefined') {
          localStorage.setItem(CONTACT_RATE_LIMIT_KEY, String(Date.now()));
        }
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTouched({ name: false, email: false, subject: false, message: false });
        setHoneypot('');
      } else {
        setSubmitError(t({
          es: 'Error al enviar. Inténtalo de nuevo o escríbeme directamente.',
          en: 'Error sending. Try again or email me directly.'
        }));
      }
    } catch {
      setSubmitError(t({
        es: 'Error de red al enviar. Inténtalo de nuevo en unos minutos.',
        en: 'Network error while sending. Please try again in a few minutes.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;

    setFormData({
      ...formData,
      [field]: value
    });

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({
        ...prev,
        [field]: error || undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as keyof ContactFormData;
    const value = e.target.value;

    setTouched((prev) => ({ ...prev, [field]: true }));

    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
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
          <p className="text-slate-800 dark:text-gray-400 max-w-2xl mx-auto mb-4">
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
            className="min-w-0 bg-[#0d1b2e] border border-[#1e3a5f]/50 rounded-2xl p-8 shadow-xl shadow-black/30"
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
                <p className="text-gray-300">
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
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className={`space-y-6 ${submitted ? 'hidden' : ''}`}>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Nombre */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t({ es: 'Nombre', en: 'Name' })}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('name')}
                  placeholder={t({ es: 'Tu nombre completo', en: 'Your full name' })}
                />
                {touched.name && errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t({ es: 'Dirección de correo', en: 'Email address' })}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('email')}
                  placeholder={t({ es: 'tu@email.com', en: 'you@email.com' })}
                />
                {touched.email && errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Tema */}
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t({ es: 'Tema', en: 'Subject' })}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('subject')}
                  placeholder={t({ es: '¿De qué quieres hablar?', en: 'What do you want to talk about?' })}
                />
                {touched.subject && errors.subject && (
                  <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {t({ es: 'Mensaje', en: 'Message' })}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={`${getInputClassName('message')} resize-none`}
                  placeholder={t({ es: 'Cuéntame sobre tu proyecto...', en: 'Tell me about your project...' })}
                />
                {touched.message && errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
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
            className="min-w-0 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Mapa de Google Maps */}
            <div className="w-full max-w-full bg-[#0d1b2e] border border-[#1e3a5f]/50 rounded-2xl overflow-hidden shadow-xl h-90 sm:h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.97374207795!2d-3.87936685!3d40.4378698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                className="block w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Madrid"
              />
            </div>

            {/* Info de contacto */}
            <div className="bg-[#0d1b2e] border border-[#1e3a5f]/50 rounded-2xl p-6 shadow-xl shadow-black/30 space-y-4">
              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/30">
                  <FiMapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-1">
                    {t({ es: 'Ubicación', en: 'Location' })}
                  </h4>
                  <p className="text-gray-400">Madrid, España</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                  <FiMail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-1">
                    {t({ es: 'Email', en: 'Email' })}
                  </h4>
                  <a 
                    href="mailto:ypimentel.tapia@gmail.com"
                    className="text-cyan-500 hover:text-cyan-400 transition-colors break-all"
                  >
                    ypimentel.tapia@gmail.com
                  </a>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="pt-4 border-t border-blue-400/20 dark:border-purple-500/20">
                  <h4 className="font-bold text-gray-200 mb-3">
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
