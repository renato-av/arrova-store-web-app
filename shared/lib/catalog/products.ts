import products from '@/shared/data/products.json'

export type Product = {
  id: number
  slug: string
  name: string
  subtitle?: string
  description?: string
  featured: boolean
  categoryId: number
  tagIds: number[]
  available: boolean
  price: {
    type: 'fixed' | 'range'
    currency: string
    amount?: number
    min?: number
    max?: number
    note?: string
  }
  payment?: {
    depositPercent?: number
    balanceOnDelivery?: boolean
  }
  fulfillment?: {
    productionTime?: { minDays?: number; maxDays?: number }
    deliveryArea?: string
    deliveryMethods?: ('punto_entrega' | 'delivery_coord')[]
    deliveryNotes?: string
  }
  policies?: {
    noCancellationsAfterStart?: boolean
    noDesignChangesAfterStart?: boolean
    noReturnsForPreference?: boolean
    disclaimer?: string
  }
  images: { src: string; alt: string; isCover?: boolean }[]
  contact?: { whatsappMessage?: string }
}

export function getAllProducts() {
  return products as Product[]
}

export function getAvailableProducts() {
  return getAllProducts().filter(p => p.available)
}

export function filterProducts(params: { categoryId?: number }) {
  const { categoryId } = params
  return getAvailableProducts().filter(p => {
    if (categoryId && p.categoryId !== categoryId) return false
    return true
  })
}

export function getFeaturedProducts(limit = 6): Product[] {
  return getAvailableProducts().filter(p => p.featured).slice(0, limit)
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAvailableProducts().find(p => p.slug === slug)
}

export function getCoverImage(product: Product) {
  return product.images.find(img => img.isCover) ?? product.images[0]
}

export function formatPrice(product: Product) {
  const { price } = product

  if (price.type === 'fixed' && price.amount) return `S/ ${price.amount}`
  if (price.type === 'range' && price.min && price.max) return `S/ ${price.min}`
  return 'Consultar precio'
}

export function pricePrefix(product: Product) {
  return product.price.type === 'range' ? 'Desde ' : ''
}

export function productionTimeLabel(product: Product) {
  const t = product.fulfillment?.productionTime

  if (!t?.minDays && !t?.maxDays) return null
  if (t.minDays && t.maxDays) return `${t.minDays}–${t.maxDays} días`
  if (t.minDays) return `Desde ${t.minDays} días`
  if (t.maxDays) return `Hasta ${t.maxDays} días`
  return null
}


function intersectCount(a: number[], b: number[]) {
  const setB = new Set(b)
  let count = 0
  for (const x of a) if (setB.has(x)) count++
  return count
}

export function getRelatedProducts(
  current: Product,
  limit = 6
) {

  const all = getAvailableProducts()
  const candidates = all
    .filter(p => p.slug !== current.slug)

  // 1) Por tags (principal)
  const scored = candidates
    .map(p => ({ p, score: intersectCount(current.tagIds, p.tagIds) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)

  const byTags = scored.map(x => x.p).slice(0, limit)

  if (byTags.length >= Math.min(limit, 3)) return byTags

  // 2) Fallback por categoría (si faltan)
  const byCategory = candidates
    .filter(p => p.categoryId === current.categoryId)
    .filter(p => !byTags.some(x => x.id === p.id))
    .slice(0, limit - byTags.length)

  return [...byTags, ...byCategory].slice(0, limit)
}