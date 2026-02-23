import Link from 'next/link'
import { whatsappHref } from '@/shared/lib/utils'
import { MapPin, Clock, Truck, ArrowRight, HelpCircle } from 'lucide-react'
import { WhatsappIcon } from '../../icons'

export function DeliveryStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink/70 border border-black/10">
              <MapPin size={14} strokeWidth={1.8} />
              Lima Metropolitana
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink/70 border border-black/10">
              <Truck size={14} strokeWidth={1.8} />
              2 puntos gratuitos
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink/70 border border-black/10">
              <Clock size={14} strokeWidth={1.8} />
              Tolerancia 15 min
            </span>
          </div>

          <h2 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
            Entregas coordinadas en Lima
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-ink/70 md:text-base">
            Coordinamos contigo el punto y horario de entrega. También podemos enviar por
            motorizado externo según tu zona.
          </p>

          <div className="mt-6 text-xs flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink border border-black/10 hover:bg-black/5"
            >
              <HelpCircle size={18} strokeWidth={1.8} />
              Preguntas frecuentes
              <ArrowRight size={16} />
            </Link>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
            >
              <WhatsappIcon />
              Coordinar por WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}