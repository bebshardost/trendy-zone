export interface Product {
  id: number
  name: string
  imageUrl: string
  description: string
  price: number
  uniqueCode: string
  quantity: number
  inCart: boolean
  category: 'hoodies' | 'jackets' | 'shoes'
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}