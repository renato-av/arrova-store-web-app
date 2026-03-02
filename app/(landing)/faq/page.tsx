import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { whatsappHref } from '@/shared/lib/utils'
import { WhatsappIcon } from '@/shared/ui/icons'
import { FAQ } from '@/shared/ui/components/faq/FAQ'
import { SimpleCta } from '@/shared/ui/components/call-to-action/SimpleCta'

export default function FaqPage() {
  return (
    <main >
      <section className="border-b border-black/5 px-4 py-12 md:py-16">

        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
          <HelpCircle size={14} strokeWidth={1.8} className="text-primary" />
          Resolvemos las dudas más comunes
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Preguntas frecuentes
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base">
          Aquí encontrarás información sobre pedidos, pagos, tiempos y entregas. Si tu duda no
          está aquí, escríbenos por WhatsApp y te ayudamos.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
          >
            <WhatsappIcon />
            Preguntar por WhatsApp
            <ArrowRight size={16} />
          </a>

          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5"
          >
            Ver ideas del catálogo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className='px-4 py-12 md:py-16'>
        <FAQ />
      </section>

      <SimpleCta />
    </main>
  )
}