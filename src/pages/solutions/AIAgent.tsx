import { ArrowRight, MessageSquare, BrainCircuit } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'
import { AIFeaturesSection } from '@/components/AIFeaturesSection'
import { AIMarketInsightsSection } from '@/components/AIMarketInsightsSection'
import { ChaosToOrderPattern } from '@/components/ui/patterns'

const MOCK_DATA = { loaded: true }

const FAQS = [
  {
    question: 'O Agente de IA substitui minha equipe de vendas?',
    answer:
      'Não. Ele automatiza o primeiro contato, qualificação e agendamento. Sua equipe entra apenas para negociar e fechar vendas com leads já qualificados.',
  },
  {
    question: 'O que acontece se ele não souber responder algo complexo?',
    answer:
      'Ele transfere a conversa para um atendente humano de forma fluida, passando todo o contexto e histórico da conversa.',
  },
  {
    question: 'Preciso de um número novo de WhatsApp?',
    answer:
      'Você pode usar seu número atual (migrando para a API Oficial) ou um novo número dedicado ao Agente.',
  },
  {
    question: 'Quanto tempo leva para implementar?',
    answer: 'Em média, o setup completo, treinamento da IA e integrações leva cerca de 2 semanas.',
  },
  {
    question: 'A linguagem vai parecer um robô?',
    answer:
      'Não. O agente é treinado com o tom de voz da sua marca, podendo ser formal, descontraído ou técnico, parecendo um humano real.',
  },
]

export default function AIAgent() {
  useSEO({
    title: 'Agente de IA para Atendimento e Vendas no WhatsApp | Nuvo',
    description:
      'Automatize seu atendimento no WhatsApp com Agentes de IA treinados no seu negócio. Atendimento 24h, qualificação de leads, agendamento inteligente, follow-up automático e aumento de conversão. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-background text-foreground min-h-screen">
        {/* Hero */}
        <div className="py-24 px-4 text-center relative border-b border-border/20 pt-40">
          <ChaosToOrderPattern />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-8 bg-support/10 text-support">
              <MessageSquare className="w-4 h-4" /> Inteligência Artificial
            </div>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-heading font-extrabold tracking-tight mb-6 leading-tight text-foreground">
              Agente de IA para Atendimento — Automatize Seu WhatsApp e Nunca Mais Perca um Lead
            </h1>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tenha um assistente virtual inteligente capaz de conversar de forma natural,
              qualificar potenciais clientes, agendar reuniões e responder dúvidas 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-[48px] rounded-lg px-8 text-lg font-bold">
                <Link to="/diagnostico-gratuito">
                  Quero um diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-[48px] rounded-lg px-8 text-lg"
                onClick={openModal}
              >
                Simular atendimento agora
              </Button>
            </div>
          </div>
        </div>

        {/* GEO Block */}
        <div className="py-24 bg-cardLight text-cardLight-foreground">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-foreground/10 text-support">
                <BrainCircuit className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              O que é um Agente de IA para Atendimento?
            </h2>
            <h3 className="text-xl opacity-80 mb-8 font-medium">
              Inteligência artificial que entende seu negócio e atende seus clientes como sua equipe
              atenderia
            </h3>
            <p className="text-lg opacity-70 leading-relaxed max-w-3xl mx-auto">
              Um Agente de IA não é um chatbot tradicional de menus e opções limitadas. É uma
              inteligência artificial avançada (como o GPT-4) treinada com os dados específicos da
              sua empresa — seus PDFs, site, FAQs e histórico de vendas. Ele entende a intenção do
              cliente, responde em linguagem natural e resolve problemas de forma autônoma. Operando
              24 horas por dia, ele qualifica leads, agenda reuniões e realiza o follow-up
              automaticamente, garantindo que nenhuma oportunidade seja perdida.
            </p>
          </div>
        </div>

        {/* SPIN Selling Section */}
        <SpinSellingSection
          situation="Sua equipe passa o dia inteiro respondendo as mesmas dúvidas básicas no WhatsApp (60% do tempo). Leads que chegam fora do horário comercial esfriam por falta de resposta imediata."
          problem="O cliente atual espera uma resposta em até 5 minutos. Modelos manuais de atendimento causam a 'morte do lead', fazendo com que ele canse de esperar e vá buscar a concorrência."
          implication="O custo financeiro é alto: perder 200 leads/mês com ticket de R$ 500 pode significar até R$ 48.000/ano de prejuízo. Sem contar o desgaste contínuo da equipe e danos à reputação da marca."
          needPayoff="Com um Agente de IA, a resposta é instantânea e a qualificação é automática, 24/7. O follow-up ocorre sem intervenção manual, permitindo que sua equipe foque apenas em fechar as vendas."
        />

        <AIFeaturesSection />
        {/* We assume AIMarketInsightsSection accepts standard theme or we just render it. Assuming it uses global CSS vars */}
        <AIMarketInsightsSection color="hsl(var(--primary))" />

        <PageFaqSection faqs={FAQS} />

        {/* Bottom CTA */}
        <div className="py-24 bg-card border-t border-border/20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-xl text-foreground/80 mb-10">
              Faça um diagnóstico gratuito e descubra como a IA pode escalar suas vendas no
              WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-[48px] rounded-lg px-8 text-lg font-bold">
                <Link to="/diagnostico-gratuito">
                  Quero um diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-[48px] rounded-lg px-8 text-lg"
                onClick={openModal}
              >
                Simular atendimento agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageState>
  )
}
