import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'

export default function RootLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Nuvo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/solucoes" className="hover:text-indigo-600 transition-colors">
              Soluções
            </Link>
            <Link to="/roi" className="hover:text-indigo-600 transition-colors">
              Calculadora ROI
            </Link>
            <Link to="/quiz" className="hover:text-indigo-600 transition-colors">
              Quiz
            </Link>
            <Link to="/faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
            <Link to="/contato" className="hover:text-indigo-600 transition-colors">
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <Button
                onClick={() => navigate('/admin')}
                variant="default"
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                Dashboard
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')} variant="outline">
                Login
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Nuvo. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-slate-900">
              Termos
            </Link>
            <Link to="#" className="hover:text-slate-900">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
