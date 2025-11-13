// Mock data — we'll Zustand-ify in Phase 2
const mockStats = [
  { title: 'Today\'s Sales', value: '$1,247', change: '+12%', color: 'text-primary' },
  { title: 'Low Stock Items', value: '3', change: '-1', color: 'text-accent' },
  { title: 'Open Orders', value: '5', change: '+2', color: 'text-primary' },
  { title: 'Profit Margin', value: '28%', change: '+3%', color: 'text-accent' },
]

const Dashboard = () => (
  <>
    {mockStats.map((stat, i) => (
      <div key={i} className="card-neon p-6">
        <h3 className="text-sm opacity-70 mb-2">{stat.title}</h3>
        <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
        <span className="text-xs">{stat.change}</span>
      </div>
    ))}
  </>
)

export default Dashboard