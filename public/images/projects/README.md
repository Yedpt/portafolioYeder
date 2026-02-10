# Directorio de Imágenes de Proyectos

Esta carpeta debe contener las imágenes/GIFs/animaciones Lottie de tus proyectos.

## 🎯 Formatos Soportados

El portfolio soporta 3 tipos de animaciones:

### 1. **Lottie Animations (JSON) - RECOMENDADO** ⭐
- **Peso**: 10-150KB (súper ligero!)
- **Calidad**: Vectorial, escala perfectamente
- **Formato**: `.json`
- **Ventajas**: Peso mínimo, calidad infinita, interactivo

### 2. **GIF Animados**
- **Peso**: 500KB-5MB
- **Calidad**: Buena pero pixelada al escalar
- **Formato**: `.gif`

### 3. **Imágenes Estáticas**
- **Peso**: 100KB-1MB
- **Formato**: `.png`, `.jpg`, `.webp`

## 📁 Archivos Requeridos

Necesitas agregar 6 archivos (pueden mezclar formatos):

1. `computer-vision.json` (o `.gif`) - Computer Vision - Detección de Logos
2. `llm-generator.json` (o `.gif`) - LLM Generador de Contenido
3. `petland.json` (o `.gif`) - Petland F5 - Tienda de Mascotas
4. `cleancode.json` (o `.gif`) - CleanCode - Principios SOLID
5. `gitgame.json` (o `.gif`) - GitGame - Aprender Git Jugando
6. `dog-breed.json` (o `.gif`) - Dog Breed Identifier - ML

## 🚀 Cómo Crear Lottie Animations (JSON)

### Opción 1: Desde LottieFiles (MÁS FÁCIL)
1. Ve a [LottieFiles.com](https://lottiefiles.com/)
2. Busca animaciones pre-hechas relacionadas (coding, data, AI, etc.)
3. Descarga el archivo JSON gratis
4. Guárdalo en esta carpeta con el nombre correcto

**Ejemplos útiles:**
- Busca "coding", "developer", "artificial intelligence", "machine learning"
- Busca "data visualization", "analytics", "chart"
- Busca "web development", "react", "javascript"

### Opción 2: Convertir Video/GIF a Lottie
1. **Usa LottieFiles Tools**:
   - Ve a [lottiefiles.com/tools/gif-to-lottie](https://lottiefiles.com/tools/gif-to-lottie)
   - Sube tu GIF o video
   - Descarga el JSON generado

2. **Graba tu proyecto primero**:
   - Usa **OBS Studio** o **ScreenToGif** para grabar tu app
   - Exporta como MP4 o GIF
   - Convierte a Lottie con la herramienta anterior

### Opción 3: Crear animación con After Effects
1. Diseña tu animación en **Adobe After Effects**
2. Instala el plugin **Bodymovin**
3. Exporta como JSON
4. El archivo resultante es compatible automáticamente

## 📊 Comparación de Tamaños

| Formato | Peso Aproximado | Calidad | Carga |
|---------|----------------|---------|-------|
| Lottie JSON | 20-150 KB | ⭐⭐⭐⭐⭐ | ⚡ Instantánea |
| GIF optimizado | 500 KB - 2 MB | ⭐⭐⭐ | 🐢 1-2 segundos |
| GIF sin optimizar | 2-5 MB | ⭐⭐⭐ | 🐌 3-5 segundos |
| Video MP4 | 1-10 MB | ⭐⭐⭐⭐ | 🐢 2-4 segundos |

**¡Lottie es hasta 20x más ligero que un GIF!**

## 🎨 Cómo Crear GIFs Ligeros (Si no usas Lottie)

### Opción 1: OBS Studio + ezgif.com
1. Graba tu pantalla con **OBS Studio** (formato MP4)
2. Sube el video a [ezgif.com/video-to-gif](https://ezgif.com/video-to-gif)
3. Ajusta tamaño a **800px de ancho máximo**
4. Reduce FPS a **10-15** para menor peso
5. Descarga el GIF optimizado

### Opción 2: ScreenToGif (Windows)
1. Descarga de [screentogif.com](https://www.screentogif.com/)
2. Graba solo la parte específica de tu app
3. Edita y elimina frames innecesarios
4. Exporta con optimización

### Opción 3: Licecap (Mac/Windows)
1. Descarga de [cockos.com/licecap](https://www.cockos.com/licecap/)
2. Graba directamente a GIF
3. Ajusta calidad y FPS para reducir tamaño

## ✨ Funcionalidad Implementada

Cada proyecto ahora tiene:
- ✅ Imagen/GIF/Lottie visible en la card del proyecto
- ✅ Detección automática de formato (JSON = Lottie, otros = Image)
- ✅ Botón de zoom (🔍) que aparece al hacer hover sobre la imagen
- ✅ Modal de pantalla completa para ver el contenido ampliado
- ✅ Soporte completo para Lottie en modo zoom
- ✅ Click fuera del modal para cerrar

## 🔧 Instalación Completada

El proyecto ya tiene instalado:
- ✅ `lottie-react v2.4.0` - Para reproducir animaciones Lottie
- ✅ Componente `ProjectMedia` - Detecta automáticamente el formato
- ✅ Soporte en modal de zoom - Funciona con todos los formatos

## 🎯 Recomendación Final

**Para máximo rendimiento y calidad:**
1. Prioriza **Lottie JSON** siempre que sea posible
2. Usa **GIF optimizado** solo si Lottie no es viable  
3. Reserva **imágenes estáticas** para casos donde no hay animación

**Tu portfolio cargará 10-20x más rápido con Lottie!** 🚀

¡Buena suerte con tus proyectos!
