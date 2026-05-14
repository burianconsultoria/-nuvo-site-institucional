import { ArrowRight, Megaphone } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Agencies() {
  useSEO({
    title: 'Automação e Processos para Agências de Marketing | Nuvo',
    description:
      'Transforme a operação da sua agência: processos escaláveis, retenção de clientes e visibilidade de métricas e entregas.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'A Nuvo atende agências de performance?',
      answer:
        'Sim. Criamos estruturas para escalar o seu onboarding de clientes novos e dashboards gerenciais automáticos.',
    },
    {
      question: 'Podem ajudar a revender soluções da Nuvo?',
      answer:
        'Sim. Oferecemos programas de parceria (white-label ou referral) para Agências de Marketing.',
    },
    {
      question: 'Como melhorar o setor de CS (Customer Success)?',
      answer:
        'Implementando rotinas automáticas de feedback, acompanhamento NPS e alertas de risco de churn no CRM.',
    },
    {
      question: 'É possível criar dashboards sob medida?',
      answer:
        'Sim, usando Looker Studio, PowerBI ou dashboards customizados para unificar Facebook Ads, Google Ads e CRM do cliente.',
    },
    {
      question: 'Isso resolve o caos da aprovação de criativos?',
      answer:
        'Podemos implementar e automatizar fluxos no Asana/ClickUp integrados com ferramentas de aprovação via WhatsApp.',
    },
    {
      question: 'Como iniciamos o projeto para a Agência?',
      answer: 'Basta agendar um diagnóstico; avaliamos os gargalos de operação e onboarding.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Megaphone className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Agências: Previsibilidade Operacional e Retenção
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entregue resultados aos seus clientes sem que a sua equipe perca a cabeça. Sistematize
              o Onboarding, as Vendas B2B e o Customer Success com tecnologia inteligente.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Organizar minha agência
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua agência cresce, o volume de contas aumenta, mas cada cliente parece uma empresa diferente. Não há processos padronizados."
          problem="O onboarding é caótico. As senhas se perdem, as entregas dependem exclusivamente da memória dos gerentes de conta e o cliente sofre com a falta de clareza."
          implication="O Churn aumenta. Você foca tanto em trazer clientes novos que os antigos saem por falhas no serviço básico. Sua lucratividade dilui no retrabalho."
          needPayoff="Com processos padronizados, automações de tarefas gerenciais e um CRM centralizado, o cliente se sente bem atendido, a equipe entrega melhor e a agência tem base sólida para dobrar de tamanho."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
