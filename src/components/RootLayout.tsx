import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 flex flex-col animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
