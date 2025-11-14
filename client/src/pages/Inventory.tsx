import { useProductStore } from '../store/useProductStore'

const Inventory = () => {
  const { products } = useProductStore()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Inventory</h2>
      <div className="grid gap-4">
        {products.map(p => (
          <div key={p.id} className="card-neon p-4 flex justify-between">
            <div>
              <p className="font-bold">{p.name}</p>
              <p className="text-sm">Stock: <span className={p.stock <= 5 ? 'text-error' : ''}>{p.stock}</span></p>
            </div>
            <button className="btn-neon btn-sm">Edit</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inventory