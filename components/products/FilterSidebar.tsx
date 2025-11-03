'use client'

import { useState } from 'react'
import { X, Sliders } from 'lucide-react'

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  category: string
}

export default function FilterSidebar({ isOpen, onClose, category }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  const colors = ['Black', 'White', 'Navy', 'Grey', 'Burgundy', 'Olive']

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-64 bg-white lg:bg-transparent z-50 lg:z-auto transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible bg-white lg:bg-transparent p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="text-lg font-bold text-neutral-800 flex items-center gap-2">
              <Sliders className="w-5 h-5" />
              Filters
            </h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Price Range */}
            <div>
              <h4 className="font-bold text-neutral-800 mb-4">Price Range</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>৳{priceRange[0]}</span>
                  <span>৳{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500"
                />
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="font-bold text-neutral-800 mb-4">Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-all duration-200 ${
                      selectedSizes.includes(size)
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-primary-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="font-bold text-neutral-800 mb-4">Colors</h4>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`px-4 py-2 border rounded-lg transition-all duration-200 ${
                      selectedColors.includes(color)
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-primary-500'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Filters */}
            <div>
              <h4 className="font-bold text-neutral-800 mb-4">Popular</h4>
              <div className="space-y-2">
                {['Best Sellers', 'New Arrivals', 'Under ৳2000', '4+ Stars'].map((filter) => (
                  <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-primary-500 rounded border-neutral-300 focus:ring-primary-500" />
                    <span className="text-neutral-700 group-hover:text-primary-500 transition-colors">
                      {filter}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-neutral-200">
              <button className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                Apply Filters
              </button>
              <button className="flex-1 border border-neutral-300 text-neutral-700 py-3 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-colors">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}