import Link from 'next/link'
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react'
import { whatsappHref } from '@/shared/lib/utils'
import { WhatsappIcon } from '@/shared/ui/icons'
import { SimpleCta } from '@/shared/ui/components/call-to-action/SimpleCta'

export default function TerminosPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
            <FileText size={14} strokeWidth={1.8} className="text-primary" />
            Políticas de trabajo • Información clara
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Términos y condiciones
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base">
            Queremos que tu experiencia sea clara desde el inicio. Aquí te compartimos nuestras
            políticas para coordinar pedidos, pagos y entregas de forma ordenada.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
            >
              <WhatsappIcon />
              Consultar por WhatsApp
              <ArrowRight size={16} />
            </a>

            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5"
            >
              Ver preguntas frecuentes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-primary">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-semibold text-ink/30">01</span>
              </div>

              <h2 className="mt-4 text-base font-semibold text-ink">
                Pagos
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                <li>• Para separar el pedido se solicita un adelanto del 50% del total.</li>
                <li>• El saldo restante se paga el día de la entrega.</li>
                <li>• Una vez separado el pedido, no se realizan cambios ni devoluciones.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-primary">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-semibold text-ink/30">02</span>
              </div>

              <h2 className="mt-4 text-base font-semibold text-ink">
                Fotos del producto
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                <li>• Enviamos fotos cuando el producto está terminado, previo a la entrega.</li>
                <li>• No enviamos fotos parciales o de avance para evitar confusiones.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-primary">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-semibold text-ink/30">03</span>
              </div>

              <h2 className="mt-4 text-base font-semibold text-ink">
                Entrega
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                <li>• Contamos con 2 puntos de entrega gratuitos (hora coordinada).</li>
                <li>• La tolerancia de espera es de 15 minutos; pasado ese tiempo, la entrega se reprograma.</li>
                <li>• Fuera de estos puntos, el envío es por motorizado externo.</li>
                <li>• El costo de delivery no está incluido y se paga directamente al motorizado.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-primary">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-semibold text-ink/30">04</span>
              </div>

              <h2 className="mt-4 text-base font-semibold text-ink">
                Cambios en la entrega
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
                <li>• La modalidad y punto de entrega se confirman al momento de separar el pedido.</li>
                <li>• Cualquier cambio (punto/horario/modalidad) debe solicitarse con 1–2 días de anticipación y está sujeto a disponibilidad.</li>
                <li>• Una vez organizada la logística, no es posible realizar cambios.</li>
                <li>• Si el cambio no es posible, se mantiene la entrega originalmente coordinada.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-black/5 p-6">
            <p className="text-sm font-semibold text-ink">
              Nota
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Al ser trabajos artesanales y personalizados, coordinamos expectativas desde el inicio.
              Si tienes dudas antes de confirmar, escríbenos y te ayudamos a elegir la mejor opción.
            </p>
          </div>
        </div>
      </section>

      <SimpleCta />
    </main>
  )
}