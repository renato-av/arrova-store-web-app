import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { categoryIconMap } from '../../icons/categoryIconst'
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
              Explora por categorías
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Encuentra regalos personalizados y productos en stock.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="hidden sm:inline-flex text-sm font-medium text-primary hover:opacity-90"
          >
            Ver todo →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = categoryIconMap[c.id]

            return (
              <Link
                key={c.id}
                href={`/catalogo?categoria=${c.id}`}
                className="group rounded-2xl border grid place-items-start border-black/10 bg-white p-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-primary group-hover:bg-primary/10">
                      {Icon && <Icon size={22} strokeWidth={1.8} />}
                    </div>

                    <div>
                      <p className="text-base font-semibold text-ink group-hover:text-primary transition-colors">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm text-ink/70">
                        Ver productos
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="mt-1 text-ink/40 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/catalogo"
            className="inline-flex text-sm font-medium text-primary hover:opacity-90"
          >
            Ver todo <ArrowLeft />
          </Link>
        </div>
      </div>
    </section>
  )
}
