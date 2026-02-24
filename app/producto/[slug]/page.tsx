import { getProductBySlug } from '@/shared/lib/catalog/products'
import { ProductDetailView } from '@/shared/ui/components/product/ProductDetailPage'
import { redirect } from 'next/navigation'


export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const product = getProductBySlug(slug)

  if(!product) {
    return redirect('/catalogo')
  }

  return <ProductDetailView product={product} />
}