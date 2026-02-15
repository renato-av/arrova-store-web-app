import Link from 'next/link'
import { MapPin, Clock, Truck, ArrowRight } from 'lucide-react'

export function DeliveryStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="rounded-3xl border border-black/10 bg-black/5 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                Entregas coordinadas en Lima
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 md:text-base">
                Coordinamos contigo el punto de entrega o delivery según zona y horario.
                Antes de confirmar, te indicamos tiempos y condiciones para evitar inconvenientes.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink/70 border border-black/10">
                  <MapPin size={14} strokeWidth={1.8} />
                  Lima Metropolitana
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink/70 border border-black/10">
                  <Truck size={14} strokeWidth={1.8} />
                  Punto de entrega o delivery
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-ink/70 border border-black/10">
                  <Clock size={14} strokeWidth={1.8} />
                  Horarios coordinados
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-ink border border-black/10 hover:bg-black/5"
              >
                Preguntas frecuentes
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
              >
                Contacto
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
