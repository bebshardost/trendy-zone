import CategoryHero from '@/components/layout/CategoryHero'
import ProductGrid from '@/components/products/ProductGrid'
import { jackets, getCategoryStats } from '@/data/products-data'

export default function JacketsPage() {
  const stats = getCategoryStats(jackets)

  return (
    <>
      <CategoryHero
        title="Jackets & Coats"
        subtitle="Make a statement wherever you go. From sophisticated outings to casual hangouts - your style armor awaits."
        stats={stats}
        badgeText="STYLE STATEMENT"
      />
      <ProductGrid products={jackets} category="jackets" />
    </>
  )
}