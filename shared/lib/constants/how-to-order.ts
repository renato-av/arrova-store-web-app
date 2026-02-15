import { WhatsappIcon } from '@/shared/ui/icons'
import { ListChecks, Truck } from 'lucide-react'

export const ORDER_STEPS = [
  {
    title: 'Elige tu producto',
    description:
      'Personalizado: envíanos una referencia. En stock: confirmamos disponibilidad antes de coordinar.',
    note: 'Tip: dinos para cuándo lo necesitas',
    icon: ListChecks,
    number: '01',
  },
  {
    title: 'Coordinamos por WhatsApp',
    description:
      'Te damos precio (o rango), tiempos estimados y opciones de entrega según tu caso.',
    note: 'Iniciamos con 50% de adelanto',
    icon: WhatsappIcon,
    number: '02',
  },
  {
    title: 'Lo preparamos y entregamos',
    description:
      'Producción limitada y entregas coordinadas en Lima (punto de entrega o delivery).',
    note: 'Cambios según términos y condiciones',
    icon: Truck,
    number: '03',
  }
]