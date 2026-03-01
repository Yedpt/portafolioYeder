'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (translations: { es: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');

  // Cargar idioma guardado al montar
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language | null;
    if (saved === 'es' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = (translations: { es: string; en: string }) => {
    return translations[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
