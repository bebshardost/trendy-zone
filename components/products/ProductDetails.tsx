'use client'

import { useState } from 'react'
import { Product } from '@/types/home'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'
import { 
  Star, 
  Users, 
  Truck, 
  Shield, 
  Clock, 
  Heart, 
  Share2,
  Zap 
} from 'lucide-react'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore(state => state.addItem)

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    
    toast.success('Added to cart!', {
      description: `${quantity} × ${product.name} added to your cart`,
      action: {
        label: 'View Cart',
        onClick: () => window.location.href = '/cart'
      }
    })
  }

  const handleBuyNow = () => {
    handleAddToCart()
    // In a real app, this would redirect to checkout
    setTimeout(() => {
      window.location.href = '/cart'
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            TRENDING
          </div>
          <div className="bg-accent-gold-400 text-neutral-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Zap className="w-3 h-3" />
            {product.soldCount}+ SOLD
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-neutral-800 mb-3">
          {product.name}
        </h1>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) 
                      ? 'fill-accent-gold-400 text-accent-gold-400' 
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-neutral-700">{product.rating}</span>
          </div>
          <span className="text-neutral-500">•</span>
          <div className="flex items-center gap-1 text-neutral-600">
            <Users className="w-4 h-4" />
            <span>{product.soldCount}+ bought</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="text-4xl font-black text-primary-500 mb-1">
            ৳{product.price}
          </div>
          {product.price > 2000 && (
            <div className="text-lg text-neutral-500 line-through">
              ৳{product.price + 500}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-lg text-neutral-600 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="font-bold text-neutral-800 mb-3">Select Size</h3>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-xl border-2 font-semibold transition-all duration-300 ${
                selectedSize === size
                  ? 'bg-primary-500 text-white border-primary-500 scale-110'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-primary-500 hover:scale-105'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div>
        <h3 className="font-bold text-neutral-800 mb-3">Quantity</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-neutral-100 rounded-xl px-4 py-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
            >
              -
            </button>
            
            <span className="font-bold text-neutral-800 min-w-8 text-center text-lg">
              {quantity}
            </span>
            
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
            >
              +
            </button>
          </div>

          <div className="text-lg font-semibold text-neutral-700">
            Total: ৳{(product.price * quantity).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          Add to Cart ({quantity})
        </button>
        
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-accent-gold-400 hover:bg-accent-gold-500 text-neutral-800 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Buy Now
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="flex gap-4">
        <button className="flex-1 border border-neutral-300 text-neutral-700 py-3 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center gap-2">
          <Heart className="w-5 h-5" />
          Save for Later
        </button>
        <button className="flex-1 border border-neutral-300 text-neutral-700 py-3 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>

      {/* Trust Features */}
      <div className="bg-neutral-50 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-3 text-neutral-700">
          <Truck className="w-5 h-5 text-green-500" />
          <div>
            <div className="font-semibold">Free Delivery</div>
            <div className="text-sm text-neutral-600">Across Dhaka, CTG & Sylhet</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-neutral-700">
          <Clock className="w-5 h-5 text-blue-500" />
          <div>
            <div className="font-semibold">Delivery in 2-3 Days</div>
            <div className="text-sm text-neutral-600">Order before 3PM for same-day dispatch</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-neutral-700">
          <Shield className="w-5 h-5 text-green-500" />
          <div>
            <div className="font-semibold">7-Day Easy Returns</div>
            <div className="text-sm text-neutral-600">Hassle-free returns & exchanges</div>
          </div>
        </div>
      </div>

      {/* Urgency Message */}
      {product.soldCount > 300 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-700 font-semibold">
              <Zap className="w-4 h-4" />
              Selling Fast!
            </div>
            <div className="text-red-600 text-sm">
              Only 12 left at this price
            </div>
          </div>
          <div className="w-full bg-red-200 rounded-full h-2 mt-2">
            <div className="bg-red-500 h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  )
}