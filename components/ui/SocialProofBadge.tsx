import { Star } from 'lucide-react'

interface SocialProofBadgeProps {
  customerCount?: number
  todaySales?: number
}

export default function SocialProofBadge({ 
  customerCount = 5000, 
  todaySales = 200 
}: SocialProofBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent-gold-400 text-accent-gold-400" />
        ))}
      </div>
      <span className="text-sm font-semibold text-neutral-700">
        {customerCount.toLocaleString()}+ Happy Bangladeshi Customers
      </span>
    </div>
  )
}