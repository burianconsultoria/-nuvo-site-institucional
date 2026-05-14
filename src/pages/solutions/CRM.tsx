import { ArrowRight } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#2F7CFF'

export default function CRM() {
  useSEO({
    title: 'Organização de Vendas e CRM para PME | Nuvo Company',
    description:
      'Implemente um CRM que sua equipe vai amar usar. Centralize clientes e garanta que nenhum follow-up seja esquecido.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'Vocês vendem o software de CRM?',
      answer:
        'Não. Nós implementamos as melhores soluções do mercado (como Pipedrive, HubSpot, Kommo) focando no SEU processo.',
    },
    {
      question: 'Minha equipe acha CRM muito burocrático. Como resolver?',
      answer:
        'A burocracia ocorre quando o CRM é mal configurado. Nós parametrizamos o sistema para ser um facilitador, não um fiscal de vendas.',
    },
    {
      question: 'Vocês treinam o time comercial?',
      answer:
        'Sim. Após a implementação, realizamos treinamentos práticos com a equipe para garantir a adoção total da ferramenta.',
    },
    {
      question: 'Podem integrar o CRM com o WhatsApp?',
      answer:
        'Com certeza. Garantimos que todas as conversas do WhatsApp fiquem registradas diretamente no card do cliente.',
    },
    {
      question: 'Como fica a transição de dados da planilha para o CRM?',
      answer:
        'Nós cuidamos de toda a importação e higienização dos dados para você começar com tudo organizado.',
    },
    {
      question: 'Quanto tempo leva uma implementação?',
      answer:
        'Dependendo do número de processos, de 2 a 4 semanas para estar rodando perfeitamente.',
    },
    {
      question: 'Vou ter suporte depois de implementado?',
      answer: 'Oferecemos acompanhamento pós-projeto para ajustes finos e dúvidas da equipe.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-white min-h-screen">
        <div
          className="bg-[#1C1C28] text-white py-24 px-4 text-center relative border-b-4"
          style={{ borderColor: THEME_COLOR }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <h1 className="text-[32px] md:text-[48px] font-heading font-extrabold tracking-tight mb-6">
              CRM e Organização Comercial — Nunca Mais Perca um Lead por Falta de Follow-up
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deixamos a confusão de planilhas para trás. Implementamos e parametrizamos sistemas de
              CRM aderentes ao seu processo de vendas, garantindo adoção pelo time e clareza para a
              gestão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
                className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
                onClick={openModal}
              >
                Organizar meu comercial agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-[44px] rounded-lg px-8 text-lg text-white border-white/20 hover:bg-white/10"
                onClick={openModal}
              >
                Baixar guia de follow-up
              </Button>
            </div>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Suas vendas são controladas em planilhas do Excel ou até no caderno, e cada vendedor gerencia a sua própria carteira sem padrão."
          problem="Você não sabe quantos leads entram, quantos são perdidos e, principalmente, não há lembretes de follow-up. Muitas vendas são esquecidas."
          implication="Dinheiro fica na mesa diariamente. Sem histórico e sem métricas de conversão, é impossível prever receita e bater metas de forma consistente."
          needPayoff="Com um CRM bem implementado, seu funil é cristalino. A equipe sabe exatamente para quem ligar hoje, o gestor enxerga o desempenho e as vendas aumentam naturalmente."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
