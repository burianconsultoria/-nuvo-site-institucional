import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useRealtime } from '@/hooks/use-realtime'
import { Settings, LogOut, Users, Bell, Palette, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/use-toast'

export default function AdminLayout() {
  const { user, signOut, loading } = useAuth()
  const location = useLocation()
  const [unreadLeads, setUnreadLeads] = useState(0)

  useRealtime('leads', (e) => {
    if (e.action === 'create') {
      setUnreadLeads((prev) => prev + 1)
      toast({
        title: 'Novo Lead Capturado!',
        description: `${e.record.nome || 'Alguém'} acabou de enviar o formulário.`,
      })
    }
  })

  useEffect(() => {
    if (location.pathname === '/admin') {
      setUnreadLeads(0)
    }
  }, [location.pathname])

  if (loading)
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  if (!user) return <Navigate to="/login" replace />

  const navigation = [
    { name: 'Dashboard (Leads)', href: '/admin', icon: Users },
    { name: 'Campos do Formulário', href: '/admin/form', icon: Settings },
    { name: 'Identidade & Mídia', href: '/admin/settings', icon: Palette },
    { name: 'Conteúdo do Site', href: '/admin/content', icon: FileText },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 z-20 shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2 text-slate-900">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-bold text-sm text-white">N</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Nuvo Admin</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium',
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                )}
              >
                <item.icon
                  className={cn('w-5 h-5', isActive ? 'text-indigo-600' : 'text-slate-400')}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-medium">
              {user?.name?.[0] || 'A'}
            </div>
            <div className="text-sm truncate">
              <p className="text-slate-900 font-medium truncate">{user?.name || 'Admin'}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </aside>
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 sticky top-0 z-10 shadow-sm">
          <Link
            to="/admin"
            className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Bell className="w-5 h-5" />
            {unreadLeads > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            )}
          </Link>
        </header>
        <div className="p-8 flex-1 overflow-auto max-w-7xl w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
