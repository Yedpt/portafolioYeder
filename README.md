# Portfolio v2 - Yeder Pimentel

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?style=for-the-badge&logo=framer)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

Portfolio profesional bilingue (ES/EN) con enfoque en Full Stack + IA, interfaz neon, animaciones fluidas y seccion de proyectos con demos, videos y filtros por categoria.

[Demo](https://tu-portfolio.vercel.app) • [Tecnologias](#tecnologias-principales) • [Proyectos](#proyectos-destacados) • [Instalacion](#instalacion-local)

</div>

---

## Vista general

- App desarrollada con Next.js App Router y React 19.
- UI responsive con modo dark/light.
- Fondo animado y carrusel de tecnologias.
- Secciones: Hero, About, Tech Skills, Soft Skills, Projects y Contact.
- Integraciones externas: Formspree, YouTube, Google Maps, GitHub, LinkedIn.

## Caracteristicas destacadas

### Experiencia visual

- Diseno neon con gradientes, blur effects y microinteracciones.
- Animaciones con Framer Motion y entrada escalonada por seccion.
- Fondo dinamico con estrellas y efectos atmosfericos.
- Componentes optimizados para desktop, tablet y movil.

### Experiencia funcional

- Selector de idioma ES/EN global.
- Selector de tema dark/light persistente.
- Seccion de proyectos con:
  - Filtro por categoria: Todos, Full Stack Web, IA/ML.
  - Soporte multimedia: imagen, GIF y Lottie JSON.
  - Modal de video con embed de YouTube.
  - Zoom de imagen a pantalla grande.
- Formulario de contacto con validacion de campos en tiempo real.

## Tecnologias principales

| Area | Stack |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Animaciones | Framer Motion, Lottie React |
| UI Icons | React Icons |
| Build/Deploy | npm, Vercel |
| Buenas practicas | ESlint, CSP y cabeceras de seguridad |

## Proyectos destacados

### IA / Machine Learning

1. EvaluAI - Repository Evaluator
- Stack: Next.js, React, FastAPI, PostgreSQL, LangChain, FAISS.
- Objetivo: evaluacion automatizada de repositorios de GitHub con rubricas.
- Demo: https://ai-repo-evaluator.vercel.app
- Codigo: https://github.com/Yedpt/EvaluAI

2. Nation-Mind AI - Geopolitical Simulator
- Stack: Next.js, React, FastAPI, PostgreSQL, ChromaDB, LangGraph.
- Objetivo: simulador por turnos con naciones IA autonomas.
- Demo: https://nation-mind-ai.vercel.app
- Codigo: https://github.com/Yedpt/Nation-Mind-AI

3. Computer Vision - Deteccion de Objetos
- Stack: Python, FastAPI, React, PostgreSQL, Docker, OpenCV.
- Objetivo: deteccion de objetos en tiempo real con enfoque productivo.
- Video: https://www.youtube.com/embed/XWhtPLFnb5A
- Codigo: https://github.com/Yedpt/PROYECTO-COMPUTER-VISION---Deteccion-de-Objetos

4. LLM Generador de Contenido
- Stack: Python, FastAPI, React, JavaScript, LangChain.
- Objetivo: sistema multiagente para generacion de contenido.
- Video: https://www.youtube.com/embed/MyOb_GqMVaU
- Codigo: https://github.com/Yedpt/proyecto-LLMs-generador-de-contenido

5. Dog Breed Identifier - ML
- Stack: PyTorch, FastAPI, React, OpenCV.
- Objetivo: clasificador de razas de perros con transfer learning.
- Video: https://www.youtube.com/embed/rsJhxqRUhTY
- Codigo: https://github.com/Yedpt/Dog_Breed_Identifier_ML

### Desarrollo Web Full Stack

6. Petland F5 - Tienda de Mascotas
- Stack: React, FastAPI, PostgreSQL, Redis, Tailwind.
- Objetivo: e-commerce completo con panel de administracion.
- Demo: https://petland-f5.vercel.app
- Codigo: https://github.com/Yedpt/Petland_F5

7. GitGame - Aprender Git Jugando
- Stack: React, Node.js, Express, MySQL, Tailwind.
- Objetivo: portal gaming con noticias, reviews y roles.
- Demo: https://gitgame.vercel.app
- Codigo: https://github.com/Yedpt/gitGame

8. CleanCode - Blog para Programadores
- Stack: React, Node.js, Express, MySQL, Tailwind.
- Objetivo: plataforma de contenido tecnico con enfoque SOLID.
- Video: https://www.youtube.com/embed/H1gd_J-h3pA
- Codigo: https://github.com/Yedpt/cleanCode

## Estructura del proyecto

```text
app/
  layout.tsx
  page.tsx
  proyectos-secundarios/page.tsx
components/
  layout/
  sections/
  ui/
contexts/
  LanguageContext.tsx
  ThemeContext.tsx
public/
  images/
```

## Instalacion local

1. Clona el repositorio.
2. Instala dependencias.
3. Crea variables de entorno.
4. Ejecuta en desarrollo.

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo .env.local con:

```env
NEXT_PUBLIC_FORMSPREE_ID=tu_form_id
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Seguridad y calidad

- CSP y cabeceras de seguridad en produccion.
- Validacion de URLs externas en seccion de proyectos.
- Endurecimiento de iframes con sandbox y referrer policy.
- Linting activo con ESLint.

## Roadmap sugerido

- Añadir screenshots o GIFs reales por seccion.
- Integrar analitica privacy-friendly.
- Añadir tests de interfaz para flujos criticos.
- Publicar changelog de releases.

## Autor

Yeder Pimentel

- GitHub: https://github.com/Yedpt
- LinkedIn: https://www.linkedin.com/in/yeder-pimentel/
- Email: ypimentel.tapia@gmail.com

---

Hecho por Yeder Pimentel.
