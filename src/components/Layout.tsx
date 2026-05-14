import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function Layout() {
  const { user, signOut } = useAuth()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300 border-b',
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-sm'
            : 'bg-background border-transparent',
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <Link
            to="/"
            className="font-extrabold text-2xl bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
          >
            Nuvo
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Início
            </Link>
            <Link to="/faq" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Contato
            </Link>

            {user ? (
              <div className="flex items-center gap-4 ml-4 border-l pl-4">
                <Link to="/dashboard" className="text-sm font-medium hover:text-indigo-600">
                  Dashboard
                </Link>
                <Link to="/dashboard/scoring" className="text-sm font-medium hover:text-indigo-600">
                  Scoring
                </Link>
                <Link to="/profile" className="text-sm font-medium hover:text-indigo-600">
                  Perfil
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sair
                </Button>
              </div>
            ) : (
              <Button asChild size="sm" className="ml-4 rounded-full px-6">
                <Link to="/login">Login</Link>
              </Button>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-16">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/20 py-8">
        <div className="container px-4 text-center text-sm text-muted-foreground flex flex-col items-center">
          <p className="font-semibold text-lg text-foreground mb-2">Nuvo</p>
          <p>&copy; {new Date().getFullYear()} Nuvo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
