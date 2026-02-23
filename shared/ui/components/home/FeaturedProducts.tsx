import Link from 'next/link'
import { ProductCard } from '@/shared/ui/components/product/ProductCard'
import type { Product } from '@/shared/lib/catalog/products'
import { ArrowRight, ShoppingBag } from 'lucide-react'

type Props = {
  products: Product[]
}

export function FeaturedProducts({ products }: Props) {
  if (products.length === 0) return null

  return (
    <section className="bg-white scroll-mt-12" id='destacados'>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl inline-flex items-center gap-x-2">
              <ShoppingBag className="text-primary" />
              Productos destacados
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Algunos de los favoritos de nuestros clientes.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:opacity-90"
          >
            Ver catálogo
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/catalogo"
            className="inline-flex text-sm font-medium text-primary hover:opacity-90"
          >
            Ver catálogo
            <ArrowRight size={20}/>
          </Link>
        </div>
      </div>
    </section>
  )
}
