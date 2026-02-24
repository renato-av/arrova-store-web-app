import { ArrowRight, Sparkles } from 'lucide-react'
import { WhatsappIcon } from '@/shared/ui/icons'
import { whatsappHref } from '@/shared/lib/utils'
import Link from 'next/link'

export function AboutUsHero() {
  return (
    <section className="border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
          <Sparkles size={14} strokeWidth={1.8} className="text-primary" />
          Hecho a mano • Hecho a pedido • Atención directa
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Regalos con intención, hechos con calma y detalle
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base">
          En Arrova Store creamos piezas artesanales personalizadas para momentos especiales.
          Trabajamos a pedido y coordinamos contigo cada detalle por WhatsApp: diseño, tiempos y entrega en Lima.
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
            <ArrowRight size={16} />
          </a>

          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5"
          >
            Ver ideas
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}