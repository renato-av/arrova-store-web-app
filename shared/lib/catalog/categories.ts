import categories from '@/shared/data/categories.json'

export type Category = {
  id: number
  label: string
  slug: string
}

export function getAllCategories(): Category[] {
  return categories as Category[]
}

export function getHomeCategories(limit = 4): Category[] {
  return getAllCategories().slice(0, limit)
}
