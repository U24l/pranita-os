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
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  deleteProduct: (id: string) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategory: string
  setSelectedCategory: (cat: string) => void
}

const sampleProducts: Product[] = [
  { id: '1', name: 'Neon T-Shirt', price: 25, stock: 50, category: 'Clothing' },
  { id: '2', name: 'Glow Sticker Pack', price: 5, stock: 3, category: 'Accessories' },
  { id: '3', name: 'Cyber Coffee Mug', price: 15, stock: 8, category: 'Kitchen' },
  { id: '4', name: 'LED Keychain', price: 8, stock: 2, category: 'Accessories' },
]

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: sampleProducts,
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, id: Date.now().toString() }],
        })),
      updateProduct: (id, updates) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
      searchTerm: '',
      setSearchTerm: (term) => set({ searchTerm: term }),
      selectedCategory: 'All',
      setSelectedCategory: (cat) => set({ selectedCategory: cat }),
    }),
    {
      name: 'pranita-inventory',
    }
  )
)