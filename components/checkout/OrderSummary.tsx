'use client'

import Image from 'next/image'
import { Product } from '@/types/home'
import { Truck, Shield, Clock, Package } from 'lucide-react'

interface OrderSummaryProps {
  items: (Product & { quantity: number })[]
  shippingData: any
  paymentMethod: string
}

export default function OrderSummary({ items, shippingData, paymentMethod }: OrderSummaryProps) {
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shippingCost = shippingData?.shippingMethod === 'express' ? 120 : 
                      shippingData?.city === 'dhaka' ? 0 : 60
  const total = subtotal + shippingCost

  const getDeliveryDate = () => {
    const today = new Date()
    let deliveryDays = 2
    
    if (shippingData?.city === 'dhaka') {
      deliveryDays = shippingData.shippingMethod === 'express' ? 1 : 2
    } else if (shippingData?.city === 'chittagong' || shippingData?.city === 'sylhet') {
      deliveryDays = shippingData.shippingMethod === 'express' ? 2 : 3
    } else {
      deliveryDays = shippingData.shippingMethod === 'express' ? 3 : 4
    }

    const deliveryDate = new Date(today)
    deliveryDate.setDate(today.getDate() + deliveryDays)
    return deliveryDate.toLocaleDateString('en-BD', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <h2 className="text-2xl font-black text-neutral-800 mb-6">Order Summary</h2>

      {/* Items List */}
      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-neutral-800 text-sm line-clamp-2">
                {item.name}
              </h4>
              <div className="flex items-center justify-between mt-1">
                <span className="text-neutral-600 text-sm">Qty: {item.quantity}</span>
                <span className="font-semibold text-neutral-800">
                  ৳{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-neutral-600">
          <span>Subtotal</span>
          <span>৳{subtotal.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-neutral-600">
          <span>Shipping</span>
          <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
            {shippingCost === 0 ? 'FREE' : `৳${shippingCost}`}
          </span>
        </div>

        <div className="border-t border-neutral-200 pt-3">
          <div className="flex justify-between text-lg font-black text-neutral-800">
            <span>Total</span>
            <span>৳{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      {shippingData?.city && (
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Truck className="w-5 h-5 text-primary-500" />
            <div className="font-semibold text-neutral-800">Estimated Delivery</div>
          </div>
          <div className="text-sm text-neutral-700">
            Your order will be delivered by <strong>{getDeliveryDate()}</strong>
          </div>
        </div>
      )}

      {/* Trust Badges */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Secure SSL Encryption</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Package className="w-4 h-4 text-blue-500" />
          <span>7-Day Easy Returns</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <Clock className="w-4 h-4 text-orange-500" />
          <span>24/7 Customer Support</span>
        </div>
      </div>

      {/* Payment Method Display */}
      {paymentMethod && (
        <div className="mt-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-700">
            <strong>Payment Method:</strong> {
              paymentMethod === 'cod' ? 'Cash on Delivery' :
              paymentMethod === 'bkash' ? 'bKash' :
              paymentMethod === 'nagad' ? 'Nagad' : ''
            }
          </div>
        </div>
      )}
    </div>
  )
}