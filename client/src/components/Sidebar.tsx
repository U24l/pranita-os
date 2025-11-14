interface SidebarProps {
  activeModule: string
  setActiveModule: (module: string) => void
}

const Sidebar = ({ activeModule, setActiveModule }: SidebarProps) => {
  const modules = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'inventory', label: 'Inventory', icon: '📦' },
    { id: 'purchases', label: 'Purchases', icon: '🛒' },
    { id: 'sales', label: 'Sales/POS', icon: '💳' },
    { id: 'bookkeeping', label: 'Bookkeeping', icon: '💰' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 bg-card-neon p-6 h-screen sticky top-0">
      <h2 className="text-xl font-bold mb-8 text-accent">Pranita OS</h2>
      <nav className="space-y-2">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module.id)}
            className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 ${
              activeModule === module.id
                ? 'bg-primary text-black font-bold shadow-lg shadow-primary/50'
                : 'hover:bg-primary/20'
            }`}
          >
            <span>{module.icon}</span>
            <span>{module.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar