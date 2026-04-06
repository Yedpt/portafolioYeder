# Seguridad del Proyecto

Este documento define una guia de seguridad practica para este portfolio basado en Next.js.

## Alcance

- Frontend en Next.js (App Router)
- Integraciones externas (Formspree, YouTube, Google Maps, GitHub, LinkedIn)
- Configuracion de cabeceras HTTP y CSP

## Resumen de controles ya implementados

- Cabeceras de seguridad en produccion desde [next.config.ts](next.config.ts).
- CSP activa con restricciones de origen y mitigaciones anti inyeccion.
- Validacion de URLs externas para demos, codigo y embeds en [components/sections/Projects.tsx](components/sections/Projects.tsx).
- Endurecimiento de iframes con `sandbox` y `referrerPolicy` en:
  - [components/sections/Projects.tsx](components/sections/Projects.tsx)
  - [components/sections/Contact.tsx](components/sections/Contact.tsx)
- Control de envio de formulario y validacion del endpoint de Formspree en [components/sections/Contact.tsx](components/sections/Contact.tsx).

## Checklist OWASP adaptada (mantenimiento mensual)

### A01 - Broken Access Control

- [ ] Verificar que no existan rutas administrativas expuestas (actualmente no aplica en este portfolio estatico).
- [ ] Revisar que no se rendericen datos sensibles en cliente.

Como confrontarlo:
- Mantener principio de minimo privilegio y evitar exponer estado interno innecesario.

### A02 - Cryptographic Failures

- [ ] Confirmar que el sitio se sirve por HTTPS en produccion.
- [ ] Verificar HSTS activo en headers de produccion.
- [ ] No almacenar secretos en variables `NEXT_PUBLIC_*`.

Como confrontarlo:
- Guardar secretos solo en variables de entorno del servidor.
- Mantener HSTS y TLS correctos en despliegue.

### A03 - Injection

- [ ] Confirmar que no exista uso de `dangerouslySetInnerHTML`, `eval` o `new Function`.
- [ ] Mantener CSP activa y revisada despues de cambios de terceros.
- [ ] Validar cualquier URL externa antes de usarla en `href` o `src`.

Como confrontarlo:
- Sanitizar/validar entradas y limitar origenes en CSP.

### A04 - Insecure Design

- [ ] Revisar flujos de formulario y anti-spam.
- [ ] Mantener honeypot y, si crece el trafico, activar CAPTCHA en proveedor de formularios.

Como confrontarlo:
- Anadir defensa en profundidad: validacion, limite de frecuencia y antifraude en proveedor.

### A05 - Security Misconfiguration

- [ ] Revisar cabeceras de seguridad tras cada cambio de infraestructura.
- [ ] Confirmar que `poweredByHeader` siga deshabilitado.
- [ ] Verificar politicas de `Permissions-Policy`, `Referrer-Policy`, `X-Content-Type-Options`.

Como confrontarlo:
- Tratar configuracion de seguridad como parte del baseline de produccion.

### A06 - Vulnerable and Outdated Components

- [ ] Ejecutar auditoria de dependencias y resolver vulnerabilidades.
- [ ] Revisar changelogs de Next.js y React antes de upgrades mayores.

Comandos:

```bash
npm.cmd audit --omit=dev
npm.cmd outdated
```

Como confrontarlo:
- Actualizar dependencias en ciclos cortos y con pruebas basicas post-upgrade.

### A07 - Identification and Authentication Failures

- [ ] No aplica directamente en este portfolio (sin login local).
- [ ] Si se anade autenticacion en futuro, exigir MFA para paneles sensibles.

Como confrontarlo:
- Implementar autenticacion robusta con sesiones seguras y rotacion de tokens.

### A08 - Software and Data Integrity Failures

- [ ] Evitar carga de scripts remotos no controlados.
- [ ] Revisar integraciones de terceros (embeds y APIs) en cada release.

Como confrontarlo:
- Limitar origenes en CSP y usar proveedores confiables.

### A09 - Security Logging and Monitoring Failures

- [ ] Verificar logs de build/deploy y errores de runtime en Vercel.
- [ ] Registrar y revisar errores de formulario (Formspree dashboard).

Como confrontarlo:
- Definir rutina de revision mensual de logs y alertas de errores.

### A10 - Server-Side Request Forgery (SSRF)

- [ ] Bajo riesgo actual (sin backend propio que haga fetch arbitrario con input de usuario).
- [ ] Si se crea backend, bloquear destinos internos y validar hosts permitidos.

Como confrontarlo:
- Usar allowlist de hosts y controles de salida de red en backend.

## Rutina operativa recomendada

Frecuencia: mensual (o antes de cada release importante).

1. Ejecutar `npm.cmd audit --omit=dev`.
2. Ejecutar `npm.cmd run lint`.
3. Revisar cambios de `next.config.ts` en CSP y cabeceras.
4. Comprobar enlaces externos y embeds en secciones de proyectos/contacto.
5. Revisar errores de produccion en Vercel y Formspree.

## Politica de reporte de vulnerabilidades

Si detectas una vulnerabilidad:

1. No publiques exploit ni detalles sensibles en abierto.
2. Reporta por email al propietario del portfolio con:
   - Impacto
   - Pasos de reproduccion
   - Evidencia
   - Recomendacion de mitigacion
3. Aplicar parche, validar en local y desplegar.
