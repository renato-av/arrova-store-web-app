import { ArrowRight } from 'lucide-react'
import { WhatsappIcon } from '@/shared/ui/icons'
import { whatsappHref } from '@/shared/lib/utils'

export function SimpleCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-base font-semibold text-ink">
                ¿Tienes una idea o una referencia?
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Escríbenos por WhatsApp y te decimos opciones, precio estimado y tiempo de elaboración.
              </p>
            </div>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              <WhatsappIcon />
              Hablar por WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}