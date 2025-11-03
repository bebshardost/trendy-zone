import { Product } from '@/types/home'
import { allProducts } from '@/data/products-data'
import ProductCard from './ProductCard'

interface RelatedProductsProps {
  currentProduct: Product
  category: string
}

export default function RelatedProducts({ currentProduct, category }: RelatedProductsProps) {
  // Get related products (same category, excluding current product)
  const relatedProducts = allProducts
    .filter(product => 
      product.category === category && 
      product.id !== currentProduct.id
    )
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔥 COMPLETE YOUR LOOK
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-800 mb-4">
            You Might Also <span className="text-primary-500">Love</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Customers who bought this also added these trending pieces to their cart
          </p>
        </div>

        {/* Social Proof Banner */}
        <div className="bg-gradient-to-r from-accent-gold-400 to-accent-gold-500 rounded-2xl p-6 text-center mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-bold text-lg">200+ people</span>
            </div>
            <span className="hidden md:block">•</span>
            <span className="text-lg">bought this combination last week!</span>
            <span className="hidden md:block">•</span>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
              <span className="text-sm font-bold">SAVE 15%</span>
              <span className="text-sm">on bundle</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="mt-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-black mb-4">
            Winter Bundle <span className="text-accent-gold-400">Deal! 🎁</span>
          </h3>
          <p className="text-xl text-neutral-300 mb-6 max-w-2xl mx-auto">
            Get the complete winter look and save 20% when you buy any 3 items together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-accent-gold-400 text-neutral-800 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Create Your Bundle
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-neutral-800 transition-all duration-300">
              See All Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}