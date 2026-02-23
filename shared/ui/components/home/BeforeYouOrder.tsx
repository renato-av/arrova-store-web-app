import {
  BadgeCheck,
  Clock,
  CreditCard,
  MapPin
} from 'lucide-react'
import { POLICY_ITEMS } from '@/shared/lib/constants'


export function BeforeYouOrder() {
  return (
    <section className="bg-white scroll-mt-12" id="antes-de-pedir">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink md:text-2xl inline-flex items-center gap-2">
            <BadgeCheck className="text-primary" /> Antes de pedir
          </h2>

          <p className="mt-2 text-sm text-ink/70 md:text-base">
            Para que todo salga bien desde el inicio, estas son nuestras condiciones
            de trabajo y entrega.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1">
            <MapPin size={14} className="text-ink/60" />
            2 puntos gratuitos (hora coordinada)
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1">
            <Clock size={14} className="text-ink/60" />
            Tolerancia de espera: 15 min
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1">
            <CreditCard size={14} className="text-ink/60" />
            Adelanto 50% para separar
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {POLICY_ITEMS.map(item => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="relative rounded-2xl border border-black/10 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-x-4">
                  <div className='flex-1'>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-black/5 text-primary">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className='my-3'>
                    <h3 className="text-base font-semibold text-ink">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-ink/70">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl mt-3 bg-black/5 px-3 py-2 text-xs text-ink/70">
                  {item.note}
                </div>

                <div className="h-1 w-full rounded-full bg-brand-gradient opacity-25" />
              </article>
            )
          })}
        </div>

        {/* <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-ink">
              ¿Listo para coordinar tu pedido?
            </p>
            <p className="text-sm text-ink/70">
              Te respondemos por WhatsApp y definimos detalles, tiempos y entrega.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
            >
              <WhatsappIcon className="mr-2" />
              Escribir por WhatsApp
            </a>
          </div>
        </div> */}

      </div>
    </section>
  )
}