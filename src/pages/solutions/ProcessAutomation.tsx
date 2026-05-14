import { ArrowRight, Settings, Workflow, Layers, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'

const MOCK_DATA = { loaded: true }

export default function ProcessAutomation() {
  useSEO({
    title: 'Automação de Processos | Nuvo Soluções',
    description:
      'Elimine tarefas repetitivas, conecte seus sistemas e dê à sua equipe o tempo necessário para focar na estratégia.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const navigate = useNavigate()

  const benefits = [
    {
      title: 'Redução de Erros Humanos',
      description:
        'Sistemas integrados que transferem dados sem falhas ou retrabalho. Esqueça o "copiar e colar" infinito entre planilhas.',
      icon: CheckCircle,
    },
    {
      title: 'Foco no Estratégico',
      description:
        'Libere sua equipe de tarefas repetitivas e administrativas para que possam focar no relacionamento e no fechamento de vendas.',
      icon: Workflow,
    },
    {
      title: 'Escalabilidade Operacional',
      description:
        'Cresça sua base de clientes sem precisar dobrar o tamanho da equipe administrativa. A automação trabalha por você.',
      icon: Layers,
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl text-indigo-600 mb-2">
              <Settings className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Elimine tarefas manuais e ganhe tempo.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Conectamos seus aplicativos, CRMs, ERPs e ferramentas de comunicação para que eles
              conversem entre si. O resultado? Um fluxo de trabalho contínuo onde a tecnologia faz o
              trabalho pesado e sua equipe brilha onde importa.
            </p>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 h-14 px-8 text-lg w-full md:w-auto"
              onClick={() => navigate('/diagnostico-rapido')}
            >
              Quero automatizar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 w-full">
            <div className="space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </PageState>
  )
}
