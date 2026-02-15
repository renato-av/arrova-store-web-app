import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { WHATSAPP_NUMBER, WHATSAPP_TEXT } from '../constants/social'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function whatsappHref(text?: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text ?? WHATSAPP_TEXT}`
}
