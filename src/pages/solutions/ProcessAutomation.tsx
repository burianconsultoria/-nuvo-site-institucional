import { ArrowRight, Settings } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#20D4D9'

export default function ProcessAutomation() {
  useSEO({
    title: 'Automação de Processos para PMEs | Nuvo Company',
    description:
      'Elimine tarefas manuais, conecte seus sistemas e dê à sua equipe o tempo necessário para focar na estratégia.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'Quais sistemas vocês conseguem integrar?',
      answer:
        'Qualquer sistema que possua uma API (Pipedrive, RD Station, Conta Azul, Asana, etc.).',
    },
    {
      question: 'O que é possível automatizar?',
      answer:
        'Emissão de contratos, envio de notas fiscais, alertas no WhatsApp, cadastro de clientes, entre outros.',
    },
    {
      question: 'É seguro?',
      answer:
        'Sim, utilizamos plataformas robustas e seguras como Make e n8n, garantindo a integridade dos dados.',
    },
    {
      question: 'Preciso trocar os sistemas que já uso?',
      answer: 'Não. Nossa automação faz os seus sistemas atuais conversarem entre si.',
    },
    {
      question: 'Qual o impacto no meu time?',
      answer:
        'A equipe se livra de tarefas de copiar e colar e foca em atividades que geram receita.',
    },
    {
      question: 'Como saber se a automação está funcionando?',
      answer: 'Você terá um painel de monitoramento e alertas em caso de falhas.',
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer: 'Projetos de automação simples podem ser entregues em poucos dias.',
    },
    {
      question: 'Vocês oferecem suporte pós-implementação?',
      answer:
        'Sim. Mantemos os fluxos rodando perfeitamente mediante um plano de suporte contínuo.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
          <div
            className="inline-flex items-center justify-center p-3 rounded-xl mb-6"
            style={{ backgroundColor: `${THEME_COLOR}20`, color: THEME_COLOR }}
          >
            <Settings className="w-8 h-8" />
          </div>
          <h1 className="text-[32px] md:text-[48px] font-heading font-bold tracking-tight text-foreground mb-6">
            Automação de Processos Operacionais — Elimine o Trabalho Manual Repetitivo
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            Conectamos seus aplicativos, CRMs, ERPs e ferramentas de comunicação para que eles
            conversem entre si. O resultado? Um fluxo de trabalho contínuo onde a tecnologia faz o
            trabalho pesado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#000' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Quero automatizar meus processos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-[44px] rounded-lg px-8 text-lg"
              onClick={openModal}
            >
              Calcular ROI da automação
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Seus colaboradores gastam horas copiando informações de um e-mail para um Excel, depois para um CRM e, por fim, para um sistema financeiro."
          problem="O trabalho manual causa erros de digitação, esquecimentos e informações inconsistentes, exigindo microgerenciamento constante."
          implication="Seu negócio não escala. Se as vendas dobrarem amanhã, o time administrativo entrará em colapso sem contratar mais pessoas."
          needPayoff="Sistemas integrados funcionam sozinhos no background. Você ganha previsibilidade, segurança nos dados e a empresa pode crescer sem inchar a folha de pagamento."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
