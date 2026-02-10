# 🚀 Portfolio v2 - Next.js

Portfolio moderno con diseño elegante neón y animaciones fluidas.

## 📋 Estructura del Proyecto

```
portfolio-v2/
├── app/
│   ├── layout.tsx          # Layout principal con Navbar y Footer
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales y animaciones
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navegación con cambio de idioma y tema
│   │   └── Footer.tsx       # Footer con año dinámico
│   ├── sections/
│   │   └── Hero.tsx         # Sección principal del home
│   └── ui/
│       ├── Button.tsx       # Componente de botón reutilizable
│       └── AnimatedBackground.tsx # Fondo animado con efectos neón
└── lib/
    └── utils.ts             # Utilidades (cn para combinar clases)
```

## 🎨 Colores y Tema

El portfolio usa un esquema de colores oscuro con acentos neón:
- **Background**: `#0a0e1a` (azul muy oscuro)
- **Acentos primarios**: Cyan (`#06b6d4`) y Púrpura (`#8b5cf6`)
- **Efectos**: Gradientes y brillos suaves para un look moderno

## 🛠️ Comandos Disponibles

```bash
# Desarrollo (con Turbopack)
npm run dev

# Build para producción
npm run build

# Iniciar producción
npm start

# Linter
npm run lint
```

## 📝 Personalización Pendiente

Antes de pasar a producción, actualiza estos datos:

### 1. Hero Section ([components/sections/Hero.tsx](components/sections/Hero.tsx))
- [ ] Reemplazar emoji 👨‍💻 con tu foto real en `public/images/`
- [ ] Actualizar enlaces:
  - GitHub: línea 73
  - LinkedIn: línea 98
  - Email: línea 115

### 2. Navbar ([components/layout/Navbar.tsx](components/layout/Navbar.tsx))
- [ ] Ajustar enlaces de navegación si cambias las secciones
- [ ] Personalizar logo (línea 48-52)

### 3. Footer ([components/layout/Footer.tsx](components/layout/Footer.tsx))
- [ ] Actualizar enlaces a redes sociales (líneas 18-40)

### 4. CV
- [ ] Añadir tu CV en `public/Yeder_CV.pdf`

## 🖼️ Añadir tu Foto

1. Coloca tu foto en `public/images/tu-foto.jpg`
2. En [Hero.tsx](components/sections/Hero.tsx) línea 32, reemplaza:
```tsx
<div className="w-full h-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
  👨‍💻
</div>
```

Por:
```tsx
<Image
  src="/images/tu-foto.jpg"
  alt="Yeder Pimentel"
  fill
  className="object-cover"
  priority
/>
```

## 🌐 Próximas Secciones

- [ ] Sobre mí (#sobre-mi)
- [ ] Proyectos (#proyectos)
- [ ] Contacto (#contacto)

## 🚀 Despliegue a Vercel

Una vez finalizado, para llevarlo a producción:

1. Hacer commit de todos los cambios en `v2-nextjs`
2. Hacer merge a `main`:
```bash
git checkout main
git merge v2-nextjs
git push origin main
```
3. Vercel detectará automáticamente el proyecto Next.js y lo desplegará

## 📦 Tecnologías

- **Next.js 16** con App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** - Animaciones
- **React Icons** - Iconos
- **Lucide React** - Más iconos

## 🎯 Características

✅ Modo oscuro por defecto
✅ Cambio de idioma ES/EN
✅ Animaciones suaves con Framer Motion
✅ Background animado con orbes neón
✅ Responsive design
✅ Footer con año dinámico
✅ Scrollbar personalizado
