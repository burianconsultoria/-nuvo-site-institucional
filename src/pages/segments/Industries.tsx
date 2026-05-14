import { ArrowRight, Factory } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Industries() {
  useSEO({
    title: 'Transformação Digital para Indústrias | Nuvo',
    description:
      'Otimize a cadeia de suprimentos e as vendas industriais conectando o chão de fábrica ao seu setor comercial.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'Como a Nuvo atua no setor industrial?',
      answer:
        'Conectamos seu sistema ERP comercial (como TOTVS, SAP) com CRMs e automações de atendimento.',
    },
    {
      question: 'Ajudam com a equipe de representantes?',
      answer:
        'Sim. Criamos sistemas e CRMs mobile para representantes lançarem pedidos em tempo real.',
    },
    {
      question: 'Dá para automatizar a emissão de orçamentos?',
      answer: 'Sim, a partir das planilhas de custo, montamos calculadoras automáticas integradas.',
    },
    {
      question: 'Como funciona a IA para a Indústria?',
      answer: 'Agentes de IA ajudam na triagem de peças de reposição e assistência técnica.',
    },
    {
      question: 'A plataforma é robusta para milhares de SKUs?',
      answer: 'Sim. Nossos projetos lidam com alta complexidade de catálogos industriais.',
    },
    {
      question: 'Como iniciar?',
      answer: 'Com um mapeamento dos seus processos mais lentos (ex: entrada de pedidos).',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Factory className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Indústrias: Modernização do Comercial à Entrega
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Pare de perder pedidos por orçamentos demorados. Implementamos tecnologia para
              facilitar o trabalho de representantes de vendas e integrar a área comercial ao seu
              ERP.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Otimizar minha indústria
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua indústria opera em escala, mas a gestão de vendas com distribuidores e representantes é feita em blocos de papel, e-mails e planilhas obsoletas."
          problem="Calcular o preço de produtos customizados é lento. Os representantes demoram a enviar pedidos, gerando rupturas na linha de produção."
          implication="A falta de previsibilidade comercial afeta o estoque e a produção. Concorrentes mais ágeis fecham contratos antes que seu orçamento fique pronto."
          needPayoff="Conectando representantes, CRM e o chão de fábrica, você garante orçamentos em minutos, clareza na demanda e uma margem de lucro protegida contra erros manuais."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
