import { Product } from '@/types/home'

export const allProducts: Product[] = [
  // Hoodies with Bangladeshi context
  {
    id: 1,
    name: "The Dhaka Hoodie - Black Edition",
    description: "The viral sensation taking campuses by storm. Premium cotton blend perfect for Bangladeshi winter.",
    price: 1899,
    soldCount: 423,
    rating: 4.9,
    imageUrl: "/images/hoodies/hoodie-1.jpg"
  },
  {
    id: 2,
    name: "Campus Comfort Hoodie - Navy",
    description: "BUET & DU students' favorite. Lightweight yet warm for our climate.",
    price: 1599,
    soldCount: 287,
    rating: 4.7,
    imageUrl: "/images/hoodies/hoodie-2.jpg"
  },
  {
    id: 3,
    name: "Urban Street Hoodie - Grey",
    description: "Seen on Dhaka's fashion influencers. Oversized fit for maximum style.",
    price: 1999,
    soldCount: 512,
    rating: 4.8,
    imageUrl: "/images/hoodies/hoodie-3.jpg"
  },
  {
    id: 4,
    name: "Winter Comfort Hoodie - Burgundy",
    description: "Perfect for Chittagong's coastal breeze. Fleece-lined for extra warmth.",
    price: 1799,
    soldCount: 198,
    rating: 4.6,
    imageUrl: "/images/hoodies/hoodie-4.jpg"
  },
  {
    id: 5,
    name: "Graphic Print Hoodie - White",
    description: "Bold designs that get noticed. Your statement piece for winter gatherings.",
    price: 1699,
    soldCount: 345,
    rating: 4.5,
    imageUrl: "/images/hoodies/hoodie-5.jpg"
  },
  {
    id: 6,
    name: "Premium Zip Hoodie - Olive",
    description: "Versatile layering piece. From university to cafe hangouts.",
    price: 2099,
    soldCount: 267,
    rating: 4.9,
    imageUrl: "/images/hoodies/hoodie-6.jpg"
  },

  // Jackets
  {
    id: 7,
    name: "The Instagram Denim Jacket",
    description: "The jacket that broke TikTok. Perfect for Sylhet's hill stations.",
    price: 3499,
    soldCount: 189,
    rating: 4.8,
    imageUrl: "/images/jackets/jacket-1.jpg"
  },
  {
    id: 8,
    name: "Urban Bomber Jacket - Black",
    description: "Street-style essential. Wind-resistant for Bangladeshi winter winds.",
    price: 2999,
    soldCount: 234,
    rating: 4.7,
    imageUrl: "/images/jackets/jacket-2.jpg"
  },
  {
    id: 9,
    name: "Premium Puffer Jacket - Navy",
    description: "Maximum warmth for minimum bulk. Ideal for northern regions.",
    price: 4499,
    soldCount: 156,
    rating: 4.9,
    imageUrl: "/images/jackets/jacket-3.jpg"
  },
  {
    id: 10,
    name: "Classic Leather Jacket - Brown",
    description: "Timeless style that never goes out of fashion. Your go-to for special occasions.",
    price: 5999,
    soldCount: 98,
    rating: 4.6,
    imageUrl: "/images/jackets/jacket-4.jpg"
  },

  // Shoes
  {
    id: 11,
    name: "Campus Sneakers - White",
    description: "The ultimate university footwear. Comfort meets style for busy campus life.",
    price: 2499,
    soldCount: 512,
    rating: 4.8,
    imageUrl: "/images/shoes/shoes-1.jpg"
  },
  {
    id: 12,
    name: "Urban Street Sneakers - Black",
    description: "Seen in Dhaka's trendiest spots. Durable for city exploration.",
    price: 2799,
    soldCount: 387,
    rating: 4.7,
    imageUrl: "/images/shoes/shoes-2.jpg"
  },
  {
    id: 13,
    name: "Winter Boots - Brown",
    description: "Ready for any adventure. From city streets to country roads.",
    price: 3299,
    soldCount: 145,
    rating: 4.9,
    imageUrl: "/images/shoes/shoes-3.jpg"
  }
]

export const hoodies = allProducts.filter(product => product.id <= 6)
export const jackets = allProducts.filter(product => product.id > 6 && product.id <= 10)
export const shoes = allProducts.filter(product => product.id > 10)

export const getCategoryStats = (products: Product[]) => {
  const totalSold = products.reduce((sum, product) => sum + product.soldCount, 0)
  const averageRating = products.reduce((sum, product) => sum + product.rating, 0) / products.length
  
  return {
    totalSold,
    averageRating: Math.round(averageRating * 10) / 10,
    totalProducts: products.length
  }
}