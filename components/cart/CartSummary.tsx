'use client'

import { useState } from 'react'
import { Product } from '@/types/home'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'
import { Shield, Truck, Clock, Zap } from 'lucide-react'

interface CartSummaryProps {
  items: (Product & { quantity: number })[]
}

export default function CartSummary({ items }: CartSummaryProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const clearCart = useCartStore(state => state.clearCart)

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 2000 ? 0 : 100
  const total = subtotal + shipping

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Order placed successfully!', {
      description: 'Your winter fashion haul is on its way!',
      duration: 5000,
    })
    
    clearCart()
    setIsCheckingOut(false)
  }

  const popularItemsCount = items.filter(item => item.soldCount > 200).length

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
      {/* Header */}
      <h2 className="text-2xl font-black text-neutral-800 mb-6">
        Order Summary
      </h2>

      {/* Social Proof */}
      {popularItemsCount > 0 && (
        <div className="bg-accent-gold-400/20 border border-accent-gold-400 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
            <Zap className="w-4 h-4 text-accent-gold-400" />
            Great choice! {popularItemsCount} of your items are customer favorites 🔥
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-neutral-600">
          <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
          <span>৳{subtotal.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-neutral-600">
          <span>Shipping</span>
          <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
            {shipping === 0 ? 'FREE' : `৳${shipping}`}
          </span>
        </div>

        {shipping > 0 && (
          <div className="text-sm text-primary-500 font-medium">
            Add ৳{(2000 - subtotal).toLocaleString()} more for free shipping!
          </div>
        )}

        <div className="border-t border-neutral-200 pt-3">
          <div className="flex justify-between text-lg font-black text-neutral-800">
            <span>Total</span>
            <span>৳{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Truck className="w-4 h-4 text-green-500" />
          <span>Free delivery across Dhaka, CTG & Sylhet</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Clock className="w-4 h-4 text-blue-500" />
          <span>Delivery in 2-3 business days</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Shield className="w-4 h-4 text-green-500" />
          <span>7-day easy returns & exchange</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={isCheckingOut || items.length === 0}
        className="w-full bg-gradient-to-r from-primary-500 to-accent-coral-500 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-lg"
      >
        {isCheckingOut ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing Your Style...
          </div>
        ) : (
          `Proceed to Checkout - ৳${total.toLocaleString()}`
        )}
      </button>

      {/* Payment Methods */}
      <div className="mt-4 text-center">
        <p className="text-sm text-neutral-500 mb-2">We Accept</p>
        <div className="flex justify-center gap-3">
          {['bKash', 'Nagad', 'COD', 'Card'].map((method) => (
            <div key={method} className="bg-neutral-100 px-3 py-1 rounded-lg text-xs font-medium text-neutral-700">
              {method}
            </div>
          ))}
        </div>
      </div>

      {/* Urgency Message */}
      <div className="mt-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
        <div className="flex items-center gap-2 text-sm text-primary-700">
          <Zap className="w-4 h-4" />
          <span>
            <strong>100+ people</strong> are viewing similar items right now
          </span>
        </div>
      </div>
    </div>
  )
}