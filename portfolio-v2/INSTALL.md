# Instalación de Dependencias Pendientes

## ⚠️ Acción Requerida

Se ha agregado soporte para **Lottie animations** (archivos JSON) al proyecto.

## 📦 Instalar Nueva Dependencia

### Opción 1: Usando npm (Recomendado)
```bash
npm install
```

Este comando instalará automáticamente `lottie-react@2.4.0` que ya está agregado en `package.json`.

### Opción 2: Si hay problemas con PowerShell

Si PowerShell no permite ejecutar scripts, usa uno de estos métodos:

**Método A - Terminal Git Bash (si lo tienes instalado):**
```bash
npm install
```

**Método B - CMD (Command Prompt):**
```cmd
npm install
```

**Método C - PowerShell con permisos elevados:**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
npm install
```

## ✅ Verificar Instalación

Después de ejecutar `npm install`, verifica que se instaló correctamente:

```bash
npm list lottie-react
```

Deberías ver:
```
portfolio-v2@0.1.0
└── lottie-react@2.4.0
```

## 🚀 Ejecutar el Proyecto

Una vez instalado, ejecuta:

```bash
npm run dev
```

## 📝 Cambios Implementados

- ✅ Agregado `lottie-react` a `package.json`
- ✅ Componente `ProjectMedia` creado para soportar JSON/GIF/PNG
- ✅ Detección automática de formato por extensión
- ✅ Soporte en modal de zoom para Lottie
- ✅ Ejemplo de Lottie creado: `/public/images/projects/example-loading.json`

## 🔍 Cómo Funciona

El componente detecta automáticamente el tipo de archivo:

- **`.json`** → Renderiza con Lottie (animación vectorial)
- **`.gif`, `.png`, `.jpg`, `.webp`** → Renderiza con Next.js Image

No necesitas hacer nada más, solo agregar tus archivos a `/public/images/projects/`!

## 📚 Recursos

- [Documentación Lottie React](https://www.npmjs.com/package/lottie-react)
- [LottieFiles - Biblioteca gratuita](https://lottiefiles.com/)
- [Convertir GIF a Lottie](https://lottiefiles.com/tools/gif-to-lottie)
