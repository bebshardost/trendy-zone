import { Star, Users, Zap } from 'lucide-react'

interface CategoryHeroProps {
  title: string
  subtitle: string
  stats: {
    totalSold: number
    averageRating: number
    totalProducts: number
  }
  badgeText: string
}

export default function CategoryHero({ title, subtitle, stats, badgeText }: CategoryHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-accent-teal/10 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            {badgeText}
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-800 mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-2xl font-black text-neutral-800">{stats.totalSold}+</span>
              </div>
              <p className="text-sm text-neutral-600">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Star className="w-5 h-5 text-accent-gold-400 fill-accent-gold-400" />
                <span className="text-2xl font-black text-neutral-800">{stats.averageRating}</span>
              </div>
              <p className="text-sm text-neutral-600">Average Rating</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-black text-neutral-800 mb-2">{stats.totalProducts}</div>
              <p className="text-sm text-neutral-600">Premium Products</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
            <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">✓ 7-Day Returns</span>
            <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">✓ Free Dhaka Delivery</span>
            <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">✓ Authentic Quality</span>
          </div>
        </div>
      </div>
    </section>
  )
}