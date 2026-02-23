import Link from 'next/link'
import { ArrowRight, Sparkles, CreditCard, Camera, MapPin, Clock } from 'lucide-react'
import { whatsappHref } from '@/shared/lib/utils'
import { WhatsappIcon } from '@/shared/ui/icons'

function Item({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex gap-3 items-center">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-black/10 text-primary">
        {icon}
      </span>
      {text}
    </li>
  )
}

export function FinalCTA() {
  return (
    <section className="bg-white scroll-mt-12" id="contacto">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-sm md:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gradient opacity-25 blur-2xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand-gradient opacity-20 blur-2xl" />

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
                <Sparkles size={14} strokeWidth={1.8} className="text-primary" />
                Regalos con intención • Atención directa
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                ¿Creamos tu regalo?
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                Escríbenos por WhatsApp y coordinamos contigo el diseño, el tiempo de elaboración
                y la entrega en Lima.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
                >
                  <WhatsappIcon />
                  Coordinar por WhatsApp
                </a>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-100 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-gray-100"
                >
                  Ver catálogo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl border border-gray-100 bg-gray-50 p-5 md:p-6">
              <p className="text-sm font-semibold text-ink">
                Antes de confirmar
              </p>

              <ul className="mt-4 space-y-3 text-sm text-ink/70">
                <Item icon={<CreditCard size={14} strokeWidth={1.8} />} text="Se separa con 50% de adelanto (saldo el día de la entrega)" />
                <Item icon={<Camera size={14} strokeWidth={1.8} />} text="Enviamos foto del producto terminado antes de la entrega" />
                <Item icon={<MapPin size={14} strokeWidth={1.8} />} text="2 puntos de entrega gratuitos (hora coordinada) o delivery externo" />
                <Item icon={<Clock size={14} strokeWidth={1.8} />} text="Cambios de entrega con max 2d de anticipación" />
              </ul>

              <div className="mt-5 h-1 w-full rounded-full bg-brand-gradient opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}