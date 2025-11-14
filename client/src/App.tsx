import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Inventory from './pages/Inventory'

function App() {
  const [activeModule, setActiveModule] = useState('dashboard')

  return (
    <div className="min-h-screen bg-bgDark text-text flex">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Pranita OS</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-accent">Online • Shift Open</span>
            <button className="btn-neon btn-sm">Toggle Dark/Light</button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {activeModule === 'dashboard' && <Dashboard />}
          {activeModule === 'inventory' && <Inventory />}
          {/* Future modules go here */}
        </div>
      </main>
    </div>
  )
}

export default App