import products from '@/shared/data/products.json'

export type Product = {
  id: number;
  slug: string;
  name: string;
  line: 'personalizado' | 'stock';
  featured: boolean;
  price: {
    type: 'fixed' | 'range';
    currency: string;
    amount?: number;
    min?: number;
    max?: number;
  };
  images: {
    src: string;
    alt: string;
    isCover?: boolean;
  }[];
};

export function getFeaturedProducts(limit = 6): Product[] {
  return (products as Product[])
    .filter((p) => p.featured)
    .slice(0, limit)
}
