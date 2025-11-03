export interface Review {
  id: number
  customerName: string
  location: string
  rating: number
  date: string
  comment: string
  verified: boolean
  likes: number
}

export const reviews: Review[] = [
  {
    id: 1,
    customerName: "Rahim Khan",
    location: "Dhaka University",
    rating: 5,
    date: "2024-01-15",
    comment: "This hoodie is absolutely fire! Got so many compliments on campus. Perfect for Bangladeshi winter.",
    verified: true,
    likes: 23
  },
  {
    id: 2,
    customerName: "Tania Ahmed",
    location: "Instagram Influencer",
    rating: 5,
    date: "2024-01-12",
    comment: "Wore this to a brand event and everyone asked where I got it from. Quality is premium!",
    verified: true,
    likes: 45
  },
  {
    id: 3,
    customerName: "Sakib Hasan",
    location: "Chittagong",
    rating: 4,
    date: "2024-01-10",
    comment: "Great fit and quality. Perfect for Chittagong's weather. Shipping was super fast!",
    verified: true,
    likes: 12
  },
  {
    id: 4,
    customerName: "Joya Akter",
    location: "BUET Campus",
    rating: 5,
    date: "2024-01-08",
    comment: "The material is so comfortable! Bought one for my boyfriend too. We're matching on campus 😊",
    verified: true,
    likes: 31
  }
]