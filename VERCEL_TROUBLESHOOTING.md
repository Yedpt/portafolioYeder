# 🔍 Checklist de Troubleshooting Vercel

## 1. Verificar Build Logs
- Click en el deployment más reciente
- Click en "Build Logs"
- Buscar líneas rojas (errores) o amarillas (warnings)
- Copiar el error completo si existe

## 2. Errores Comunes

### Error: Module not found
```bash
# Si aparece "Module not found"
# Solución: Reinstalar dependencias
npm install
git add package-lock.json
git commit -m "Fix: Update package-lock.json"
git push origin main
```

### Error: Build failed
```bash
# Verificar que el build funcione localmente
npm run build

# Si falla localmente, corregir primero
```

### Error: Page not found (404)
```bash
# Verificar que app/page.tsx existe
ls app/page.tsx

# Verificar que app/layout.tsx existe  
ls app/layout.tsx
```

## 3. Forzar Redeploy Manual
- En Vercel dashboard → Deployments
- Click en los "..." del último deployment
- Click "Redeploy"
- Marcar "Use existing Build Cache" = NO
- Click "Redeploy"

## 4. Verificar Variables de Entorno
- Settings → Environment Variables
- Asegúrate de que estén configuradas si las necesitas

## 5. Limpiar Caché de Vercel
- Settings → General
- Scroll hasta "Deployment Protection"
- Click "Clear Cache"
- Luego hacer un nuevo push a main

## 6. Contacto si nada funciona
- Copia los Build Logs completos
- Compártelos para análisis detallado
