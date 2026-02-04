import { BadgeCheck, PackageOpen, ShieldAlert } from 'lucide-react'

export function LineComparison() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            Hecho a pedido vs En stock
          </h2>
          <p className="mt-2 text-sm text-ink/70 md:text-base">
            Te contamos la diferencia para que elijas con expectativas claras
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BadgeCheck size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    Personalizados (hechos a pedido)
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">
                    Artesanales, con tiempo de producción acordado
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-ink/70">
                Personlizado
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Se trabaja con una referencia general, sin garantizar réplicas exactas
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Se inicia con <span className="font-semibold text-ink">50% de adelanto</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Una vez iniciado, no se aceptan cambios de diseño ni cancelaciones
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                No hay devoluciones por gusto personal al ser un trabajo personalizado
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-black/5 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-ink/60">
                  <ShieldAlert size={18} strokeWidth={1.8} />
                </div>
                <p className="text-xs leading-relaxed text-ink/70">
                  Recomendación: agenda tu pedido con anticipación si lo necesitas para una fecha especial
                </p>
              </div>
            </div>

            <div className="mt-5 h-1 w-full rounded-full bg-brand-gradient opacity-25" />
          </div>

          {/* Stock */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-ink/70">
                  <PackageOpen size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    En stock (listos para entrega)
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">
                    Entrega más rápida, disponibilidad limitada
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-ink/70">
                Limitado
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
                Se entrega tal como se muestra en las fotos
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
                Confirmamos disponibilidad por WhatsApp antes de coordinar
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
                Coordinamos punto de entrega o delivery según zona y horario
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
                Ideal para regalos de último momento o entregas rápidas
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-black/5 p-4">
              <p className="text-xs leading-relaxed text-ink/70">
                Tip: si buscas algo personalizado y tienes poco tiempo, cuéntanos tu fecha y te diremos opciones viables
              </p>
            </div>

            <div className="mt-5 h-1 w-full rounded-full bg-brand-gradient opacity-25" />
          </div>
        </div>
      </div>
    </section>
  )
}
