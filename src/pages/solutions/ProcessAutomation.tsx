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
          <div className="flex-1 space-y-8 relative">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-product-auto-light rounded-full blur-3xl pointer-events-none"></div>
            <div className="inline-flex items-center justify-center p-3 bg-product-auto-light border border-product-auto/20 rounded-xl text-product-auto mb-2 relative z-10">
              <Settings className="w-6 h-6" />
            </div>
            <h1 className="text-[32px] md:text-[48px] font-heading font-bold tracking-tight text-foreground relative z-10">
              Elimine tarefas manuais e ganhe tempo.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed relative z-10">
              Conectamos seus aplicativos, CRMs, ERPs e ferramentas de comunicação para que eles
              conversem entre si. O resultado? Um fluxo de trabalho contínuo onde a tecnologia faz o
              trabalho pesado e sua equipe brilha onde importa.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-[44px] rounded-lg px-8 text-lg w-full md:w-auto relative z-10"
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
                    className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-product-auto/10 hover:border-product-auto/30 transition-colors"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-product-auto-light flex items-center justify-center text-product-auto">
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
