import { useProductStore } from '../store/useProductStore'
import type { ProductItem } from '../store/useProductStore'
import { useState, useEffect } from 'react'

interface Props {
  product?: Product
  onClose: () => void
}

const ProductModal = ({ product, onClose }: Props) => {
  const { addProduct, updateProduct } = useProductStore()
  const [form, setForm] = useState({
    name: product?.name || '',
    price: product?.price || 0,
    stock: product?.stock || 0,
    category: product?.category || 'Clothing',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (product) {
      updateProduct(product.id, form)
    } else {
      addProduct(form)
    }
    onClose()
  }

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-card-neon border border-primary/30">
        <h3 className="text-xl font-bold text-primary mb-4">
          {product ? 'Edit Product' : 'Add New Product'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered input-primary w-full bg-card"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered input-primary w-full bg-card"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            required
          />
          <input
            type="number"
            placeholder="Stock"
            className="input input-bordered input-primary w-full bg-card"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="input input-bordered input-primary w-full bg-card"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
          <div className="modal-action">
            <button type="submit" className="btn-neon">
              {product ? 'Update' : 'Add'} Product
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductModal