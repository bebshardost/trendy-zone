'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Package, Truck, MessageCircle, Share2, Star } from 'lucide-react'

interface OrderDetails {
  orderId: string
  total: number
  paymentMethod: string
  estimatedDelivery: string
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    const orderId = searchParams.get('orderId')
    const total = searchParams.get('total')
    const paymentMethod = searchParams.get('payment')

    if (orderId && total) {
      // Calculate delivery date (3 days from now)
      const deliveryDate = new Date()
      deliveryDate.setDate(deliveryDate.getDate() + 3)

      setOrderDetails({
        orderId,
        total: parseInt(total),
        paymentMethod: paymentMethod || 'cod',
        estimatedDelivery: deliveryDate.toLocaleDateString('en-BD', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      })
    }
  }, [searchParams])

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading your order details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-teal/10 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-neutral-800 mb-4">
            Order <span className="text-green-500">Confirmed!</span> 🎉
          </h1>
          
          <p className="text-xl text-neutral-600 mb-2">
            Thank you for your purchase! Your winter style upgrade is on its way.
          </p>
          <p className="text-lg text-neutral-500">
            Order ID: <strong>{orderDetails.orderId}</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-black text-neutral-800 mb-6">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-neutral-600">Order Total</span>
                <span className="font-bold text-neutral-800">৳{orderDetails.total.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-neutral-600">Payment Method</span>
                <span className="font-bold text-neutral-800 capitalize">
                  {orderDetails.paymentMethod === 'cod' ? 'Cash on Delivery' : orderDetails.paymentMethod}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-neutral-600">Estimated Delivery</span>
                <span className="font-bold text-neutral-800">{orderDetails.estimatedDelivery}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-green-500" />
                <div className="text-sm text-green-700">
                  <strong>Order confirmed!</strong> We'll send you a confirmation email shortly.
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-black text-neutral-800 mb-6">What's Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">Order Processing</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    We'll start preparing your order immediately. You'll receive tracking information soon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">SMS Updates</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    We'll send you SMS updates about your order status and delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">Share Your Style</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Tag us on Instagram @trendyzonebd when you receive your order for a chance to be featured!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/categories/hoodies"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Continue Shopping
            </Link>
            
            <Link 
              href="/orders"
              className="border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
            >
              View Order Details
            </Link>
            
            <button className="border-2 border-neutral-300 text-neutral-700 hover:border-primary-500 hover:text-primary-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>

          {/* Support Info */}
          <div className="pt-8 border-t border-neutral-200">
            <p className="text-neutral-600 mb-4">
              Need help with your order? We're here for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <span className="text-neutral-600">📞 Call us: +880 1XXX-XXXXXX</span>
              <span className="text-neutral-600">💬 WhatsApp: +880 1XXX-XXXXXX</span>
              <span className="text-neutral-600">📧 Email: support@trendyzone.com</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-black text-neutral-800 mb-4">
            Join <span className="text-primary-500">5,000+</span> Happy Customers! 🌟
          </h3>
          <p className="text-neutral-600 mb-6">
            You're now part of Bangladesh's fastest growing winter fashion community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-neutral-50 rounded-xl p-4">
              <div className="text-2xl">🚚</div>
              <div>Free Delivery</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4">
              <div className="text-2xl">↩️</div>
              <div>Easy Returns</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4">
              <div className="text-2xl">🛡️</div>
              <div>Quality Guarantee</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4">
              <div className="text-2xl">💝</div>
              <div>Exclusive Deals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}