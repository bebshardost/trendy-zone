export interface Product {
  id: number
  name: string
  description: string
  price: number
  soldCount: number
  rating: number
  imageUrl: string
}

export interface PsychologyPoint {
  title: string
  description: string
}

export interface SocialProofImage {
  url: string
  alt: string
  caption: string
}

export interface CountdownItem {
  value: string
  label: string
}