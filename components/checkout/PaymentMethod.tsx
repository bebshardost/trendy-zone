'use client'

import { useState } from 'react'
import { CreditCard, Smartphone, Wallet, Shield } from 'lucide-react'

interface PaymentMethodProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
  orderTotal: number
}

export default function PaymentMethod({ selectedMethod, onMethodChange, orderTotal }: PaymentMethodProps) {
  const [bKashNumber, setBKashNumber] = useState('')
  const [nagadNumber, setNagadNumber] = useState('')
  const [transactionId, setTransactionId] = useState('')

  const paymentMethods = [
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: <Wallet className="w-6 h-6" />,
      description: 'Pay when you receive your order',
      note: 'Available for all areas in Bangladesh',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'bkash',
      name: 'bKash',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Instant payment via bKash',
      note: 'Send money to 01XXX-XXXXXX',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 'nagad',
      name: 'Nagad',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Instant payment via Nagad',
      note: 'Send money to 01XXX-XXXXXX',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'bkash':
        return (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-4">
            <h4 className="font-semibold text-neutral-800 mb-4">bKash Payment Instructions</h4>
            <div className="space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold">1.</span>
                <span>Go to your bKash app or dial *247#</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">2.</span>
                <span>Send money to: <strong>01XXX-XXXXXX</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">3.</span>
                <span>Amount: <strong>৳{orderTotal}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">4.</span>
                <span>Enter reference: <strong>ORDER123</strong></span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Your bKash Number *
                </label>
                <input
                  type="tel"
                  value={bKashNumber}
                  onChange={(e) => setBKashNumber(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="01XXX-XXXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Transaction ID *
                </label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter bKash transaction ID"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 'nagad':
        return (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-4">
            <h4 className="font-semibold text-neutral-800 mb-4">Nagad Payment Instructions</h4>
            <div className="space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold">1.</span>
                <span>Go to your Nagad app or dial *167#</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">2.</span>
                <span>Send money to: <strong>01XXX-XXXXXX</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">3.</span>
                <span>Amount: <strong>৳{orderTotal}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">4.</span>
                <span>Enter reference: <strong>ORDER123</strong></span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Your Nagad Number *
                </label>
                <input
                  type="tel"
                  value={nagadNumber}
                  onChange={(e) => setNagadNumber(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="01XXX-XXXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Transaction ID *
                </label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter Nagad transaction ID"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 'cod':
        return (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-500" />
              <div>
                <h4 className="font-semibold text-neutral-800">Cash on Delivery</h4>
                <p className="text-sm text-neutral-600 mt-1">
                  Pay <strong>৳{orderTotal}</strong> when you receive your order
                </p>
              </div>
            </div>
            <div className="mt-3 text-xs text-neutral-500">
              * Please keep exact change ready for the delivery person
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-primary-500" />
        <h2 className="text-2xl font-black text-neutral-800">Payment Method</h2>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id}>
            <button
              type="button"
              onClick={() => onMethodChange(method.id)}
              className={`w-full p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                selectedMethod === method.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-300 hover:border-primary-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800">{method.name}</div>
                    <div className="text-sm text-neutral-600 mt-1">{method.description}</div>
                    <div className="text-xs text-neutral-500 mt-1">{method.note}</div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 ${
                  selectedMethod === method.id 
                    ? 'bg-primary-500 border-primary-500' 
                    : 'border-neutral-300'
                }`}>
                  {selectedMethod === method.id && (
                    <div className="w-full h-full rounded-full bg-white scale-50" />
                  )}
                </div>
              </div>
            </button>

            {selectedMethod === method.id && renderPaymentForm()}
          </div>
        ))}
      </div>

      {/* Security Notice */}
      <div className="mt-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-green-500" />
          <div className="text-sm text-neutral-700">
            <strong>Secure Payment:</strong> Your payment information is encrypted and secure. 
            We never share your details with third parties.
          </div>
        </div>
      </div>
    </div>
  )
}