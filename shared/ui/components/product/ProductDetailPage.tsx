import { ArrowLeft, ArrowRight, CreditCard, Info, Timer, Truck } from 'lucide-react'
import { whatsappHref } from '@/shared/lib/utils'
import { WhatsappIcon } from '@/shared/ui/icons'
import { formatPrice, getRelatedProducts, pricePrefix, productionTimeLabel, type Product } from '@/shared/lib/catalog/products'
import Link from 'next/link'
import ProductImagesSection from './ProductImagesSection'
import { RelatedProducts } from './RelatedProducts'

type Props = {
  product: Product
}

export function ProductDetailView({ product }: Props) {

  const deposit = product.payment?.depositPercent
  const timeLabel = productionTimeLabel(product)
  const deliveryArea = product.fulfillment?.deliveryArea
  const priceNote = product.price?.note
  const waMessage =
    product.contact?.whatsappMessage ??
    `Hola ARROVASTORE 👋 Me interesa: ${product.name}. ¿Me confirmas opciones, tiempo y precio?`

  const relatedProducts = getRelatedProducts(product, 3)

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-ink"
          >
            <ArrowLeft size={18} />
            Volver al catálogo
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ProductImagesSection images={product.images} />

          <section className="lg:pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/70">
              Hecho a pedido • Atención directa
            </div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {product.name}
            </h1>

            {product.subtitle && (
              <p className="mt-2 text-sm text-ink/70">
                {product.subtitle}
              </p>
            )}

            <div className="mt-5">
              <p className="text-lg font-semibold text-ink">
                {pricePrefix(product)}
                {formatPrice(product)}
              </p>

              {priceNote && (
                <p className="mt-1 flex items-start gap-2 text-sm text-ink/60">
                  <Info size={16} className="mt-0.5 shrink-0" />
                  {priceNote}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
              >
                <WhatsappIcon />
                Coordinar por WhatsApp
                <ArrowRight size={16} />
              </a>

              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5"
              >
                Ver más ideas
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {timeLabel && (
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="flex items-center gap-2 text-ink/70">
                    <Timer size={18} className="text-primary" />
                    <p className="text-xs font-medium">Tiempo</p>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-ink">{timeLabel}</p>
                </div>
              )}

              {(deposit || deposit === 0) && (
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="flex items-center gap-2 text-ink/70">
                    <CreditCard size={18} className="text-primary" />
                    <p className="text-xs font-medium">Pago</p>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-ink">{deposit}% de adelanto</p>
                </div>
              )}

              {deliveryArea && (
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="flex items-center gap-2 text-ink/70">
                    <Truck size={18} className="text-primary" />
                    <p className="text-xs font-medium">Entrega</p>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-ink">{deliveryArea}</p>
                </div>
              )}
            </div>

            {product.description && (
              <div className="mt-8">
                <h2 className="text-sm font-semibold text-ink">Sobre esta idea</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {product.description}
                </p>
              </div>
            )}


            <div className="mt-6 sm:hidden">
              <a
                href={whatsappHref(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                <WhatsappIcon />
                WhatsApp
              </a>
            </div>
          </section>
        </div>

        <section>
          <RelatedProducts products={relatedProducts} />
        </section>
      </div>
    </main>
  )
}