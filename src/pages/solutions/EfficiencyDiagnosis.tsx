import { ArrowRight, Search, Target, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'

const MOCK_DATA = { loaded: true }

export default function EfficiencyDiagnosis() {
  useSEO({
    title: 'Diagnóstico de Eficiência | Nuvo Soluções',
    description:
      'Identifique gargalos e descubra onde sua empresa está perdendo tempo e dinheiro com o nosso Diagnóstico de Eficiência.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const navigate = useNavigate()

  const steps = [
    {
      icon: Search,
      title: 'Mapeamento de processos e entrevistas',
      desc: 'Entendemos a fundo a rotina da sua equipe.',
    },
    {
      icon: Target,
      title: 'Identificação de gargalos',
      desc: 'Encontramos as tarefas manuais que drenam recursos.',
    },
    {
      icon: TrendingUp,
      title: 'Plano de ação com ROI estimado',
      desc: 'Apresentamos soluções com o retorno financeiro projetado.',
    },
    {
      icon: CheckCircle2,
      title: 'Execução e acompanhamento',
      desc: 'Implementamos a solução e garantimos sua adoção.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Hero Section */}
        <div className="bg-white border-b border-slate-200 py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Onde sua empresa perde tempo e dinheiro?
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Muitas empresas operam abaixo do seu potencial devido a processos ineficientes. Nosso
              serviço de diagnóstico analisa a fundo a sua operação para identificar gargalos
              ocultos e mapear oportunidades claras de automação e melhoria, desenhando um caminho
              prático para aumentar sua rentabilidade.
            </p>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 h-14 px-8 text-lg"
              onClick={() => navigate('/diagnostico-rapido')}
            >
              Quero um diagnóstico gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Como Funciona Section */}
        <div className="container mx-auto max-w-5xl px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Como funciona</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nossa metodologia foi desenhada para ser ágil e focar no que realmente importa:
              resultados rápidos e mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="absolute -top-4 w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center border-4 border-white">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PageState>
  )
}
