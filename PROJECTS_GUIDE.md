# Guía de Personalización de Proyectos

## 📋 Resumen de Cambios Implementados

Se han realizado las siguientes mejoras en tu portfolio:

### 1. ✅ Logo en el Footer
El logo YP ahora aparece junto a "Yeder Pimentel" en el footer, igual que en el navbar.

### 2. ✅ Tamaños Equalizados
Las secciones de **Habilidades Técnicas** y **Habilidades Blandas** ahora tienen el mismo tamaño de cards (p-5, rounded-xl) para una apariencia estética uniforme.

### 3. ✅ Light Mode Completamente Funcional
- **Fondo**: En light mode ahora es gris claro (#f5f7fa) en lugar de blanco puro
- **Estrellas**: Se adaptan al tema actual (colores oscuros del dark mode en light mode para elegancia)
- **Componentes**: Todos los componentes (Navbar, Footer, Cards) se adaptan correctamente
- **Transiciones**: Suaves entre dark y light mode

### 4. ✅ Sección de Proyectos
Nueva sección completa con:
- **6 cards de proyectos** con diseño moderno
- **Dos tipos de demos**:
  - `'live'`: Botón "View Demo" que abre el proyecto desplegado en nueva pestaña
  - `'video'`: Botón "Ver Video" que abre un modal elegante con video de YouTube
- **Botón Code**: Siempre enlaza al repositorio de GitHub
- **Badges de estado**: "Live" (verde) o "Proyecto" (morado)
- **Stack tecnológico**: Iconos de las tecnologías usadas
- **Totalmente responsive** y adaptado a dark/light mode

---

## 🎨 Cómo Personalizar tus Proyectos

### Ubicación del Archivo
```
portfolio-v2/components/sections/Projects.tsx
```

### Estructura de un Proyecto

Cada proyecto en el array `getProjects()` tiene esta estructura:

```typescript
{
  id: 1,
  title: { es: 'Título en Español', en: 'Title in English' },
  description: { 
    es: 'Descripción detallada en español...', 
    en: 'Detailed description in English...' 
  },
  image: '/images/projects/nombre-proyecto.gif',
  technologies: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    // ... más tecnologías
  ],
  demoType: 'live', // o 'video'
  demoUrl: 'https://tu-proyecto.vercel.app', // si es 'live'
  videoUrl: 'https://www.youtube.com/embed/TU_VIDEO_ID', // si es 'video'
  githubUrl: 'https://github.com/Yedpt/tu-repo',
  status: { es: 'Live', en: 'Live' },
  statusColor: '#10B981', // Verde para Live, '#8B5CF6' para Proyecto
}
```

---

## 📸 Agregar Imágenes/GIFs de tus Proyectos

### Paso 1: Preparar tus Imágenes

**Opción A - GIF (Recomendado):**
1. Graba tu proyecto en acción (15-30 segundos)
2. Convierte el video a GIF usando:
   - [Ezgif.com](https://ezgif.com/video-to-gif)
   - [Giphy](https://giphy.com/create/gifmaker)
3. Optimiza el tamaño (máximo 5MB)

**Opción B - Imagen Estática:**
1. Captura de pantalla de tu proyecto
2. Formato recomendado: PNG o JPG
3. Dimensiones recomendadas: 800x600px o similar

**Opción C - JSON Lottie (Avanzado):**
- Para animaciones más complejas y ligeras
- Requiere librería adicional `lottie-react`

### Paso 2: Guardar las Imágenes

Crea la carpeta y guarda tus imágenes:
```
portfolio-v2/
  public/
    images/
      projects/
        juntea.gif
        chapiri.gif
        goblins.gif
        portfolio.gif
        ai-system.gif
        dashboard.gif
```

### Paso 3: Actualizar las Rutas

En `Projects.tsx`, actualiza la propiedad `image`:
```typescript
image: '/images/projects/tu-proyecto.gif',
```

---

## 🎬 Configurar Videos para Modales

### Para Proyectos sin Desplegar (demoType: 'video')

1. **Sube tu video a YouTube**:
   - Graba un demo de 1-3 minutos mostrando tu proyecto
   - Sube a YouTube (puede ser no listado si quieres)
   
2. **Obtén el Video ID**:
   - URL de YouTube: `https://www.youtube.com/watch?v=ABC123XYZ`
   - Video ID: `ABC123XYZ` (la parte después de `v=`)

3. **Actualiza el proyecto**:
```typescript
{
  demoType: 'video',
  videoUrl: 'https://www.youtube.com/embed/ABC123XYZ',
  // NO incluir demoUrl
}
```

### Para Proyectos Desplegados (demoType: 'live')

```typescript
{
  demoType: 'live',
  demoUrl: 'https://tu-proyecto.vercel.app',
  // NO incluir videoUrl
}
```

---

## 🛠️ Agregar Nuevas Tecnologías

### Tecnologías Disponibles (ya importadas):

```typescript
// Ya disponibles en el archivo:
SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
SiNodedotjs, SiMongodb, SiPython, SiFlutter,
SiUnity, SiSharp
```

### Agregar Más Tecnologías:

1. **Busca el icono** en [React Icons](https://react-icons.github.io/react-icons/):
   - Busca tu tecnología (ej: "Vue")
   - Nota el nombre del icono (ej: `SiVuedotjs`)
   - Nota la librería (ej: `si` para Simple Icons)

2. **Importa el icono** al inicio de `Projects.tsx`:
```typescript
import { 
  SiReact, SiNextdotjs, // ... existentes
  SiVuedotjs, SiLaravel // nuevos
} from 'react-icons/si';
```

3. **Usa el icono** en tu proyecto:
```typescript
technologies: [
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
]
```

### Colores Oficiales de Tecnologías:

```typescript
// Frontend
React: '#61DAFB'
Vue: '#4FC08D'
Angular: '#DD0031'
Next.js: '#FFFFFF'
TypeScript: '#3178C6'

// Backend
Node.js: '#339933'
Python: '#3776AB'
PHP: '#777BB4'
Laravel: '#FF2D20'

// Bases de Datos
MongoDB: '#47A248'
MySQL: '#4479A1'
PostgreSQL: '#336791'

// Cloud/DevOps
Docker: '#2496ED'
Vercel: '#FFFFFF'
AWS: '#FF9900'
```

---

## 📝 Ejemplo Completo de Proyecto Personalizado

```typescript
{
  id: 1,
  title: { 
    es: 'Mi E-commerce Increíble', 
    en: 'My Awesome E-commerce' 
  },
  description: { 
    es: 'Plataforma de comercio electrónico full-stack con carrito de compras, pasarela de pagos integrada con Stripe, panel de administración y sistema de notificaciones en tiempo real.', 
    en: 'Full-stack e-commerce platform with shopping cart, Stripe payment gateway integration, admin panel and real-time notification system.' 
  },
  image: '/images/projects/ecommerce.gif',
  technologies: [
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ],
  demoType: 'live',
  demoUrl: 'https://mi-ecommerce.vercel.app',
  githubUrl: 'https://github.com/Yedpt/mi-ecommerce',
  status: { es: 'Live', en: 'Live' },
  statusColor: '#10B981',
}
```

---

## 🎯 Consejos para Mejores Proyectos

### Títulos:
- **Cortos y descriptivos** (máximo 5 palabras)
- **Destaca el valor**: "Dashboard Analítico" mejor que "Proyecto Final"

### Descripciones:
- **3 líneas máximo** (se trunca con `line-clamp-3`)
- **Menciona la funcionalidad principal**
- **Incluye tecnologías clave**

### Imágenes/GIFs:
- **Muestra la interfaz en acción**
- **Captura las características principales**
- **Mantén el tamaño bajo** para carga rápida

### Videos:
- **1-3 minutos de duración**
- **Muestra flujo completo** de usuario
- **Incluye voz en off** si es posible (explica qué haces)

### Estado del Proyecto:
- **"Live"** (#10B981 verde): Proyecto desplegado y funcional
- **"Proyecto"** (#8B5CF6 morado): En desarrollo o sin desplegar
- **"Mantenimiento"** (#F59E0B ámbar): Si quieres agregar este estado

---

## 🚀 Testing y Deploy

### Probar Localmente:

```bash
cd portfolio-v2
npm run dev
```

Visita: `http://localhost:3000#proyectos`

### Checklist Antes de Deploy:

- [ ] Todas las imágenes están en `/public/images/projects/`
- [ ] URLs de demos funcionan correctamente
- [ ] URLs de GitHub son correctas
- [ ] Videos de YouTube se cargan en el modal
- [ ] Funciona en dark y light mode
- [ ] Responsive en móvil, tablet y desktop
- [ ] Textos en español e inglés están completos

### Deploy a Producción:

```bash
# Asegúrate de estar en la rama correcta
git add .
git commit -m "feat: add projects section with 6 projects"
git push origin v2-nextjs

# Cuando estés listo para producción
git checkout main
git merge v2-nextjs
git push origin main
```

Vercel detectará el push y desplegará automáticamente.

---

## ❓ Troubleshooting

### Las imágenes no se muestran:
- Verifica que la ruta sea `/images/projects/...` (sin `public`)
- Confirma que el archivo existe en la carpeta correcta
- Revisa la consola del navegador para errores 404

### El video no se carga en el modal:
- Usa el formato embed: `https://www.youtube.com/embed/VIDEO_ID`
- NO uses el formato watch: `https://www.youtube.com/watch?v=VIDEO_ID`
- Verifica que el video sea público o no listado (no privado)

### El botón de demo no funciona:
- Revisa que `demoType` sea `'live'` o `'video'`
- Si es `'live'`, debe tener `demoUrl`
- Si es `'video'`, debe tener `videoUrl`

### Errores de compilación con iconos:
- Verifica que el icono esté importado correctamente
- Algunos iconos no existen (ej: `SiCsharp` → usa `SiSharp`)
- Busca el nombre correcto en [React Icons](https://react-icons.github.io/react-icons/)

---

## 📚 Recursos Adicionales

- [React Icons Browser](https://react-icons.github.io/react-icons/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Brand Colors](https://brandcolors.net/)
- [YouTube Embed Parameters](https://developers.google.com/youtube/player_parameters)

---

## 💡 Próximos Pasos

1. **Agrega tus 6 proyectos más importantes**
2. **Graba/captura las imágenes**
3. **Sube videos de los proyectos no desplegados**
4. **Prueba todo localmente**
5. **Deploy a producción**

¡Tu portfolio estará completo y profesional! 🎉
