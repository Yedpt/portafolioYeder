'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';
type LightFxIntensity = 'soft' | 'vivid';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  lightFxIntensity: LightFxIntensity;
  toggleLightFxIntensity: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lightFxIntensity, setLightFxIntensity] = useState<LightFxIntensity>('soft');

  // Cargar tema guardado al montar
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    }

    const savedFx = localStorage.getItem('lightFxIntensity') as LightFxIntensity | null;
    if (savedFx === 'soft' || savedFx === 'vivid') {
      setLightFxIntensity(savedFx);
    }
  }, []);

  useEffect(() => {
    // Aplicar tema al DOM y persistir
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-light-fx', lightFxIntensity);
    localStorage.setItem('lightFxIntensity', lightFxIntensity);
  }, [lightFxIntensity]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLightFxIntensity = () => {
    setLightFxIntensity(prev => (prev === 'soft' ? 'vivid' : 'soft'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, lightFxIntensity, toggleLightFxIntensity }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
