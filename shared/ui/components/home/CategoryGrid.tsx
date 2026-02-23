import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categoryIconMap } from '@/shared/ui/icons'
import { Category } from '@/shared/lib/catalog/categories'

type Props = {
  categories: Category[]
}

export function CategoryGrid({ categories }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Explora nuestras ideas
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Todas nuestras piezas se elaboran bajo pedido y coordinación previa.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="hidden items-center gap-1 sm:inline-flex text-sm font-medium text-primary hover:opacity-90"
          >
            Ver todo <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {categories.map((c) => {
            const Icon = categoryIconMap[c.id]

            return (
              <Link
                key={c.id}
                href={`/catalogo?categoria=${c.id}`}
                className="group h-full min-h-21 rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-full items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/5 text-primary group-hover:bg-primary/10">
                      {Icon && <Icon size={22} strokeWidth={1.8} />}
                    </div>

                    <div className="min-w-0" title={c.label}>
                      <p className="truncate text-base font-semibold text-ink transition-colors group-hover:text-primary">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm text-ink/70">
                        Ver ideas
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-ink/40 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-90"
          >
            Ver todo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}