import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilidad para combinar clases de Tailwind CSS
 * Permite fusionar clases condicionales evitando conflictos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
