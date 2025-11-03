'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2, Heart } from 'lucide-react'
import { Product } from '@/types/home'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'

interface CartItemProps {
  item: Product & { quantity: number }
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(item.id)
      toast.error('Item removed from cart')
    } else {
      updateQuantity(item.id, newQuantity - item.quantity)
    }
  }

  const handleRemove = () => {
    removeItem(item.id)
    toast.error('Item removed from cart', {
      action: {
        label: 'Undo',
        onClick: () => {
          // Would implement undo logic here
        }
      }
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-100 rounded-xl overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={128}
              height={128}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Popular Badge */}
          {item.soldCount > 200 && (
            <div className="absolute -top-2 -left-2 bg-accent-gold-400 text-neutral-800 text-xs px-2 py-1 rounded-full font-bold">
              HOT
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-neutral-800 mb-2 line-clamp-2">
            {item.name}
          </h3>
          <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < Math.floor(item.rating) 
                      ? 'bg-accent-gold-400' 
                      : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-neutral-500">({item.rating})</span>
            <span className="text-xs text-primary-500 font-medium">
              {item.soldCount}+ bought
            </span>
          </div>

          {/* Price and Quantity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-neutral-100 rounded-xl px-3 py-2">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                
                <span className="font-bold text-neutral-800 min-w-8 text-center">
                  {item.quantity}
                </span>
                
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Price */}
              <div className="text-right">
                <div className="text-xl font-black text-primary-500">
                  ৳{(item.price * item.quantity).toLocaleString()}
                </div>
                {item.quantity > 1 && (
                  <div className="text-sm text-neutral-500">
                    ৳{item.price} each
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-neutral-400 hover:text-accent-coral-400 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button 
                onClick={handleRemove}
                className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Message */}
      {item.soldCount > 300 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-red-700 font-medium flex items-center gap-2">
              ⚡ Selling fast!
            </span>
            <span className="text-red-600">
              Only {Math.max(1, 10 - item.quantity)} left at this price
            </span>
          </div>
        </div>
      )}
    </div>
  )
}