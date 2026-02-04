import { getHomeCategories } from '@/shared/lib/catalog/categories'
import { getFeaturedProducts } from '@/shared/lib/catalog/products'
import { CategoryGrid, FeaturedProducts, Hero, HowToOrder, LineComparison, DeliveryStrip, FinalCTA } from '@/shared/ui/components/home'


export default function Home() {
  const categories = getHomeCategories(4)
  const featuredProducts = getFeaturedProducts(6)

  return (
    <>
      <Hero />
      <CategoryGrid categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <HowToOrder />
      <LineComparison />
      <DeliveryStrip />
      <FinalCTA />
    </>
  )
}
