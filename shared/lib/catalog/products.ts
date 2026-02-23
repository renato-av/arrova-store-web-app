import products from '@/shared/data/products.json'

export type Product = {
  id: number
  slug: string
  name: string
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
  }
  images: {
    src: string
    alt: string
    isCover?: boolean
  }[]
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
