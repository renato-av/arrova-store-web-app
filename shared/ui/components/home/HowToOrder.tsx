import { ORDER_STEPS } from '@/shared/lib/constants'

export function HowToOrder() {
  return (
    <section className="bg-white scroll-mt-12" id="instrucciones">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Atención personalizada • Coordinación directa
          </div>

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink md:text-2xl">
            Cómo trabajamos tu pedido
          </h2>

          <p className="mt-2 text-sm text-ink/70 md:text-base">
            Cada pedido se coordina previamente para definir detalles, tiempos y
            entrega. Así aseguramos un resultado cuidado y alineado a lo que deseas.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ORDER_STEPS.map(step => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-primary">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-ink/60">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-ink">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {step.description}
                </p>

                <div className="mt-4 rounded-xl bg-black/5 px-3 py-2 text-xs text-ink/70">
                  {step.note}
                </div>

                <div className="mt-5 h-1 w-full rounded-full bg-brand-gradient opacity-25" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}