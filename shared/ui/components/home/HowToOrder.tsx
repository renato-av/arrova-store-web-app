import { ORDER_STEPS } from '@/shared/lib/constants'

export function HowToOrder() {
  return (
    <section className="bg-white scroll-mt-12" id='instrucciones'>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            Cómo pedir
          </h2>
          <p className="mt-2 text-sm text-ink/70 md:text-base">
            Atención directa para que tu pedido salga tal como lo esperas
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

                  <span className="text-sm font-semibold text-ink/30">
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
