import CategoryHero from '@/components/layout/CategoryHero'
import ProductGrid from '@/components/products/ProductGrid'
import { shoes, getCategoryStats } from '@/data/products-data'

export default function ShoesPage() {
  const stats = getCategoryStats(shoes)

  return (
    <>
      <CategoryHero
        title="Shoes & Footwear"
        subtitle="Complete your look with footwear that speaks volumes. Comfort meets style for the urban explorer."
        stats={stats}
        badgeText="TRENDING NOW"
      />
      <ProductGrid products={shoes} category="shoes" />
    </>
  )
}