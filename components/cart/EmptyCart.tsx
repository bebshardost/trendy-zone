import Link from 'next/link'
import { ShoppingBag, ArrowRight, Zap } from 'lucide-react'

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-teal/10 flex items-center justify-center py-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Animated Icon */}
        <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <ShoppingBag className="w-16 h-16 text-primary-500" />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-black text-neutral-800 mb-6">
          Your Cart is <span className="text-primary-500">Empty</span>
        </h1>
        
        <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
          But your next favorite winter piece is waiting! 
          <span className="block text-lg text-neutral-500 mt-2">
            Don't miss out on the trends everyone's talking about.
          </span>
        </p>

        {/* Social Proof */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-accent-gold-400" />
            <span className="font-semibold text-neutral-700">200+ people added items today!</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div className="bg-primary-500 h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/categories/hoodies"
            className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            Explore Trending Hoodies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/categories/jackets"
            className="group border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            Shop Jackets
          </Link>
        </div>

        {/* Popular Items Preview */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">
            Popular Right Now 🔥
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularItems.map((item, index) => (
              <Link 
                key={index}
                href={`/products/${item.id}`}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <p className="text-sm font-medium text-neutral-700 group-hover:text-primary-500 transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const popularItems = [
  { id: 1, emoji: "👕", name: "Dhaka Hoodie", price: "৳1,899" },
  { id: 2, emoji: "🧥", name: "Denim Jacket", price: "৳3,499" },
  { id: 3, emoji: "👟", name: "Campus Sneakers", price: "৳2,499" },
  { id: 4, emoji: "🛍️", name: "Winter Bundle", price: "৳6,999" }
]