import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'

import RootLayout from './components/RootLayout'
import AdminLayout from './components/AdminLayout'

import Index from './pages/Index'
import QuizPage from './pages/QuizPage'
import ROIPage from './pages/ROIPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'

import LeadsDashboard from './pages/admin/LeadsDashboard'
import ConfigDashboard from './pages/admin/ConfigDashboard'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/roi" element={<ROIPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<LeadsDashboard />} />
            <Route path="config" element={<ConfigDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
