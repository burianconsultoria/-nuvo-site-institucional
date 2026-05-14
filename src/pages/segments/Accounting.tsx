import { ArrowRight, Calculator } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Accounting() {
  useSEO({
    title: 'Automação para Escritórios de Contabilidade | Nuvo',
    description:
      'Elimine tarefas repetitivas do departamento pessoal e fiscal com automações e sistemas eficientes para contabilidades.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'Ajudam com a captação de clientes contábeis?',
      answer:
        'Sim. Implementamos CRMs específicos para escalar suas vendas e parcerias de indicação.',
    },
    {
      question: 'Como automatizar a rotina de DP e Fiscal?',
      answer:
        'Podemos criar integrações e RPA para baixar guias e enviar por WhatsApp aos clientes de forma automática.',
    },
    {
      question: 'O Agente de IA funciona para atendimento contábil?',
      answer:
        'Sim. Ele pode responder dúvidas frequentes (como prazo de entrega de impostos, envio de holerites).',
    },
    {
      question: 'Tem integração com sistemas Domínio ou Alterdata?',
      answer: 'Sim, se possuírem acesso via API ou através de robôs de automação (RPA).',
    },
    {
      question: 'Vocês criam portais para o cliente da contabilidade?',
      answer: 'Sim. Desenvolvemos áreas logadas exclusivas para envio e recebimento de documentos.',
    },
    {
      question: 'O serviço tem segurança legal?',
      answer:
        'Garantimos criptografia e conformidade com a LGPD em todas as automações de dados sensíveis.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Calculator className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Contabilidades: Escalabilidade com Automação
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Liberte seu time fiscal e de departamento pessoal da digitação infinita. Modernize o
              atendimento ao cliente e estruture uma verdadeira máquina de vendas contábil.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Modernizar meu escritório
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Seu escritório contábil opera no limite todo dia 20 e dia 5. O time passa horas baixando guias, renomeando arquivos e mandando e-mails."
          problem="Multas acontecem por esquecimento humano, os clientes reclamam de lentidão no atendimento no WhatsApp, e os sócios não têm tempo para ser consultores."
          implication="Seu custo de operação engole a lucratividade. O serviço vira commodity e você não consegue cobrar honorários mais altos."
          needPayoff="Automatizando rotinas burocráticas e implementando um atendimento inteligente, sua equipe atua de forma consultiva. Você pode escalar o número de clientes sem estourar o limite de trabalho da equipe."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
