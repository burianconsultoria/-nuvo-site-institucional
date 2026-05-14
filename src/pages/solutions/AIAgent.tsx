import { ArrowRight, MessageSquare } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#7E61FF'

export default function AIAgent() {
  useSEO({
    title: 'Agentes de IA para Atendimento e Vendas | Nuvo Company',
    description:
      'Automatize seu WhatsApp com Inteligência Artificial, qualifique leads 24/7 e nunca mais perca uma oportunidade comercial.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'A IA parece um robô conversando?',
      answer:
        'Não. Utilizamos modelos avançados de linguagem (como GPT-4) treinados com o tom de voz da sua marca, garantindo diálogos naturais.',
    },
    {
      question: 'O agente responde fora do horário comercial?',
      answer:
        'Sim. A grande vantagem é que ele está disponível 24 horas por dia, 7 dias por semana.',
    },
    {
      question: 'Posso integrar com meu CRM?',
      answer:
        'Sim. O Agente de IA pode enviar leads qualificados diretamente para o Pipedrive, HubSpot, ou outro CRM.',
    },
    {
      question: 'Como ele sabe o que responder?',
      answer:
        'Treinamos o agente usando seus materiais em PDF, sites, FAQs e histórico de conversas.',
    },
    {
      question: 'Ele consegue agendar reuniões?',
      answer:
        'Sim. Integramos com sua agenda (Google Calendar, Calendly) para ele marcar as calls automaticamente.',
    },
    {
      question: 'O que acontece se ele não souber a resposta?',
      answer: 'Ele transfere a conversa para um atendente humano do seu time de forma fluida.',
    },
    {
      question: 'Qualquer empresa pode usar?',
      answer: 'Ideal para negócios com alto volume de atendimento no WhatsApp ou site.',
    },
    {
      question: 'Quais os custos envolvidos?',
      answer:
        'Além do setup inicial, existe um custo pelo uso da infraestrutura de IA e WhatsApp Oficial.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <div
          className="bg-[#1C1C28] text-white py-24 px-4 text-center relative border-b-4"
          style={{ borderColor: THEME_COLOR }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-8"
              style={{ backgroundColor: `${THEME_COLOR}33`, color: THEME_COLOR }}
            >
              <MessageSquare className="w-4 h-4" /> Inteligência Artificial
            </div>
            <h1 className="text-[32px] md:text-[48px] font-heading font-extrabold tracking-tight mb-6">
              Agentes de IA para Atendimento — Sua Empresa Disponível 24/7 no WhatsApp
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tenha um assistente virtual inteligente capaz de conversar de forma natural,
              qualificar potenciais clientes, agendar reuniões e responder dúvidas 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
                className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
                onClick={openModal}
              >
                Falar com um especialista em IA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-[44px] rounded-lg px-8 text-lg text-white border-white/20 hover:bg-white/10"
                onClick={openModal}
              >
                Simular atendimento agora
              </Button>
            </div>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua equipe passa o dia inteiro respondendo as mesmas dúvidas básicas de clientes no WhatsApp."
          problem="Leads que chegam à noite ou finais de semana esfriam por falta de resposta imediata, e o time perde tempo qualificando contatos sem perfil."
          implication="Você perde vendas para a concorrência que atende mais rápido e sua equipe se desgasta em tarefas de baixo valor agregado."
          needPayoff="Com um Agente de IA, cada lead é atendido e qualificado instantaneamente, 24/7. O time de vendas só recebe contatos quentes, prontos para fechar."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
