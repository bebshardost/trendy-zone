import { Product } from '@/types'

export const products: Product[] = [
  // Hoodies with Bangladeshi context
  {
    id: 1,
    name: "Classic Cotton Hoodie",
    imageUrl: "/images/hoodie-1.jpg",
    description: "Perfect for Dhaka's cool evenings. Lightweight yet cozy for our Bengali winter.",
    price: 1299,
    uniqueCode: "H001",
    quantity: 1,
    inCart: false,
    category: 'hoodies'
  },
  {
    id: 2,
    name: "Street Style Hoodie", 
    imageUrl: "/images/hoodie-2.jpg",
    description: "Make a statement in Dhaka's urban landscape. Bold designs for the fashion-forward youth.",
    price: 1499,
    uniqueCode: "H002",
    quantity: 1,
    inCart: false,
    category: 'hoodies'
  },
  // Jackets
  {
    id: 11,
    name: "Denim Jacket",
    imageUrl: "/images/jacket-1.jpg",
    description: "Versatile layer for Chittagong's coastal breeze or Sylhet's hills.",
    price: 2499,
    uniqueCode: "J001",
    quantity: 1,
    inCart: false,
    category: 'jackets'
  },
  // Shoes
  {
    id: 21,
    name: "Urban Sneakers",
    imageUrl: "/images/shoes-1.jpg",
    description: "Comfort for navigating bustling streets from Dhanmondi to Bashundhara.",
    price: 1999,
    uniqueCode: "S001",
    quantity: 1,
    inCart: false,
    category: 'shoes'
  }
]