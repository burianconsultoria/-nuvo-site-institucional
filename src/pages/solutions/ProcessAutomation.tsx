import { ArrowRight, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'
import { WhatIsAutomationSection } from '@/components/WhatIsAutomationSection'
import { AutomationExamplesSection } from '@/components/AutomationExamplesSection'
import { AutomationMarketInsightsSection } from '@/components/AutomationMarketInsightsSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#20D4D9'

export default function ProcessAutomation() {
  useSEO({
    title: 'Automação de Processos Operacionais para PME | Nuvo',
    description:
      'Sua equipe perde horas com tarefas manuais repetitivas? Automatize fluxos com IA, integre sistemas e elimine retrabalho. 6 exemplos práticos de automação. Nossos clientes recuperam em média 120h/mês. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Preciso trocar meus sistemas atuais?',
      answer:
        'Não. Nossa automação conecta e faz os sistemas que você já usa conversarem entre si via API.',
    },
    {
      question: 'A automação é cara?',
      answer:
        'O investimento se paga rapidamente com o tempo poupado pela equipe e a eliminação drástica de erros operacionais que custam caro ao caixa.',
    },
    {
      question: 'É seguro conectar meus sistemas?',
      answer:
        'Sim. Utilizamos plataformas de integração robustas e validadas mundialmente, com criptografia de ponta a ponta e total segurança dos dados.',
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer:
        'Projetos iniciais de automação simples podem ser entregues em poucos dias, enquanto fluxos mais complexos levam algumas semanas.',
    },
    {
      question: 'E se uma automação falhar?',
      answer:
        'Você terá monitoramento constante e nossa equipe de suporte recebe alertas em tempo real para atuar na correção antes mesmo de você notar.',
    },
    {
      question: 'Que tipo de processo pode ser automatizado?',
      answer:
        'Praticamente qualquer tarefa digital repetitiva, baseada em regras e dados estruturados, usando sistemas modernos que possuam API.',
    },
    {
      question: 'Minha equipe vai perder o emprego?',
      answer:
        'Pelo contrário, eles deixarão de ser "robôs" copiadores de dados para assumir papéis mais analíticos, criativos e focados na experiência do cliente.',
    },
    {
      question: 'Vocês dão suporte após a implementação?',
      answer:
        'Sim, oferecemos planos de manutenção e suporte contínuo para garantir que todas as engrenagens continuem rodando sem interrupções.',
    },
    {
      question: 'Precisamos de um servidor próprio?',
      answer:
        'Não, tudo roda de forma segura na nuvem por meio de ferramentas como Make, n8n ou Zapier, sem exigir infraestrutura de TI local.',
    },
    {
      question: 'Como sei qual processo automatizar primeiro?',
      answer:
        'Com o nosso diagnóstico gratuito, mapeamos os gargalos operacionais da sua empresa e priorizamos as automações que trarão o maior retorno.',
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
            Automação de Processos para PME — Elimine o Trabalho Manual e Recupere Horas Produtivas
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            Sua equipe perde horas com tarefas manuais repetitivas? Automatize fluxos com IA,
            integre sistemas e elimine retrabalho. Nossos clientes recuperam em média 120h/mês.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#000' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
            >
              <Link to="/diagnostico-gratuito">
                Quero um diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-[44px] rounded-lg px-8 text-lg"
            >
              <Link to="/cases">Ver resultados que você pode alcançar</Link>
            </Button>
          </div>
        </div>

        <WhatIsAutomationSection color={THEME_COLOR} />

        <SpinSellingSection
          color={THEME_COLOR}
          situation="A rotina de 80% das PMEs é marcada por 40% do tempo gasto em tarefas operacionais."
          problem="O problema são os vilões ocultos: cadastrar na planilha manual, digitação repetitiva de dados do cliente, gerar relatórios na mão, e-mails copiados e colados."
          implication="Custo invisível gigantesco: 10 funcionários x 3h/dia = mais de R$ 24.000/mês jogados fora em tempo que não gera receita. Além de estresse e perda de talentos."
          needPayoff="Devolver tempo ao time. Redução de 90% em erros, execução 10x mais rápida, pessoas focadas no cliente."
        />

        <AutomationExamplesSection color={THEME_COLOR} />

        <AutomationMarketInsightsSection color={THEME_COLOR} />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
