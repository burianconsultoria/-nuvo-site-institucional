import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { LayoutDashboard, Settings, LogOut, Users, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AdminLayout() {
  const { user, signOut, loading } = useAuth()
  const location = useLocation()

  if (loading)
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  if (!user) return <Navigate to="/login" replace />

  const navigation = [
    { name: 'Leads', href: '/admin', icon: Users },
    { name: 'Scoring Config', href: '/admin/config', icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
              <span className="font-bold text-xs">N</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Nuvo Admin</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
                  isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white',
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white font-medium">
              {user?.name?.[0] || 'A'}
            </div>
            <div className="text-sm truncate">
              <p className="text-white font-medium truncate">{user?.name || 'Admin'}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex w-full items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
