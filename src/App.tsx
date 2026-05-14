import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'

import RootLayout from './components/RootLayout'
import AdminLayout from './components/AdminLayout'

import Index from './pages/Index'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'

import ComoFuncionaPage from './pages/ComoFuncionaPage'
import SobrePage from './pages/SobrePage'

import SolutionsHub from './pages/solutions/SolutionsHub'
import EfficiencyDiagnosis from './pages/solutions/EfficiencyDiagnosis'
import AIAgent from './pages/solutions/AIAgent'
import ProcessAutomation from './pages/solutions/ProcessAutomation'
import CRM from './pages/solutions/CRM'
import CustomSystems from './pages/solutions/CustomSystems'

import LeadsDashboard from './pages/admin/LeadsDashboard'
import FormSettingsDashboard from './pages/admin/FormSettingsDashboard'
import { ContactModalProvider } from './contexts/ContactModalContext'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <AuthProvider>
      <ContactModalProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Index />} />

              <Route path="/solucoes" element={<SolutionsHub />} />
              <Route path="/solucoes/diagnostico-de-eficiencia" element={<EfficiencyDiagnosis />} />
              <Route path="/solucoes/agente-de-ia" element={<AIAgent />} />
              <Route path="/solucoes/automacao-de-processos" element={<ProcessAutomation />} />
              <Route path="/solucoes/crm-e-organizacao-comercial" element={<CRM />} />
              <Route path="/solucoes/sistemas-sob-medida" element={<CustomSystems />} />

              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/como-funciona" element={<ComoFuncionaPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
              <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<LeadsDashboard />} />
              <Route path="form" element={<FormSettingsDashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </ContactModalProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
