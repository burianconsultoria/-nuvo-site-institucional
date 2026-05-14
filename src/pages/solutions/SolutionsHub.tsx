import { ArrowRight, BarChart3, Bot, Zap, Users, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MOCK_DATA = { loaded: true }

export default function SolutionsHub() {
  useSEO({
    title: 'Soluções de Tecnologia para PME | Nuvo',
    description:
      'Diagnóstico, automação, IA, CRM e sistemas sob medida. Descubra como a consultoria da Nuvo pode impulsionar o seu negócio.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const solutions = [
    {
      title: 'Diagnóstico de Eficiência',
      description: 'Identifique onde sua empresa perde tempo e dinheiro.',
      href: '/solucoes/diagnostico-de-eficiencia',
      icon: BarChart3,
    },
    {
      title: 'Agente de IA (WhatsApp)',
      description: 'Automatize seu WhatsApp e nunca mais perca um lead.',
      href: '/solucoes/agente-de-ia',
      icon: Bot,
    },
    {
      title: 'Automação de Processos',
      description: 'Elimine tarefas manuais e ganhe tempo estratégico.',
      href: '/solucoes/automacao-de-processos',
      icon: Zap,
    },
    {
      title: 'CRM e Organização Comercial',
      description: 'Organize seus clientes e nunca mais perca um follow-up.',
      href: '/solucoes/crm-e-organizacao-comercial',
      icon: Users,
    },
    {
      title: 'Sistemas Sob Medida',
      description: 'Nada pronto resolve? Criamos do zero para você.',
      href: '/solucoes/sistemas-sob-medida',
      icon: Code2,
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Nossas Soluções
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Na Nuvo, nossa consultoria tecnológica não apenas implementa ferramentas, mas redefine
            sua estratégia. Mapeamos os processos da sua empresa para identificar gargalos e
            desenhar soluções personalizadas que impulsionam o seu ROI e garantem escalabilidade no
            mercado atual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Link key={index} to={solution.href} className="group flex h-full">
                <Card className="h-full w-full border-slate-200 transition-all duration-300 hover:border-indigo-600 hover:shadow-md bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm font-semibold text-indigo-600 mt-4">
                      Saiba mais{' '}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </PageState>
  )
}
