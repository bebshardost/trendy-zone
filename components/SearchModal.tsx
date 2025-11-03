'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Product } from '@/types'
import { products } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 6))
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center gap-4 p-4 border-b border-neutral-200">
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for hoodies, jackets, shoes..."
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              autoFocus
            />
            <Search className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-4 space-y-3">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-neutral-700 truncate group-hover:text-primary-500 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-sm text-neutral-500 capitalize">{product.category}</p>
                  </div>
                  <div className="text-price font-semibold">
                    ৳{product.price}
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-8 text-center">
              <p className="text-neutral-500">No products found for "{query}"</p>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-neutral-500">Start typing to search for products</p>
            </div>
          )}
        </div>

        {/* Popular Searches */}
        <div className="p-4 border-t border-neutral-200">
          <h4 className="text-sm font-medium text-neutral-600 mb-3">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            {['Hoodies', 'Jackets', 'Sneakers', 'Winter', 'Denim'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}