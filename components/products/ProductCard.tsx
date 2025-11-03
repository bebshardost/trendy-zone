'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star, Users } from 'lucide-react'
import { Product } from '@/types/home'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    addItem(product)
    toast.success('Added to cart!', {
      description: `${product.name} has been added to your cart.`,
      action: {
        label: 'View Cart',
        onClick: () => window.location.href = '/cart'
      }
    })
  }

  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
      {/* Social Proof Badges */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        {product.soldCount > 200 && (
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <Users className="w-3 h-3 text-primary-500" />
            <span className="text-xs font-bold">{product.soldCount}+ sold</span>
          </div>
        )}
        {product.rating >= 4.8 && (
          <div className="bg-accent-gold-400 text-neutral-800 rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold">TOP RATED</span>
          </div>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
        <Heart className="w-4 h-4 text-neutral-400 hover:text-accent-coral-400 transition-colors" />
      </button>

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-80 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-neutral-800 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Quick View
            </span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-black text-neutral-800 mb-2 hover:text-primary-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-neutral-600 mb-4 line-clamp-2 text-sm">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-accent-gold-400 text-accent-gold-400' 
                    : 'text-neutral-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-neutral-500">({product.rating})</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-primary-500">৳{product.price}</span>
            {product.price > 2000 && (
              <span className="text-sm text-neutral-500 line-through ml-2">
                ৳{product.price + 500}
              </span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>

        {/* Urgency Indicator */}
        {product.soldCount > 300 && (
          <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-red-700 font-medium">Selling fast!</span>
              <span className="text-red-600">Only few left</span>
            </div>
            <div className="w-full bg-red-200 rounded-full h-1 mt-1">
              <div 
                className="bg-red-500 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${Math.max(20, 100 - (product.soldCount / 10))}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}