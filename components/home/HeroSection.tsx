import Link from 'next/link'
import { ShoppingBag, Users, Zap } from 'lucide-react'
import SocialProofBadge from '@/components/ui/SocialProofBadge'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-teal/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <SocialProofBadge />
        
        {/* Main Headline with Emotional Trigger */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-neutral-800 leading-tight">
          Winter Style That
          <span className="block bg-gradient-to-r from-primary-500 to-accent-coral-400 bg-clip-text text-transparent">
            Turns Heads
          </span>
        </h1>

        {/* Subheadline with Social Proof */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          Join <span className="font-bold text-primary-500">10,000+</span> fashion-forward Bangladeshis 
          who've upgraded their winter wardrobe. 
          <span className="block text-lg text-neutral-500 mt-2">
            Because ordinary is not an option.
          </span>
        </p>

        {/* Urgency & Social Proof */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium">200+ bought today</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-accent-gold-400" />
            <span className="text-sm font-medium">Limited winter stock</span>
          </div>
        </div>

        {/* CTA Buttons with FOMO */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/hoodies" 
            className="group relative bg-gradient-to-r from-primary-500 to-accent-coral-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <ShoppingBag className="w-5 h-5" />
            Shop The Viral Collection
            <div className="absolute -top-2 -right-2 bg-accent-gold-400 text-neutral-800 text-xs px-2 py-1 rounded-full animate-pulse">
              HOT
            </div>
          </Link>
          
          <Link 
            href="/trending" 
            className="group border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            See What's Trending →
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}