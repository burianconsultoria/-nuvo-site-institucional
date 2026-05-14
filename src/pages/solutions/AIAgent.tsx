import { ArrowRight, MessageSquare, Clock, Users, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'

const MOCK_DATA = { loaded: true }

export default function AIAgent() {
  useSEO({
    title: 'Agente de IA para WhatsApp | Nuvo Soluções',
    description:
      'Automatize seu WhatsApp com Inteligência Artificial, qualifique leads 24/7 e nunca mais perca uma oportunidade comercial.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const navigate = useNavigate()

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <div className="bg-[#1C1C28] text-white py-24 px-4 text-center relative border-b-4 border-product-ai">
          <div className="absolute inset-0 bg-gradient-to-b from-product-ai/10 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-product-ai/20 text-product-ai text-sm font-medium mb-8">
              <MessageSquare className="w-4 h-4" /> Inteligência Artificial
            </div>
            <h1 className="text-[32px] md:text-[48px] font-heading font-extrabold tracking-tight mb-6">
              Automatize seu WhatsApp e nunca mais perca um lead.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tenha um assistente virtual inteligente capaz de conversar de forma natural,
              qualificar potenciais clientes, agendar reuniões e responder dúvidas 24 horas por dia,
              7 dias por semana.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-[44px] rounded-lg px-8 text-lg"
              onClick={() => navigate('/diagnostico-rapido')}
            >
              Testar agente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Before/After Section */}
        <div className="container mx-auto max-w-5xl px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              O impacto imediato na sua operação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Antes */}
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-sm">
                  ✕
                </span>
                Antes da Nuvo
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Clock className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <strong className="block text-red-900">Atendimento demorado</strong>
                    <span className="text-red-700 text-sm">
                      Horas para responder uma mensagem inicial, esfriando o interesse do cliente.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Users className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <strong className="block text-red-900">Leads perdidos fora do horário</strong>
                    <span className="text-red-700 text-sm">
                      Quem entra em contato de noite ou finais de semana fica sem resposta.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MessageSquare className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <strong className="block text-red-900">Respostas não padronizadas</strong>
                    <span className="text-red-700 text-sm">
                      Cada vendedor responde de um jeito, falhando na qualificação do cliente.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Depois */}
            <div className="bg-product-ai-light p-8 rounded-3xl border border-product-ai/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap className="w-32 h-32 text-product-ai" />
              </div>
              <h3 className="text-[24px] font-heading font-bold text-foreground mb-6 flex items-center gap-3 relative z-10">
                <span className="w-8 h-8 rounded-full bg-product-ai/20 flex items-center justify-center text-sm text-product-ai">
                  ✓
                </span>
                Com o Agente IA
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <Clock className="w-6 h-6 text-product-ai shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Resposta em segundos 24/7</strong>
                    <span className="text-slate-600 text-sm">
                      Atendimento instantâneo independente do dia ou horário da semana.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Users className="w-6 h-6 text-product-ai shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Qualificação automática</strong>
                    <span className="text-slate-600 text-sm">
                      O bot faz as perguntas certas e só repassa os leads quentes para humanos.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MessageSquare className="w-6 h-6 text-product-ai shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Integração direta com CRM</strong>
                    <span className="text-slate-600 text-sm">
                      Os dados captados vão direto para o seu sistema sem digitação manual.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageState>
  )
}
