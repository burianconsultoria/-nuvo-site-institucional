import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'

import RootLayout from './components/RootLayout'
import AdminLayout from './components/AdminLayout'

import Index from './pages/Index'
import QuizPage from './pages/QuizPage'
import FAQPage from './pages/FAQPage'
import RoiCalculatorPage from './pages/RoiCalculatorPage'
import RoiResultPage from './pages/RoiResultPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'

import QuickDiagnosis from './pages/QuickDiagnosis'
import DiagnosisResult from './pages/DiagnosisResult'

import SolutionsHub from './pages/solutions/SolutionsHub'
import EfficiencyDiagnosis from './pages/solutions/EfficiencyDiagnosis'
import AIAgent from './pages/solutions/AIAgent'
import ProcessAutomation from './pages/solutions/ProcessAutomation'
import CRM from './pages/solutions/CRM'
import CustomSystems from './pages/solutions/CustomSystems'

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

            <Route path="/solucoes" element={<SolutionsHub />} />
            <Route path="/solucoes/diagnostico-de-eficiencia" element={<EfficiencyDiagnosis />} />
            <Route path="/solucoes/agente-de-ia" element={<AIAgent />} />
            <Route path="/solucoes/automacao-de-processos" element={<ProcessAutomation />} />
            <Route path="/solucoes/crm-e-organizacao-comercial" element={<CRM />} />
            <Route path="/solucoes/sistemas-sob-medida" element={<CustomSystems />} />

            <Route path="/diagnostico-rapido" element={<QuickDiagnosis />} />
            <Route path="/diagnostico/:id" element={<DiagnosisResult />} />

            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/roi" element={<RoiCalculatorPage />} />
            <Route path="/calculadora-roi" element={<RoiCalculatorPage />} />
            <Route path="/calculadora-roi/:id" element={<RoiResultPage />} />
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
