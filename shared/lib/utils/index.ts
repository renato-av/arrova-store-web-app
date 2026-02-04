import { WHATSAPP_NUMBER, WHATSAPP_TEXT } from '../constants/whatsapp'

export function whatsappHref(text?: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text ?? WHATSAPP_TEXT}`
}
