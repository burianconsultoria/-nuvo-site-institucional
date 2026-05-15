import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'

import RootLayout from './components/RootLayout'
import AdminLayout from './components/AdminLayout'

import { SiteSettingsProvider } from './contexts/SiteSettingsContext'
import SettingsDashboard from './pages/admin/SettingsDashboard'

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

import B2BServices from './pages/segments/B2B'
import Industry from './pages/segments/Industries'
import Accounting from './pages/segments/Accounting'
import Legal from './pages/segments/Lawyers'
import Agencies from './pages/segments/Agencies'
import Logistics from './pages/segments/Logistics'

import LeadsDashboard from './pages/admin/LeadsDashboard'
import FormSettingsDashboard from './pages/admin/FormSettingsDashboard'
import ContentDashboard from './pages/admin/ContentDashboard'
import { ContactModalProvider } from './contexts/ContactModalContext'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <AuthProvider>
      <ContactModalProvider>
        <SiteSettingsProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<Index />} />

                <Route path="/solucoes" element={<SolutionsHub />} />
                <Route
                  path="/solucoes/diagnostico-de-eficiencia"
                  element={<EfficiencyDiagnosis />}
                />
                <Route path="/solucoes/agentes-de-ia" element={<AIAgent />} />
                <Route path="/solucoes/automacoes-de-processos" element={<ProcessAutomation />} />
                <Route path="/solucoes/crm-e-organizacao-comercial" element={<CRM />} />
                <Route path="/solucoes/sistemas-sob-medida" element={<CustomSystems />} />

                <Route path="/para-seu-negocio/servicos-b2b" element={<B2BServices />} />
                <Route path="/para-seu-negocio/industrias" element={<Industry />} />
                <Route path="/para-seu-negocio/contabilidades" element={<Accounting />} />
                <Route path="/para-seu-negocio/advogados" element={<Legal />} />
                <Route path="/para-seu-negocio/agencias" element={<Agencies />} />
                <Route path="/para-seu-negocio/logistica" element={<Logistics />} />

                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/diagnostico-gratuito" element={<ContactPage />} />
                <Route path="/como-funciona" element={<ComoFuncionaPage />} />
                <Route path="/sobre" element={<SobrePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
                <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<LeadsDashboard />} />
                <Route path="content" element={<ContentDashboard />} />
                <Route path="form" element={<FormSettingsDashboard />} />
                <Route path="settings" element={<SettingsDashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </SiteSettingsProvider>
      </ContactModalProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
