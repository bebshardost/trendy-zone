'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Phone,
  MapPin
} from 'lucide-react'
import { useCartStore } from '@/store/cart-store'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { items } = useCartStore()

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+880 1XXX-XXXXXX</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Free delivery across Dhaka, CTG & Sylhet</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/track-order" className="hover:text-accent-gold-400 transition-colors">
              Track Order
            </Link>
            <Link href="/support" className="hover:text-accent-gold-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-coral-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TZ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-800">Trendy Zone</h1>
                <p className="text-xs text-neutral-500 -mt-1">Urban Winter Fashion</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-neutral-700 hover:text-primary-500 font-medium transition-colors">
                  Categories
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/categories/hoodies"
                    className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
                  >
                    Hoodies
                  </Link>
                  <Link
                    href="/categories/jackets"
                    className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
                  >
                    Jackets
                  </Link>
                  <Link
                    href="/categories/shoes"
                    className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
                  >
                    Shoes
                  </Link>
                </div>
              </div>
              <Link
                href="/new-arrivals"
                className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
              >
                New Arrivals
              </Link>
              <Link
                href="/sale"
                className="text-accent-coral-500 hover:text-accent-coral-600 font-medium transition-colors"
              >
                Sale
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User Account */}
              <Link
                href="/account"
                className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Shopping Cart */}
              <Link
                href="/cart"
                className="relative p-2 text-neutral-600 hover:text-primary-500 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent-coral-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartItemsCount > 9 ? '9+' : cartItemsCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary-500 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for hoodies, jackets, shoes..."
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="container mx-auto px-4 py-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-coral-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TZ</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-neutral-800">Trendy Zone</h1>
                  <p className="text-xs text-neutral-500 -mt-1">Urban Winter Fashion</p>
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              <Link
                href="/"
                className="block py-3 text-lg font-medium text-neutral-700 border-b border-neutral-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="py-3 border-b border-neutral-200">
                <h3 className="text-lg font-medium text-neutral-700 mb-3">Categories</h3>
                <div className="space-y-2 pl-4">
                  <Link
                    href="/hoodies"
                    className="block py-2 text-neutral-600 hover:text-primary-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    👕 Hoodies & Sweatshirts
                  </Link>
                  <Link
                    href="/jackets"
                    className="block py-2 text-neutral-600 hover:text-primary-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🧥 Jackets & Coats
                  </Link>
                  <Link
                    href="/shoes"
                    className="block py-2 text-neutral-600 hover:text-primary-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    👟 Shoes & Footwear
                  </Link>
                </div>
              </div>

              <Link
                href="/new-arrivals"
                className="block py-3 text-lg font-medium text-neutral-700 border-b border-neutral-200"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>

              <Link
                href="/sale"
                className="block py-3 text-lg font-medium text-accent-coral-500 border-b border-neutral-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sale
              </Link>

              {/* Mobile Actions */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                <Link
                  href="/account"
                  className="flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>

                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                  {cartItemsCount > 0 && (
                    <span className="bg-accent-coral-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium absolute -top-2 -right-2">
                      {cartItemsCount > 9 ? '9+' : cartItemsCount}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}