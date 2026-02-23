ARROVASTORE es un emprendimiento de regalos y accesorios que vende principalmente a través de redes sociales y WhatsApp, con atención directa y personalizada. No es una tienda masiva ni un ecommerce automatizado; opera con producción limitada y procesos definidos para garantizar orden, calidad y sostenibilidad.

El negocio trabaja con una línea de producto diferenciado:

1. Productos artesanales y personalizados hechos a pedido.
Estos productos se elaboran manualmente bajo confirmación previa del cliente y requieren un tiempo de producción definido. Se trabajan con un adelanto del 50% para iniciar el pedido. Los diseños se realizan tomando referencias generales, sin garantizar réplicas exactas. Una vez iniciado el trabajo no se aceptan cambios de diseño ni cancelaciones. No se aceptan devoluciones basadas en gustos personales, ya que se trata de trabajos personalizados y artesanales.

ARROVASTORE opera con atención uno a uno, por lo que los tiempos de respuesta, producción y entrega son comunicados y acordados antes de confirmar cada pedido. Las condiciones varían según el tipo de producto, y siempre se informa al cliente qué línea está adquiriendo.

Las entregas se realizan principalmente en Lima, mediante puntos de entrega previamente establecidos o servicios de delivery coordinados. Los horarios, condiciones y responsabilidades se definen con anticipación para evitar inconvenientes.

El enfoque de ARROVASTORE es ofrecer regalos con valor emocional y accesorios funcionales, manteniendo procesos claros, expectativas realistas y una relación cercana con el cliente, priorizando la calidad del trabajo y la viabilidad operativa del negocio por encima del volumen de ventas.

TERMINOS Y CONDICIONES
Antes de avanzar, te compartimos nuestras políticas de trabajo para que todo quede claro desde el inicio 💛

💳 Pagos
✔ Para separar el producto se solicita un adelanto del 50% del total.
✔ El saldo restante se paga el día de la entrega.
✔ Una vez separado el pedido, no se realizan cambios ni devoluciones.

📸 Sobre las fotos del producto
✔ Las fotos se envían cuando el producto está terminado, previo a la entrega, para confirmar el resultado final.
✔ No se envían fotos parciales o de avance, ya que podrían generar confusión en el proceso.

🚚 Sobre la entrega
✔ Contamos con 2 puntos de entrega gratuitos (hora coordinada).
✔ La tolerancia de espera es de 15 minutos; pasado ese tiempo, la entrega se reprograma.
✔ Fuera de estos puntos, el envío es por motorizado externo.
✔ El costo de delivery no está incluido y se paga directamente al motorizado.

📦 Cambios en la entrega
✔ La modalidad y punto de entrega se confirman al momento de separar el pedido.
✔ Cualquier cambio en la entrega (punto, horario o modalidad) debe solicitarse con al menos 1 o 2 días de anticipación y está sujeto a disponibilidad.
✔ Una vez que la logística de entrega ha sido organizada y programada, no es posible realizar cambios.
✔ En caso el cambio no sea posible, se mantiene la entrega originalmente coordinada.

WEB ESTÁTICA
- Stack: Next.js (SSG) + Tailwind
- Deploy: Vercel
- Dominio en GoDaddy apuntando a tu hosting

Páginas mínimas:

- Home (propuesta + categorías + best sellers)
- Catálogo (listado simple)
- Instrucciones (explicación de pasos a seguir, ligado a FAQ)
- Contacto (botón WA + IG)

Consideraciones:
- Los productos, categorías y tags serán un .json y las imagenes en la carpeta public.

```typescript
// Type de category y tag

export type Category = {
  id: number
  label: string
  slug: string
}


// Type de product

export type Product = {
  id: number
  slug: string
  name: string
  line: 'personalizado' | 'stock'
  featured: boolean
  categoryId: number
  tagIds: number[]
  available: boolean
  price: {
    type: 'fixed' | 'range'
    currency: string
    amount?: number
    min?: number
    max?: number
  }
  images: {
    src: string
    alt: string
    isCover?: boolean
  }[]
}

```