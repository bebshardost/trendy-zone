'use client'

import { useState } from 'react'
import { Product } from '@/types/home'
import ProductCard from './ProductCard'
import FilterSidebar from './FilterSidebar'
import { Filter, Grid, List } from 'lucide-react'

interface ProductGridProps {
  products: Product[]
  category: string
}

type ViewMode = 'grid' | 'list'
type SortOption = 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating'

export default function ProductGrid({ products, category }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('popular')
  const [showFilters, setShowFilters] = useState(false)

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.soldCount - a.soldCount
      case 'newest':
        return b.id - a.id
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black text-neutral-800">
              Showing {sortedProducts.length} Products
            </h2>
            <p className="text-neutral-600">Curated for Bangladeshi winter fashion</p>
          </div>

          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-primary-500 text-white' 
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-primary-500 text-white' 
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Options */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-white border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar 
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
            category={category}
          />

          {/* Products Grid */}
          <div className={`flex-1 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }`}>
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
              />
            ))}
          </div>
        </div>

        {/* Load More */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  )
}