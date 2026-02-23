import { WhatsappIcon } from '@/shared/ui/icons'
import { ListChecks, Truck } from 'lucide-react'

export const ORDER_STEPS = [
  {
    title: 'Elige una idea del catálogo',
    description:
      'Revisa nuestras piezas y envíanos una referencia o detalle del diseño que deseas personalizar.',
    note: 'Cada pieza se elabora de manera artesanal bajo pedido',
    icon: ListChecks,
    number: '01',
  },
  {
    title: 'Coordinamos por WhatsApp',
    description:
      'Te indicamos precio (o rango), tiempos de producción y detalles de entrega según tu caso.',
    note: 'Se inicia con 50% de adelanto',
    icon: WhatsappIcon,
    number: '02',
  },
  {
    title: 'Elaboramos y entregamos',
    description:
      'Trabajamos tu pedido y coordinamos la entrega en Lima (punto acordado o delivery).',
    note: 'Al ser un trabajo personalizado, no se aceptan cambios una vez iniciado',
    icon: Truck,
    number: '03',
  }
]