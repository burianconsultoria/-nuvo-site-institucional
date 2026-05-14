import { ArrowRight, Scale } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Lawyers() {
  useSEO({
    title: 'Inovação e Tecnologia para Escritórios Jurídicos | Nuvo',
    description:
      'Organize a recepção de leads, automatize o follow-up de honorários e otimize o relacionamento no seu escritório de advocacia.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'O CRM serve para advogados?',
      answer:
        'Sim. Implementamos o Legal CRM, focado em acompanhar todo o funil desde o primeiro contato até o fechamento dos honorários.',
    },
    {
      question: 'A IA pode fazer atendimento jurídico?',
      answer:
        'A IA faz a triagem do cliente, entende do que se trata a causa e agenda o atendimento, não fornece conselhos legais.',
    },
    {
      question: 'Vocês geram os leads?',
      answer:
        'Nós não fazemos marketing (tráfego), mas estruturamos a máquina que converte esses leads em contratos.',
    },
    {
      question: 'Posso automatizar o acompanhamento processual?',
      answer:
        'Sim, usando Webhooks e APIs de tribunais, avisamos os clientes automaticamente pelo WhatsApp.',
    },
    {
      question: 'Garante o sigilo profissional?',
      answer:
        'Total. Todas as integrações mantêm o protocolo estrito de confidencialidade da OAB e LGPD.',
    },
    {
      question: 'Meu escritório é pequeno. Vale a pena?',
      answer:
        'Especialmente para escritórios pequenos, a automação age como o estagiário invisível que nunca erra.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Scale className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Escritórios Jurídicos: Inteligência na Captação e Gestão
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Traga eficiência corporativa para o seu escritório. Transforme o fluxo de prospects, a
              assinatura de contratos de honorários e a comunicação em algo rápido, escalável e 100%
              organizado.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Escalar meu escritório jurídico
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Você investe em Google Ads, chegam vários contatos no WhatsApp, mas a equipe demora a responder e muitos leads esfriam antes da primeira consulta."
          problem="Não há controle de quem assinou o contrato de honorários, o fluxo de faturamento é manual, e atualizar clientes sobre o processo gasta horas preciosas dos sócios."
          implication="Seu escritório tem um teto de crescimento. Os advogados trabalham muito preenchendo papelada administrativa e perdem a chance de pegar casos mais rentáveis."
          needPayoff="Com IA triando contatos 24h, CRM gerenciando o fechamento de contratos e rotinas repetitivas automatizadas, o advogado exerce plenamente o direito, faturando mais com menos esforço administrativo."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
