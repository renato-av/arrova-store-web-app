import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/shared/lib/catalog/products'

type Props = {
  product: Product
}

function getCoverImage(product: Product) {
  return product.images.find(img => img.isCover) ?? product.images[0]
}

function formatPrice(product: Product) {
  const { price } = product

  if (price.type === 'fixed' && price.amount) {
    return `S/ ${price.amount}`
  }

  if (price.type === 'range' && price.min && price.max) {
    return `S/ ${price.min} – ${price.max}`
  }

  return 'Consultar precio'
}

export function ProductCard({ product }: Props) {
  const image = getCoverImage(product)

  return (
    <article className="group rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-black/5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink shadow">
            {product.line === 'personalizado' ? 'Personalizado' : 'En stock'}
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold text-ink">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-ink/70">
            {formatPrice(product)}
          </p>

          <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Ver detalle
            <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </article>
  )
}
