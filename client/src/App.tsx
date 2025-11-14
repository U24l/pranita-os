import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  const [activeModule, setActiveModule] = useState('dashboard')

  return (
    <div className="min-h-screen bg-bgDark text-text flex">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Pranita OS</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-accent">Online • Shift Open</span>
            <button className="btn-neon">Toggle Dark/Light</button>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeModule === 'dashboard' && <Dashboard />}
        </div>
      </main>
    </div>
  )
}

export default App