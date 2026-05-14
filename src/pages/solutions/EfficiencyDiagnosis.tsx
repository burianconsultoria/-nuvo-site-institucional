import { ArrowRight, Search, Target, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#FFB65E'

export default function EfficiencyDiagnosis() {
  useSEO({
    title: 'Diagnóstico de Eficiência para PME | Nuvo Company',
    description:
      'Sua empresa cresceu, mas os processos continuam manuais? O diagnóstico de eficiência da Nuvo mapeia gargalos e aponta o caminho para a automação. Agende agora.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'Quanto tempo dura o diagnóstico?',
      answer:
        'Geralmente concluímos todo o mapeamento em até 2 semanas, dependendo da complexidade da operação.',
    },
    {
      question: 'Qual o custo inicial?',
      answer:
        'O diagnóstico inicial é gratuito e serve para identificarmos o potencial de melhoria.',
    },
    {
      question: 'Minha equipe precisará parar de trabalhar?',
      answer: 'Não. Agendamos entrevistas curtas de 30 a 60 minutos com pessoas-chave.',
    },
    {
      question: 'Que áreas são analisadas?',
      answer: 'Comercial, Operações, Financeiro e Atendimento ao Cliente.',
    },
    {
      question: 'Como recebo os resultados?',
      answer: 'Apresentamos um relatório detalhado com plano de ação e estimativa de ROI.',
    },
    {
      question: 'Vocês implementam a solução também?',
      answer: 'Sim, caso faça sentido, podemos construir as automações propostas.',
    },
    {
      question: 'Isso funciona para qualquer tipo de empresa?',
      answer:
        'É ideal para empresas que dependem muito de trabalho manual em planilhas ou sistemas antigos.',
    },
    {
      question: 'E o sigilo das informações?',
      answer:
        'Assinamos um NDA (Acordo de Confidencialidade) antes de iniciar qualquer levantamento.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white border-b border-slate-200 py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Diagnóstico de Eficiência para PME — Descubra Onde Sua Empresa Perde Tempo e Dinheiro
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Muitas empresas operam abaixo do seu potencial devido a processos ineficientes. Nosso
              serviço de diagnóstico analisa a fundo a sua operação para identificar gargalos
              ocultos e mapear oportunidades claras de automação e melhoria, desenhando um caminho
              prático para aumentar sua rentabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
                className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
                onClick={openModal}
              >
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-[44px] rounded-lg px-8 text-lg"
                onClick={openModal}
              >
                Ver cases de sucesso
              </Button>
            </div>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua empresa cresceu, o time aumentou, mas as tarefas ainda dependem de controles manuais e planilhas desconectadas."
          problem="Processos confusos geram retrabalho, perda de informações e horas gastas apenas copiando e colando dados entre sistemas."
          implication="Sua margem de lucro cai enquanto os custos operacionais sobem. A equipe fica desmotivada e o crescimento do negócio fica estagnado."
          needPayoff="Com um diagnóstico claro, você entende exatamente quais etapas automatizar para recuperar a eficiência, economizar tempo e focar na estratégia."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
