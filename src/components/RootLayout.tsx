import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'

export default function RootLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-border transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            aria-label="Go to homepage"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">N</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              Nuvo
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/como-funciona" className="hover:text-primary transition-colors duration-300">
              Como Funciona
            </Link>
            <Link to="/solucoes" className="hover:text-primary transition-colors duration-300">
              Soluções
            </Link>
            <Link to="/sobre" className="hover:text-primary transition-colors duration-300">
              Sobre
            </Link>
            <Link to="/roi" className="hover:text-primary transition-colors duration-300">
              ROI
            </Link>
            <Link to="/faq" className="hover:text-primary transition-colors duration-300">
              FAQ
            </Link>
            <Link to="/contato" className="hover:text-primary transition-colors duration-300">
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <Button
                onClick={() => navigate('/admin')}
                variant="default"
                aria-label="Ir para Dashboard"
              >
                Dashboard
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')} variant="outline" aria-label="Fazer Login">
                Login
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col animate-fade-in">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nuvo. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-foreground transition-colors duration-300">
              Termos
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors duration-300">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
