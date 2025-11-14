import InventoryTable from '../components/InventoryTable'
import { useState } from 'react'
import ProductModal from '../components/ProductModal'

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary">Inventory</h2>
        <button
          className="btn-neon"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Product
        </button>
      </div>
      <InventoryTable />
      {isModalOpen && <ProductModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default Inventory