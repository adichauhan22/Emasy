import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/attendance', label: 'Attendance', icon: '📅' },
    { path: '/tasks', label: 'Tasks', icon: '📝' },
    { path: '/meetings', label: 'Meetings', icon: '👥' },
    { path: '/salary', label: 'Salary', icon: '💰' },
    { path: '/leaderboard', label: 'Leaderboard', icon: '🏆' },
    { path: '/leave', label: 'Leave', icon: '✈️' },
  ]

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-xl font-bold">EMP Portal</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              location.pathname === item.path ? 'bg-gray-100' : ''
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 p-4 w-64 border-t">
        <div className="flex items-center">
          <img
            src="/api/placeholder/40/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}