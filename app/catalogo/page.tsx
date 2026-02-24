import { whatsappHref } from '@/shared/lib/utils'
import { getAllCategories } from '@/shared/lib/catalog/categories'
import { getAllProducts } from '@/shared/lib/catalog/products'
import { ProductCard } from '@/shared/ui/components/product/ProductCard'
import { WhatsappIcon } from '@/shared/ui/icons'

export default function CatalogPage() {
  const categories = getAllCategories()
  const products = getAllProducts()

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

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button className="shrink-0 rounded-full bg-primary text-white px-4 py-2 text-sm">
              Todas
            </button>

            {categories.map(c => (
              <button
                key={c.id}
                className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ink hover:bg-black/5"
              >
                {c.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="grid gap-6 grid-cols-responsive">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
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