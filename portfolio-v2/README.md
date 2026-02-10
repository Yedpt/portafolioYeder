# 🚀 Portfolio v2 - Next.js 16 

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.33-FF0080?style=for-the-badge&logo=framer)

**Portfolio personal moderno con diseño neon y animaciones suaves** ✨

[Demo en Vivo](#) • [Características](#-características) • [Instalación](#-instalación) • [Uso](#-uso)

</div>

---

## 📸 Vista Previa

<div align="center">

### 🌓 Modo Dark/Light

| Dark Mode 🌙 | Light Mode ☀️ |
|:---:|:---:|
| Fondo oscuro con efectos neon cyan/purple | Fondo blanco con estrellas azules elegantes |
| <img src="https://via.placeholder.com/400x300/0a0e1a/06b6d4?text=Dark+Mode" alt="Dark Mode" width="400"/> | <img src="https://via.placeholder.com/400x300/ffffff/3b82f6?text=Light+Mode" alt="Light Mode" width="400"/> |

</div>

---

## ✨ Características

### 🎨 Diseño Moderno
- 🌟 **Fondo estrellado animado** con estrellas flotantes y efecto parallax
- 🎭 **Tema Dark/Light** con transiciones suaves
- 🌈 **Colores neon** cyan/purple en dark mode, azul/blanco en light mode
- 📱 **Diseño responsive** optimizado para móvil, tablet y desktop
- 🔄 **Animaciones fluidas** con Framer Motion

### 🧩 Secciones Implementadas

#### 🏠 **Hero**
- Presentación con nombre y rol
- Botones CTA animados
- Partículas decorativas

#### 👤 **About**
- Descripción personal y profesional
- Timeline de experiencia
- Idiomas: Español/Inglés

#### 💻 **Tech Skills**
- 60+ tecnologías organizadas en 6 categorías
- Icons coloridos con hover effects
- Frontend, Backend, Database, Cloud, Data Science, Tools

#### 🎯 **Soft Skills**
- 10 habilidades blandas con efectos neon
- Iconos personalizados por skill
- Descripciones en hover

#### 🚀 **Projects**
- 6 proyectos principales con detalles
- **Soporte múltiple formato**: Lottie JSON, GIF, PNG, JPG
- **Botón de zoom** para ver proyectos en pantalla completa
- Demo en vivo o video con modal de YouTube
- Links a código GitHub
- Badges de tecnologías utilizadas

#### 📬 **Contact**
- Formulario elegante con validación
- Mapa de Google Maps (Madrid, España)
- Info de contacto: ubicación, email
- Links a redes sociales (GitHub, LinkedIn)

### 🎭 Componentes UI

#### 🌌 Starry Background
- Estrellas animadas flotantes
- Shooting stars periódicas
- Orbes de colores decorativos
- Grid sutil de fondo
- Adaptado a tema dark/light

#### 🎠 Tech Carousel
- Carrusel infinito de logos
- 60+ tecnologías en loop continuo
- Animación suave sin reinicios
- Triplicado de array para efecto seamless

---

## 🛠️ Tecnologías Utilizadas

### Core
- ⚡ **Next.js 16.1.6** - App Router, Turbopack, RSC
- ⚛️ **React 19.2.3** - Última versión con mejoras de rendimiento
- 📘 **TypeScript 5** - Tipado fuerte y seguridad
- 🎨 **Tailwind CSS 4** - Nueva sintaxis `bg-linear-to-*`

### Animaciones & UI
- 🎬 **Framer Motion 12.33.0** - Animaciones fluidas y gestures
- 🎭 **Lottie React 2.4.0** - Animaciones JSON ultra ligeras
- 🎯 **React Icons 5.5.0** - 5000+ iconos

### Utilidades
- 🔧 **clsx** - Composición de clases condicionales
- 🎨 **tailwind-merge** - Merge inteligente de clases Tailwind
- 🌟 **Lucide React** - Iconos SVG modernos
- 📦 **Tabler Icons** - Iconos adicionales

---

## 🚀 Instalación

### Prerrequisitos
- Node.js 20+ 
- npm o yarn
- Git

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Yedpt/portafolio_yeder.git
cd portafolio_yeder/portfolio-v2
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador 🎉

---

## 📁 Estructura del Proyecto

```
portfolio-v2/
├── 📁 app/                      # App Router de Next.js
│   ├── layout.tsx              # Layout principal con providers
│   ├── page.tsx                # Página home con todas las secciones
│   └── globals.css             # Estilos globales y variables CSS
├── 📁 components/
│   ├── 📁 layout/              # Componentes de layout
│   │   ├── Navbar.tsx          # Navegación con logo y toggles
│   │   └── Footer.tsx          # Footer con redes sociales
│   ├── 📁 sections/            # Secciones principales
│   │   ├── Hero.tsx            # Sección hero
│   │   ├── About.tsx           # Sobre mí
│   │   ├── TechSkills.tsx      # Habilidades técnicas (60+ techs)
│   │   ├── SoftSkills.tsx      # Habilidades blandas (10 skills)
│   │   ├── Projects.tsx        # Proyectos con Lottie/GIF y zoom
│   │   └── Contact.tsx         # Formulario + mapa
│   └── 📁 ui/                  # Componentes UI reutilizables
│       ├── StarryBackground.tsx # Fondo estrellado animado
│       └── TechCarousel.tsx    # Carrusel infinito de tecnologías
├── 📁 contexts/                # React Context providers
│   ├── ThemeContext.tsx        # Dark/Light mode
│   └── LanguageContext.tsx     # ES/EN switching
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 📁 projects/        # GIFs/Lottie de proyectos
│   │   │   ├── README.md       # Guía de uso de Lottie
│   │   │   ├── *.json          # Animaciones Lottie
│   │   │   └── *.gif           # GIFs de proyectos
│   │   └── logo.svg            # Logo YP
│   └── favicon.ico             # Favicon
├── 📄 INSTALL.md               # Guía de instalación
└── 📄 README.md                # Este archivo
```

---

## 🎬 Uso de Lottie Animations

### ¿Por qué Lottie?

| Característica | GIF | Lottie JSON |
|---------------|-----|-------------|
| **Peso** | 2-5 MB 🐌 | 20-150 KB ⚡ |
| **Calidad** | Pixelada | Vectorial perfecta ⭐ |
| **Escalado** | Se degrada | Sin pérdida de calidad |
| **Carga** | 3-5 segundos | Instantánea |
| **Rendimiento** | Consume mucho | Muy ligero 🚀 |

**¡Lottie es hasta 20x más ligero que un GIF!**

### Agregar animaciones a tus proyectos

1. Descarga animaciones Lottie desde [LottieFiles.com](https://lottiefiles.com/)
2. Coloca los archivos `.json` en `/public/images/projects/`
3. Actualiza la ruta en `Projects.tsx`:

```typescript
image: '/images/projects/tu-proyecto.json'  // Lottie
// o
image: '/images/projects/tu-proyecto.gif'   // GIF tradicional
```

El componente detecta automáticamente el formato y lo renderiza correctamente! 🎉

### Convertir GIF a Lottie

Usa [lottiefiles.com/tools/gif-to-lottie](https://lottiefiles.com/tools/gif-to-lottie)

---

## 🎨 Personalización

### Cambiar colores del tema

Edita `app/globals.css`:

```css
:root {
  --background: #ffffff;      /* Fondo light mode */
  --foreground: #0f172a;      /* Texto light mode */
}

.dark {
  --background: #0a0e1a;      /* Fondo dark mode */
  --foreground: #ffffff;      /* Texto dark mode */
}
```

### Modificar proyectos

Edita `components/sections/Projects.tsx`:

```typescript
const getProjects = (): Project[] => [
  {
    id: 1,
    title: { es: 'Tu Proyecto', en: 'Your Project' },
    description: { 
      es: 'Descripción en español', 
      en: 'Description in English' 
    },
    image: '/images/projects/tu-proyecto.json', // o .gif
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      // Más tecnologías...
    ],
    demoType: 'live', // o 'video'
    demoUrl: 'https://tu-demo.com',
    githubUrl: 'https://github.com/tu-usuario/tu-repo',
    status: { es: 'Live', en: 'Live' },
    statusColor: '#10B981',
  },
  // Más proyectos...
];
```

### Agregar nuevas tecnologías

1. Importa el icono en `TechSkills.tsx`:
```typescript
import { SiNuevaTech } from 'react-icons/si';
```

2. Agrégalo a la categoría correspondiente:
```typescript
{ name: 'Nueva Tech', icon: SiNuevaTech, color: '#FF5733' }
```

---

## 🚀 Deployment

### Vercel (Recomendado)

1. Pushea tu código a GitHub
2. Conecta tu repo en [vercel.com](https://vercel.com)
3. Deploy automático! 🎉

### Build para producción

```bash
npm run build
npm start
```

---

## 📊 Performance

### Lighthouse Score Goals

- 🟢 Performance: 95+
- 🟢 Accessibility: 100
- 🟢 Best Practices: 100
- 🟢 SEO: 100

### Optimizaciones implementadas

- ⚡ Next.js App Router con RSC
- 🎯 Code Splitting automático
- 🖼️ Optimización de imágenes con Next/Image
- 🎬 Lottie JSON en lugar de GIF (20x más ligero)
- 📦 Tree Shaking automático
- 🗜️ Gzip/Brotli compression
- 🚀 Lazy loading de componentes
- 💾 Caching estratégico

---

## 🐛 Troubleshooting

### Error: PowerShell no ejecuta npm

**Solución:**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

O usa **Git Bash** o **CMD** en su lugar.

### Las animaciones Lottie no se ven

1. Verifica que el archivo `.json` esté en `/public/images/projects/`
2. Asegúrate de que la ruta sea correcta: `/images/projects/nombre.json`
3. Revisa la consola del navegador para errores

### El tema dark/light no cambia

1. Verifica que `ThemeProvider` esté en `layout.tsx`
2. Limpia caché del navegador
3. Revisa que `globals.css` tenga las variables CSS

---

## 📝 Scripts Disponibles

```bash
npm run dev      # Desarrollo con Turbopack
npm run build    # Build para producción
npm start        # Servidor de producción
npm run lint     # Linter con ESLint
```

---

## 🤝 Contribución

Las contribuciones son bienvenidas! Para cambios importantes:

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📜 Conventional Commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva característica
fix: corrección de bug
docs: cambios en documentación
style: formato, estilos (no afecta código)
refactor: refactorización de código
perf: mejoras de performance
test: agregar tests
chore: tareas de mantenimiento
```

---

## 📄 Licencia

Este proyecto es de uso personal. Si deseas usar el código como base para tu portfolio:

1. ⭐ Dale una estrella al repo
2. 🔗 Dame crédito en el footer
3. 🎨 Personaliza con tu contenido

---

## 👤 Autor

**Yeder Pimentel**

- 🌐 Portfolio: [En construcción]
- 💼 LinkedIn: [linkedin.com/in/yeder-pimentel](https://www.linkedin.com/in/yeder-pimentel)
- 🐙 GitHub: [@Yedpt](https://github.com/Yedpt)
- 📧 Email: ypimentel.tapia@gmail.com
- 📍 Ubicación: Madrid, España

---

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) - Framework increíble
- [Vercel](https://vercel.com/) - Deployment y hosting
- [Framer Motion](https://www.framer.com/motion/) - Animaciones fluidas
- [LottieFiles](https://lottiefiles.com/) - Animaciones JSON gratuitas
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de iconos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first

---

<div align="center">

### 🌟 Si te gustó el proyecto, dale una estrella! ⭐

**Hecho con ❤️ por Yeder Pimentel**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Coffee](https://img.shields.io/badge/Powered%20by-☕-brown?style=for-the-badge)

</div>
