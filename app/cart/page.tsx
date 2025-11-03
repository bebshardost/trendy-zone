'use client'

import { useCartStore } from '@/store/cart-store'
import { CartItem, CartSummary, EmptyCart } from '@/components/cart'
import { ArrowLeft, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  const { items } = useCartStore()

  if (items.length === 0) {
    return <EmptyCart />
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              href="/categories/hoodies"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold mb-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-neutral-800">
              Your Shopping Cart
            </h1>
            <p className="text-neutral-600 mt-2">
              {totalItems} amazing winter pieces waiting for you
            </p>
          </div>

          {/* Social Proof */}
          <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Zap className="w-4 h-4 text-accent-gold-400" />
            <span className="text-sm font-medium">
              {items.filter(item => item.soldCount > 200).length} hot items in your cart! 🔥
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            {/* Trust Banner */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-coral-500 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-black mb-2">
                You're Getting the Best of Bangladeshi Winter Fashion! ❄️
              </h3>
              <p className="text-white/90">
                Join 5,000+ satisfied customers who trusted us with their winter wardrobe
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary items={items} />
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-neutral-800 mb-6">
            Complete Your Winter Look 🌟
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestedItems.map((item, index) => (
              <Link 
                key={index}
                href={`/products/${item.id}`}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <p className="font-medium text-neutral-700 group-hover:text-primary-500 transition-colors">
                  {item.name}
                </p>
                <p className="text-sm text-neutral-500">{item.price}</p>
                <div className="text-xs text-accent-gold-400 font-medium mt-1">
                  {item.badge}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const suggestedItems = [
  { id: 7, emoji: "🧦", name: "Winter Socks", price: "৳299", badge: "POPULAR" },
  { id: 8, emoji: "🧤", name: "Style Gloves", price: "৳499", badge: "NEW" },
  { id: 9, emoji: "🎒", name: "Urban Backpack", price: "৳1,999", badge: "TRENDING" },
  { id: 10, emoji: "🧢", name: "Beanie Hat", price: "৳399", badge: "HOT" }
]