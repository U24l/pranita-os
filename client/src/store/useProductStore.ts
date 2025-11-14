import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  price: number
  stock: number
  category: string
}

interface ProductStore {
  products: Product[]
  addProduct: (p: Omit<Product, 'id'>) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  deleteProduct: (id: string) => void
}

const sample: Product[] = [
  { id: '1', name: 'Neon T-Shirt', price: 25, stock: 50, category: 'Clothing' },
  { id: '2', name: 'Glow Sticker', price: 5, stock: 3, category: 'Accessories' },
]

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: sample,
      addProduct: (p) => set((s) => ({ products: [...s.products, { ...p, id: Date.now().toString() }] })),
      updateProduct: (id, updates) => set((s) => ({ products: s.products.map(p => p.id === id ? { ...p, ...updates } : p) })),
      deleteProduct: (id) => set((s) => ({ products: s.products.filter(p => p.id !== id) })),
    }),
    { name: 'pranita-inv' }
  )
)