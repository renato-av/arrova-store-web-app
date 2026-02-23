import {
  Camera,
  Clock,
  CreditCard,
  Truck,
} from 'lucide-react'


export const POLICY_ITEMS = [
  {
    title: 'Pagos',
    description:
      'Para separar tu pedido solicitamos un adelanto del 50% del total. El saldo se paga el día de la entrega.',
    note: 'Una vez separado el pedido, no se realizan cambios ni devoluciones.',
    icon: CreditCard,
  },
  {
    title: 'Fotos del producto',
    description:
      'Enviamos fotos cuando el producto está terminado, antes de la entrega, para confirmar el resultado final.',
    note: 'No enviamos fotos parciales o de avance para evitar confusiones.',
    icon: Camera,
  },
  {
    title: 'Entrega',
    description:
      'Contamos con 2 puntos de entrega gratuitos (hora coordinada). Fuera de estos puntos, el envío es por motorizado externo.',
    note: 'El delivery no está incluido y se paga directamente al motorizado.',
    icon: Truck,
  },
  {
    title: 'Cambios en la entrega',
    description:
      'La modalidad y punto de entrega se confirman al separar el pedido. Cualquier cambio debe solicitarse con max 1 día de anticipación.',
    note: 'Si la logística ya fue programada, no es posible realizar cambios.',
    icon: Clock,
  },
] as const