import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compresión gzip de respuestas
  compress: true,

  // No exponer header X-Powered-By (pequeña mejora de seguridad)
  poweredByHeader: false,

  // Optimización de imágenes: preferir formatos modernos
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },

  // Eliminar console.log en producción
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
