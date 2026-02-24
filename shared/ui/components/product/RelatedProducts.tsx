import Link from 'next/link'
import { ProductCard } from '@/shared/ui/components/product/ProductCard'
import type { Product } from '@/shared/lib/catalog/products'

type Props = {
  products: Product[]
}

export function RelatedProducts({ products }: Props) {
  if (!products.length) return null

  return (
    <section className="pt-10 mt-10 border-t border-ink/10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
            Ideas similares
          </h2>
          <p className="mt-1 text-sm text-ink/70">
            Opciones parecidas por estilo o categoría.
          </p>
        </div>

        <Link
          href="/catalogo"
          className="hidden sm:inline-flex text-sm font-medium text-primary hover:opacity-90"
        >
          Ver todo →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {products.slice(0, 3).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Link
          href="/catalogo"
          className="inline-flex text-sm font-medium text-primary hover:opacity-90"
        >
          Ver todo →
        </Link>
      </div>
    </section>
  )
}