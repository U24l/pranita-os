import { useProductStore } from '../store/useProductStore'
import type { ProductItem } from '../store/useProductStore'
import { useState } from 'react'

const InventoryTable = () => {
  const { products, deleteProduct, searchTerm, selectedCategory } = useProductStore()
  const [editingId, setEditingId] = useState<string | null>(null)

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered input-primary flex-1 bg-card text-text"
          onChange={(e) => useProductStore.getState().setSearchTerm(e.target.value)}
        />
        <select
          className="select select-primary bg-card text-text"
          onChange={(e) => useProductStore.getState().setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra bg-card-neon">
          <thead>
            <tr className="text-accent">
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-primary/10 transition-colors">
                <td className="font-medium">{p.name}</td>
                <td>${p.price}</td>
                <td>
                  <span className={`badge ${p.stock <= 5 ? 'badge-error' : 'badge-success'} badge-outline`}>
                    {p.stock}
                  </span>
                </td>
                <td>
                  <span className="badge badge-ghost">{p.category}</span>
                </td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-ghost btn-xs text-accent"
                    onClick={() => setEditingId(p.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-ghost btn-xs text-error"
                    onClick={() => deleteProduct(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingId && <ProductModal product={products.find(p => p.id === editingId)!} onClose={() => setEditingId(null)} />}
    </div>
  )
}

export default InventoryTable