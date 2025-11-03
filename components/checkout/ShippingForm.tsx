'use client'

import { useState } from 'react'
import { MapPin, User, Phone, Home } from 'lucide-react'

interface ShippingFormProps {
  onFormUpdate: (data: ShippingData) => void
}

export interface ShippingData {
  fullName: string
  phone: string
  email: string
  address: string
  city: string
  area: string
  shippingMethod: 'standard' | 'express'
}

export default function ShippingForm({ onFormUpdate }: ShippingFormProps) {
  const [formData, setFormData] = useState<ShippingData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'dhaka',
    area: '',
    shippingMethod: 'standard'
  })

  const handleChange = (field: keyof ShippingData, value: string) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    onFormUpdate(newData)
  }

  const cities = [
    { value: 'dhaka', label: 'Dhaka', delivery: '1-2 days' },
    { value: 'chittagong', label: 'Chittagong', delivery: '2-3 days' },
    { value: 'sylhet', label: 'Sylhet', delivery: '2-3 days' },
    { value: 'khulna', label: 'Khulna', delivery: '3-4 days' },
    { value: 'rajshahi', label: 'Rajshahi', delivery: '3-4 days' },
    { value: 'other', label: 'Other Cities', delivery: '4-5 days' }
  ]

  const dhakaAreas = [
    'Dhanmondi', 'Gulshan', 'Banani', 'Uttara', 'Mirpur', 'Mohammadpur',
    'Motijheel', 'Farmgate', 'Bashundhara', 'Malibagh', 'Shantinagar'
  ]

  const chittagongAreas = [
    'Agrabad', 'GEC', 'Nasirabad', 'Kornelish', 'Chawkbazar', 'Halishahar'
  ]

  const getAreas = () => {
    switch (formData.city) {
      case 'dhaka': return dhakaAreas
      case 'chittagong': return chittagongAreas
      default: return []
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-6 h-6 text-primary-500" />
        <h2 className="text-2xl font-black text-neutral-800">Shipping Information</h2>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
              <Phone className="w-4 h-4" />
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="01XXX-XXXXXX"
              required
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
            <User className="w-4 h-4" />
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
              <MapPin className="w-4 h-4" />
              City *
            </label>
            <select
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {cities.map(city => (
                <option key={city.value} value={city.value}>
                  {city.label} ({city.delivery})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
              <MapPin className="w-4 h-4" />
              Area *
            </label>
            {getAreas().length > 0 ? (
              <select
                value={formData.area}
                onChange={(e) => handleChange('area', e.target.value)}
                className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Area</option>
                {getAreas().map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={formData.area}
                onChange={(e) => handleChange('area', e.target.value)}
                className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your area"
                required
              />
            )}
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-2">
            <Home className="w-4 h-4" />
            Full Address *
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            rows={3}
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="House #, Road #, Sector #, etc."
            required
          />
        </div>

        {/* Shipping Method */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-4">
            <MapPin className="w-4 h-4" />
            Shipping Method
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleChange('shippingMethod', 'standard')}
              className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                formData.shippingMethod === 'standard'
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-300 hover:border-primary-300'
              }`}
            >
              <div className="font-semibold text-neutral-800">Standard Delivery</div>
              <div className="text-sm text-neutral-600 mt-1">
                {formData.city === 'dhaka' ? '1-2 business days' : 
                 formData.city === 'chittagong' || formData.city === 'sylhet' ? '2-3 business days' : '3-5 business days'}
              </div>
              <div className="text-lg font-bold text-primary-500 mt-2">
                {formData.city === 'dhaka' ? 'FREE' : '৳60'}
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleChange('shippingMethod', 'express')}
              className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                formData.shippingMethod === 'express'
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-300 hover:border-primary-300'
              }`}
            >
              <div className="font-semibold text-neutral-800">Express Delivery</div>
              <div className="text-sm text-neutral-600 mt-1">
                Next day delivery (Order before 3PM)
              </div>
              <div className="text-lg font-bold text-primary-500 mt-2">৳120</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}