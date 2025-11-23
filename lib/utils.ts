import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Genera un enlace de WhatsApp con un mensaje predefinido
 * @param message - Mensaje opcional personalizado
 * @returns URL de WhatsApp
 */
export function getWhatsAppLink(message?: string): string {
  const phoneNumber = '595994925946' // Número sin el + y espacios
  const defaultMessage = 'Hola, me gustaría agendar una sesión.'
  const text = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${phoneNumber}?text=${text}`
}
