import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkle } from 'lucide-react'
import { Product } from '@/shared/lib/catalog/products'

type Props = { product: Product }

function getCoverImage(product: Product) {
  return product.images.find(img => img.isCover) ?? product.images[0]
}

function formatPrice(product: Product) {
  const { price } = product

  if (price.type === 'fixed' && price.amount) return `S/ ${price.amount}`
  if (price.type === 'range' && price.min && price.max) return `S/ ${price.min}`
  return 'Consultar precio'
}

function pricePrefix(product: Product) {
  return product.price.type === 'range' ? 'Desde ' : ''
}

export function ProductCard({ product }: Props) {
  const image = getCoverImage(product)

  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-black/5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink shadow-sm ring-1 ring-black/10">
              Ver detalles <ArrowRight size={16} />
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[15px] font-medium text-ink leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/5 text-ink/45 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
              <Sparkle size={14} strokeWidth={2} />
            </span>
          </div>

          <p className="text-sm text-ink">
            {pricePrefix(product)}
            <span>{formatPrice(product)}</span>
          </p>
        </div>
      </Link>
    </article>
  )
}