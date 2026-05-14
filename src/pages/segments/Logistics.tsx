import { ArrowRight, Truck } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Logistics() {
  useSEO({
    title: 'Tecnologia para Logística e Transportes | Nuvo',
    description:
      'Acabe com as falhas de comunicação, atualizações manuais e atrasos operacionais no seu setor logístico.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'A Nuvo desenvolve o sistema de roteirização?',
      answer:
        'Não. Nós integramos os seus sistemas de TMS, WMS ou de roteirização para que as informações cheguem onde importa.',
    },
    {
      question: 'Dá para automatizar avisos para o cliente final?',
      answer:
        'Sim. Automatizamos mensagens pelo WhatsApp sempre que o status de entrega do pedido for alterado.',
    },
    {
      question: 'Como o CRM ajuda transportadoras?',
      answer:
        'Gerenciando cotações de fretes, histórico de clientes B2B, aprovações de contratos e metas de representantes comerciais.',
    },
    {
      question: 'O Agente de IA funciona na logística?',
      answer:
        'Ele é perfeito para tirar dúvidas de motoristas na estrada (sobre endereços, documentação) 24h por dia.',
    },
    {
      question: 'É possível criar um portal de cotação rápido?',
      answer:
        'Sim, desenvolvemos sistemas sob medida onde seus clientes podem calcular estimativas de frete sozinhos.',
    },
    {
      question: 'Quais os primeiros passos?',
      answer:
        'Um diagnóstico preciso focado na jornada do pedido, do fechamento até a entrega e faturamento.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Truck className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Logística e Transportes: Integração e Agilidade
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Integre frotas, comercial e cliente final. Transforme uma operação baseada em papel e
              ruídos de comunicação em um fluxo digital ininterrupto.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Otimizar minha logística
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua equipe passa horas ao telefone tentando descobrir onde o motorista está ou ligando para o cliente para avisar de atrasos. As cotações são feitas via planilhas lentas."
          problem="Os ruídos de comunicação causam multas, insatisfação dos clientes e os dados só são atualizados no sistema dias depois que o frete foi feito."
          implication="Sua transportadora perde confiança no mercado. O tempo de resposta lento a orçamentos faz a concorrência ganhar os melhores contratos B2B."
          needPayoff="Com sistemas conectados, as cotações ficam rápidas, o rastreio informa clientes e motoristas de forma automatizada pelo WhatsApp e o seu negócio passa a escalar operações grandes sem caos administrativo."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
