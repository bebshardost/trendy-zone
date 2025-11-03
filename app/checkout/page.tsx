'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'
import { OrderSummary, PaymentMethod, ShippingForm, ShippingData } from '@/components/checkout'
import { ArrowLeft, Shield, Lock } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCartStore()
  const [shippingData, setShippingData] = useState<ShippingData | null>(null)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-neutral-800 mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 mb-8">Add some amazing winter pieces to your cart first!</p>
          <Link 
            href="/categories/hoodies"
            className="bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shippingCost = shippingData?.shippingMethod === 'express' ? 120 : 
                      shippingData?.city === 'dhaka' ? 0 : 60
  const total = subtotal + shippingCost

  const handlePlaceOrder = async () => {
    if (!shippingData?.fullName || !shippingData.phone || !shippingData.address) {
      toast.error('Please fill in all required shipping information')
      return
    }

    if (!paymentMethod) {
      toast.error('Please select a payment method')
      return
    }

    setIsProcessing(true)

    // Simulate order processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Generate order ID
      const orderId = 'TZ' + Date.now().toString().slice(-6)
      
      // Clear cart
      clearCart()
      
      // Redirect to success page with order details
      router.push(`/checkout/success?orderId=${orderId}&total=${total}&payment=${paymentMethod}`)
      
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = shippingData?.fullName && shippingData.phone && shippingData.address && paymentMethod

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              href="/cart"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold mb-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-neutral-800">
              Checkout
            </h1>
            <p className="text-neutral-600 mt-2">
              Complete your order in just a few steps
            </p>
          </div>

          {/* Security Badge */}
          <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Lock className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Forms */}
          <div className="lg:col-span-2 space-y-6">
            <ShippingForm onFormUpdate={setShippingData} />
            <PaymentMethod 
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
              orderTotal={total}
            />

            {/* Place Order Button */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <button
                onClick={handlePlaceOrder}
                disabled={!isFormValid || isProcessing}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-coral-500 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-lg relative overflow-hidden"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Your Order...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Place Order - ৳{total.toLocaleString()}
                  </div>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-neutral-500">
                <Lock className="w-4 h-4 text-green-500" />
                Your payment information is secure and encrypted
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary 
              items={items}
              shippingData={shippingData}
              paymentMethod={paymentMethod}
            />
          </div>
        </div>
      </div>
    </div>
  )
}