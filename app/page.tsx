import { getHomeCategories } from '@/shared/lib/catalog/categories'
import { getFeaturedProducts } from '@/shared/lib/catalog/products'
import { CategoryGrid, FeaturedProducts, Hero, HowToOrder, DeliveryStrip, FinalCTA, BeforeYouOrder } from '@/shared/ui/components/home'


export default function Home() {
  const categories = getHomeCategories(4)
  const featuredProducts = getFeaturedProducts(6)

  return (
    <>
      <Hero />
      <HowToOrder />

      <BeforeYouOrder />

      <CategoryGrid categories={categories} />
      <FeaturedProducts products={featuredProducts} />

      <DeliveryStrip />
      <FinalCTA />
    </>
  )
}
