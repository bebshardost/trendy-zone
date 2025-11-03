import Link from 'next/link'
import CountdownTimer from '@/components/ui/CountdownTimer'

export default function UrgencySection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-coral-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Winter Won't Wait.<br />
          <span className="text-accent-gold-400">Neither Should You.</span>
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our best-selling pieces are flying off the shelves. 
          <span className="font-bold block mt-2">
            Don't regret missing out when the chill sets in.
          </span>
        </p>

        <CountdownTimer />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/flash-sale"
            className="bg-white text-primary-500 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            🎁 Shop Flash Sale
          </Link>
          <Link 
            href="/best-sellers"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300"
          >
            See Best Sellers
          </Link>
        </div>
      </div>
    </section>
  )
}