import { ArrowRight, Briefcase } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function B2B() {
  useSEO({
    title: 'Tecnologia e Automação para Empresas de Serviços B2B | Nuvo',
    description:
      'Escale a prestação dos seus serviços B2B eliminando gargalos manuais e otimizando processos internos com as soluções Nuvo.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'Como a Nuvo ajuda empresas B2B?',
      answer: 'Automatizando fluxos de aprovação, integração de contratos, e faturamento.',
    },
    {
      question: 'Qual o impacto no ciclo de vendas?',
      answer:
        'Reduzimos o tempo de prospecção e fechamento organizando o CRM e automatizando follow-ups.',
    },
    {
      question: 'Vocês atendem prestadores de serviço pequeno?',
      answer: 'Sim, adaptamos a complexidade do projeto ao tamanho da sua equipe.',
    },
    {
      question: 'E sobre a entrega do serviço B2B?',
      answer: 'Podemos criar portais do cliente onde eles mesmos acompanham o status dos projetos.',
    },
    {
      question: 'Posso integrar a IA?',
      answer: 'Sim, para triagem inicial de leads ou respostas técnicas em portais de helpdesk.',
    },
    {
      question: 'Como começar?',
      answer:
        'Através do nosso diagnóstico gratuito onde mapeamos o que mais toma tempo da sua equipe.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Briefcase className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Serviços B2B: Tecnologia para Escalar sua Prestação de Serviço
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Descubra como empresas de serviços corporativos (B2B) utilizam automação e
              inteligência para reduzir o tempo de fechamento de contratos, integrar equipes e
              entregar mais valor para seus clientes corporativos.
            </p>
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Agendar diagnóstico B2B
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Você presta serviços de alto valor para outras empresas, mas o controle interno de prazos e comunicação depende inteiramente de pessoas."
          problem="O ciclo de vendas B2B é longo e aprovações complexas se perdem no e-mail, atrasando o faturamento."
          implication="Sua capacidade de atender mais clientes esbarra na desorganização. Para crescer, você precisa contratar muito mais gente para tarefas de backoffice."
          needPayoff="Com automação ponta a ponta e CRMs alinhados, você entrega um serviço B2B mais rápido e transparente, faturando mais sem inchar a folha de pagamento."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
