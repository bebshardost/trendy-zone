import CategoryHero from '@/components/layout/CategoryHero'
import ProductGrid from '@/components/products/ProductGrid'
import { hoodies, getCategoryStats } from '@/data/products-data'

export default function HoodiesPage() {
  const stats = getCategoryStats(hoodies)

  return (
    <>
      <CategoryHero
        title="Hoodies & Sweatshirts"
        subtitle="The ultimate campus and street style essentials. Designed for Bangladeshi winter comfort with maximum style impact."
        stats={stats}
        badgeText="CAMPUS FAVORITE"
      />
      <ProductGrid products={hoodies} category="hoodies" />
    </>
  )
}