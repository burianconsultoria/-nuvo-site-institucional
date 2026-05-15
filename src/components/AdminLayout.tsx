import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useRealtime } from '@/hooks/use-realtime'
import { Settings, LogOut, Users, Bell, Palette } from 'lucide-react'
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
  ]

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[100px]" />
      </div>

      <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-white/60 flex flex-col fixed inset-y-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="h-20 flex items-center px-8 border-b border-slate-100/50">
          <Link
            to="/"
            className="flex items-center gap-3 text-slate-900 transition-transform hover:scale-105"
          >
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="font-bold text-sm text-white">N</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Nuvo Admin</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium',
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-900',
                )}
              >
                <item.icon
                  className={cn('w-5 h-5', isActive ? 'text-indigo-100' : 'text-slate-400')}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-100/50">
          <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-slate-50/50 rounded-xl border border-slate-100/50">
            <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-semibold shadow-sm">
              {user?.name?.[0] || 'A'}
            </div>
            <div className="text-sm truncate">
              <p className="text-slate-900 font-semibold truncate">{user?.name || 'Admin'}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </aside>
      <main className="flex-1 ml-64 flex flex-col min-h-screen relative z-10">
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-white/40 flex items-center justify-end px-8 sticky top-0 z-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <Link
            to="/admin"
            className="relative p-2.5 text-slate-400 hover:text-slate-600 hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
          >
            <Bell className="w-5 h-5" />
            {unreadLeads > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            )}
          </Link>
        </header>
        <div className="p-8 md:p-10 flex-1 overflow-auto max-w-[1400px] w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
