import { Product, PsychologyPoint, SocialProofImage, CountdownItem } from '@/types/home'

export const viralProducts: Product[] = [
  {
    id: 1,
    name: "The Dhaka Hoodie",
    description: "The one everyone's talking about on TikTok",
    price: 1899,
    soldCount: 423,
    rating: 4.9,
    imageUrl: "/images/viral-hoodie.jpg"
  },
  {
    id: 2, 
    name: "Instagram Jacket",
    description: "Seen on your favorite influencers",
    price: 2999,
    soldCount: 287,
    rating: 4.8,
    imageUrl: "/images/viral-jacket.jpg"
  },
  {
    id: 3,
    name: "Campus Sneakers",
    description: "The ultimate university style statement",
    price: 2499,
    soldCount: 512,
    rating: 4.7,
    imageUrl: "/images/viral-shoes.jpg"
  }
]

export const psychologyPoints: PsychologyPoint[] = [
  {
    title: "Status Upgrade",
    description: "Wear what the cool kids are wearing. Instant social credibility."
  },
  {
    title: "Attention Magnet", 
    description: "Get noticed for your impeccable taste. Compliments guaranteed."
  },
  {
    title: "Confidence Boost",
    description: "When you look good, you feel unstoppable. Own every room."
  }
]

export const socialProofImages: SocialProofImage[] = [
  {
    url: "/images/customer-1.jpg",
    alt: "Customer wearing our hoodie",
    caption: "Rahim, DU Campus"
  },
  {
    url: "/images/customer-2.jpg", 
    alt: "Customer in our jacket",
    caption: "Tania, Instagram Influencer"
  },
  {
    url: "/images/customer-3.jpg",
    alt: "Customer with our shoes",
    caption: "Sakib, Chittagong"
  },
  {
    url: "/images/customer-4.jpg",
    alt: "Customer group photo",
    caption: "BUET Friends Circle"
  }
]

export const countdownItems: CountdownItem[] = [
  { value: "02", label: "Days" },
  { value: "12", label: "Hours" },
  { value: "45", label: "Minutes" },
  { value: "18", label: "Seconds" }
]