// store/cart-store.ts - Updated
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartStore, Product } from '@/types'

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const { items } = get()
        const existingItem = items.find(item => item.id === product.id)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ items: [...items, { ...product, quantity: 1, inCart: true }] })
        }
      },
      removeItem: (productId: number) => {
        set({ items: get().items.filter(item => item.id !== productId) })
      },
      updateQuantity: (productId: number, quantity: number) => {
        if (quantity < 1) {
          get().removeItem(productId)
          return
        }
        
        set({
          items: get().items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        })
      },
      clearCart: () => set({ items: [] }),
      // New method to get cart total
      getCartTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      // New method to get total items count
      getTotalItems: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.quantity, 0)
      }
    }),
    {
      name: 'trendy-zone-cart',
      // Only persist the items array
      partialize: (state) => ({ items: state.items })
    }
  )
)