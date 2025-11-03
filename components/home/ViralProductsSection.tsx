import Image from 'next/image'
import Link from 'next/link'
import { Users, Zap } from 'lucide-react'
import { viralProducts } from '@/data/home-data'

export default function ViralProductsSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header with Social Proof */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            VIRAL ON SOCIAL MEDIA
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-800 mb-4">
            Worn by <span className="text-primary-500">Influencers</span><br />
            Loved by <span className="text-accent-coral-500">Everyone</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            These pieces broke the internet. Don't be the last one to own them.
          </p>
        </div>

        {/* Viral Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {viralProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Social Proof Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-primary-500" />
                  <span className="text-xs font-bold">{product.soldCount}+ sold</span>
                </div>
              </div>
              
              {/* Instagram Style Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-3 py-1 flex items-center gap-1">
                  <span className="text-xs font-bold">📸 TRENDING</span>
                </div>
              </div>

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    href={`/products/${product.id}`}
                    className="bg-white text-neutral-800 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Shop This Look
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-neutral-800 mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary-500">৳{product.price}</span>
                  <span className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                    {product.rating} ⭐
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}