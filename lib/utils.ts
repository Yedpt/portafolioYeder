/**
 * Utilidad para combinar clases de Tailwind CSS
 * Implementación nativa sin dependencias externas
 */
export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs.filter(Boolean).join(' ');
}
