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

  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    const contentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "script-src-attr 'none'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://formspree.io https://*.formspree.io",
      "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
      "child-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
      "form-action 'self' https://formspree.io",
      "object-src 'none'",
      "media-src 'self' https:",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
