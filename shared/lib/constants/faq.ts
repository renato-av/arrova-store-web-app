export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'pedido',
    question: '¿Cómo hago mi pedido?',
    answer:
      'Elige una idea del catálogo (o envíanos una referencia) y escríbenos por WhatsApp. Te confirmamos opciones, precio estimado, tiempo de elaboración y forma de entrega antes de iniciar.',
  },
  {
    id: 'adelanto',
    question: '¿Cómo son los pagos?',
    answer:
      'Para separar el pedido solicitamos un adelanto del 50% del total. El saldo restante se paga el día de la entrega.',
  },
  {
    id: 'fotos',
    question: '¿Envían fotos del proceso?',
    answer:
      'Enviamos fotos cuando el producto está terminado, previo a la entrega, para confirmar el resultado final. No enviamos fotos parciales o de avance para evitar confusiones durante el proceso.',
  },
  {
    id: 'cambios',
    question: '¿Puedo cambiar el diseño o cancelar el pedido?',
    answer:
      'Antes de iniciar coordinamos y dejamos todo claro. Una vez iniciado el trabajo, no se realizan cambios de diseño ni cancelaciones, ya que es un producto hecho a pedido.',
  },
  {
    id: 'entrega',
    question: '¿Cómo son las entregas?',
    answer:
      'Contamos con 2 puntos de entrega gratuitos (hora coordinada). Si prefieres delivery, se coordina con motorizado externo según tu zona. El costo de delivery se paga directamente al motorizado.',
  },
  {
    id: 'reprogramacion',
    question: '¿Qué pasa si llego tarde al punto de entrega?',
    answer:
      'La tolerancia de espera es de 15 minutos. Pasado ese tiempo, la entrega se reprograma según disponibilidad.',
  },
  {
    id: 'cambios-entrega',
    question: '¿Puedo cambiar la entrega (punto u horario)?',
    answer:
      'La modalidad y el punto se confirman al separar el pedido. Cualquier cambio debe solicitarse con 1–2 días de anticipación y está sujeto a disponibilidad. Si ya se organizó la logística, puede que no sea posible modificarlo.',
  },
  {
    id: 'replica',
    question: '¿Hacen réplicas exactas?',
    answer:
      'Trabajamos con referencias generales para inspirarnos, pero al ser artesanal y hecho a mano no garantizamos réplicas exactas. Buscamos que el resultado se parezca lo más posible dentro del estilo y técnica del producto.',
  },
]