import { whatsappHref } from '@/shared/lib/utils'
import { getAllCategories } from '@/shared/lib/catalog/categories'
import { filterProducts } from '@/shared/lib/catalog/products'
import { ProductCard } from '@/shared/ui/components/product/ProductCard'
import { WhatsappIcon } from '@/shared/ui/icons'
import Link from 'next/link'

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string | string[] }>
}) {
  const categories = getAllCategories()
  const { categoria } = await searchParams
  const selectedCategory = categories.find(c => String(c.id) === categoria)
  const products = filterProducts({ categoryId: selectedCategory?.id })
  const categoryClassName = (active: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
      active
        ? 'border-primary bg-primary text-white'
        : 'border-black/10 bg-white text-ink hover:bg-black/5'
    }`

  return (
    <main className="bg-white">
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12 flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Explora ideas para tu regalo
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base">
            Piezas hechas a mano y personalizables. El precio puede variar según tamaño y detalles.
            Coordinamos todo por WhatsApp y entregamos en Lima.
          </p>

        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-ink/70">
              {products.length} ideas
            </p>
          </div>

          <nav aria-label="Filtrar por categoría" className="mt-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link href="/catalogo" scroll={false} aria-current={!selectedCategory ? 'page' : undefined} className={categoryClassName(!selectedCategory)}>
              Todas
            </Link>

            {categories.map(c => (
              <Link
                key={c.id}
                href={`/catalogo?categoria=${c.id}`}
                scroll={false}
                aria-current={selectedCategory?.id === c.id ? 'page' : undefined}
                className={categoryClassName(selectedCategory?.id === c.id)}
              >
                {c.label}
              </Link>
            ))}
          </nav>

        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="grid gap-6 grid-responsive">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {products.length === 0 && (
            <p className="py-8 text-center text-sm text-ink/70">
              No hay productos disponibles en esta categoría por ahora.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <p className="text-base font-semibold text-ink">
              ¿No encuentras lo que buscas?
            </p>
            <p className="mt-2 text-sm text-ink/70">
              Envíanos una referencia por WhatsApp y te decimos opciones y precio estimado.
            </p>

            <div className="mt-5">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 gap-x-2"
              >
                <WhatsappIcon />
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
