import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Scale,
  CheckCircle2,
  CalendarClock,
  FileText,
  Users,
  FolderSearch,
  MapPin,
  BarChart,
  CreditCard,
  Smile,
  Calculator,
  Search,
  PenTool,
  MessageSquare,
  Timer,
  UploadCloud,
  DollarSign,
  Paperclip,
  PieChart,
  BookOpen,
  UserPlus,
  AlertTriangle,
  Bell,
  Building2,
  Briefcase,
  Landmark,
} from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Lawyers() {
  useSEO({
    title: 'Automação para Escritórios de Advocacia | Nuvo',
    description:
      'Liberte seus advogados de tarefas administrativas. Automatizamos petições, gestão de prazos e comunicação com clientes. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Como funciona o controle de prazos processuais?',
      answer:
        'O sistema centraliza todos os prazos em um único calendário e envia alertas automáticos (30, 15, 7 dias e 24h antes) para os advogados responsáveis, reduzindo o risco de perda a zero.',
    },
    {
      question: 'A automação integra com os tribunais (PJe, e-SAJ, etc)?',
      answer:
        'Sim. Por meio de integrações (APIs ou robôs), extraímos os andamentos e até realizamos o protocolo de petições automaticamente nos sistemas dos tribunais.',
    },
    {
      question: 'O gerador de petições serve para casos complexos?',
      answer:
        'O gerador é ideal para petições padrão, iniciais e peças repetitivas. Ele coleta os dados do cliente em um formulário ou banco de dados e monta o documento. Casos muito específicos ainda exigem a revisão intelectual do advogado.',
    },
    {
      question: 'Como os clientes são atualizados sobre os processos?',
      answer:
        'Toda vez que há uma movimentação no tribunal, o sistema identifica, traduz para uma linguagem mais simples e envia uma mensagem via WhatsApp ou e-mail automaticamente para o cliente.',
    },
    {
      question: 'A gestão de honorários cobra os clientes em atraso?',
      answer:
        'Sim, o sistema automatiza o faturamento e envia lembretes de cobrança com regras pré-definidas (ex: no dia do vencimento, D+3, D+7), facilitando a rotina do financeiro.',
    },
    {
      question: 'Preciso contratar alguém de TI para usar o sistema?',
      answer:
        'Não. Nossas soluções são entregues prontas, em nuvem, e nós cuidamos da manutenção e suporte técnico. A interface é amigável e treinamos a sua equipe.',
    },
    {
      question: 'Quanto tempo demora a implementação?',
      answer:
        'O tempo varia de acordo com o tamanho do escritório e a quantidade de automações. Projetos iniciais (ex: controle de prazos e gerador de peças) costumam estar rodando em poucas semanas.',
    },
    {
      question: 'Como começar a automatizar meu escritório?',
      answer:
        'O primeiro passo é realizar o nosso diagnóstico gratuito. Entenderemos a sua rotina atual, identificaremos os gargalos e proporemos um plano de automação sob medida.',
    },
  ]

  const systems = [
    {
      icon: CalendarClock,
      title: 'Gestão de prazos processuais',
      desc: 'Calendário centralizado com alertas automáticos (30, 15, 7 dias, 24h).',
    },
    {
      icon: FileText,
      title: 'Gerador de petições padrão',
      desc: 'Ferramenta baseada em modelos (templates) para elaboração rápida.',
    },
    {
      icon: Users,
      title: 'Portal do cliente jurídico',
      desc: 'Espaço self-service para clientes acompanharem andamentos processuais.',
    },
    {
      icon: FolderSearch,
      title: 'Central de documentos jurídicos',
      desc: 'Pastas digitais com pesquisa avançada por palavras-chave.',
    },
    {
      icon: MapPin,
      title: 'Gestão de agenda de audiências',
      desc: 'Lembretes automatizados com sugestões de localização e roteiro.',
    },
    {
      icon: BarChart,
      title: 'Dashboard de performance',
      desc: 'Métricas em tempo real sobre taxas de sucesso e carga de trabalho.',
    },
    {
      icon: CreditCard,
      title: 'Gestão de honorários e contratos',
      desc: 'Faturamento automatizado e alertas de renovação e cobrança.',
    },
    {
      icon: Smile,
      title: 'Sistema de NPS e satisfação',
      desc: 'Pesquisas automáticas após marcos relevantes do processo.',
    },
    {
      icon: Calculator,
      title: 'Gestão de custas e despesas',
      desc: 'Cálculo automatizado e rastreamento de custas judiciais.',
    },
  ]

  const automations = [
    {
      icon: Search,
      title: 'Extração de andamentos',
      desc: 'Busca automática de atualizações nos sistemas dos tribunais.',
    },
    {
      icon: PenTool,
      title: 'Geração de petições iniciais',
      desc: 'Elaboração baseada em respostas de questionários estruturados.',
    },
    {
      icon: MessageSquare,
      title: 'Comunicação de andamentos',
      desc: 'Notificações automáticas via WhatsApp para clientes a cada mudança.',
    },
    {
      icon: Timer,
      title: 'Controle de prazos',
      desc: 'Cálculo automático com base no tipo de ação e tribunal específico.',
    },
    {
      icon: UploadCloud,
      title: 'Protocolo de petições',
      desc: 'Integração com sistemas eletrônicos (PJe, e-SAJ) para protocolo direto.',
    },
    {
      icon: DollarSign,
      title: 'Cobrança de honorários',
      desc: 'Regras automatizadas de faturamento e cobrança (D+1, D+3, D+7).',
    },
    {
      icon: Paperclip,
      title: 'Juntada de documentos',
      desc: 'Classificação e anexação automática de arquivos recebidos.',
    },
    {
      icon: PieChart,
      title: 'Relatórios gerenciais',
      desc: 'Compilação mensal e automática de dados do escritório.',
    },
    {
      icon: BookOpen,
      title: 'Pesquisa de jurisprudência',
      desc: 'Busca automática de precedentes em tribunais superiores.',
    },
    {
      icon: UserPlus,
      title: 'Onboarding de novos clientes',
      desc: 'Envio automático de kits de boas-vindas e ficha de cadastro.',
    },
    {
      icon: AlertTriangle,
      title: 'Alerta de documentos vencidos',
      desc: 'Monitoramento de validade de procurações, licenças e certidões.',
    },
    {
      icon: Bell,
      title: 'Lembretes de audiências',
      desc: 'Resumo automatizado enviado ao advogado 24h antes do evento.',
    },
  ]

  const cases = [
    {
      icon: Briefcase,
      title: 'Escritório Civil (SP)',
      size: 'Pequeno Porte - 300 processos',
      results: [
        'Zero perda de prazos',
        'Redução de 70% no tempo de elaboração de peças',
        'Aumento de 45% na satisfação dos clientes',
      ],
    },
    {
      icon: Building2,
      title: 'Escritório Trabalhista (RJ)',
      size: 'Pequeno Porte - Especializado',
      results: [
        'Tempo de elaboração de iniciais caiu de 8h para 1h',
        '40% a mais de casos gerenciados',
        'Aumento de 50% na conversão de leads',
      ],
    },
    {
      icon: Landmark,
      title: 'Sociedade de Advogados (SP)',
      size: 'Grande Porte - 2.500 processos',
      results: [
        'Zero perda de prazos em 18 meses',
        '80% menos tempo gasto atualizando clientes',
        'Crescimento de 30% na carteira sem novas contratações',
      ],
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen pb-20">
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Scale className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Automação para Advogados — Menos Burocracia, Mais Horas para o Direito
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Liberte seus advogados de tarefas administrativas. Automatizamos petições, gestão de
              prazos e comunicação com clientes, garantindo eficiência corporativa para o seu
              escritório.
            </p>
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Seu escritório gerencia centenas de processos com prazos espalhados em planilhas ou agendas físicas. A cada novo caso, a equipe perde horas na coleta de documentos e elaboração manual de petições, e o cliente sempre pergunta pelo WhatsApp como está o andamento."
          problem="Os maiores gargalos surgem da falta de integração: o processo não conversa com a agenda, que não conversa com o financeiro. A comunicação é reativa e a coleta de informações demanda um esforço braçal contínuo."
          implication="Essa desorganização aumenta o risco de perda de prazos processuais (e consequentemente, responsabilidade civil). Advogados seniores custam caro demais para atuar como assistentes administrativos, gerando um alto custo operacional."
          needPayoff="Com um ecossistema automatizado, seus prazos são controlados e alertados antes do vencimento. Petições padrão são geradas em cliques, e cada movimentação no tribunal dispara uma atualização amigável no WhatsApp do cliente."
        />

        <div className="py-24 bg-white px-4 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Sistemas e Portais Jurídicos
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Plataformas completas que construímos para centralizar a operação do seu escritório,
                desde o atendimento até o encerramento do caso.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systems.map((sys, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border bg-slate-50 hover:shadow-md transition-shadow"
                >
                  <sys.icon className="w-8 h-8 mb-4" style={{ color: THEME_COLOR }} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{sys.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{sys.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 bg-slate-50 px-4 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Automações Estratégicas</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Robôs invisíveis que executam as tarefas mais repetitivas do escritório 24 horas por
                dia, 7 dias por semana, com zero margem de erro.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {automations.map((auto, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${THEME_COLOR}15` }}>
                      <auto.icon className="w-5 h-5" style={{ color: THEME_COLOR }} />
                    </div>
                    <h3 className="font-semibold text-slate-900 leading-tight">{auto.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm mt-auto">{auto.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 bg-white px-4 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Resultados na Prática</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Veja o impacto real da automação em escritórios de diferentes portes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border bg-slate-50 relative overflow-hidden group hover:border-slate-300 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <c.icon className="w-32 h-32" />
                  </div>
                  <c.icon className="w-10 h-10 mb-6 relative z-10" style={{ color: THEME_COLOR }} />
                  <h3 className="text-xl font-bold text-slate-900 mb-1 relative z-10">{c.title}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-6 relative z-10">{c.size}</p>
                  <ul className="space-y-3 relative z-10">
                    {c.results.map((res, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <CheckCircle2
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: THEME_COLOR }}
                        />
                        <span className="text-slate-700 text-sm leading-relaxed">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        <div className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pronto para modernizar seu escritório?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Agende um diagnóstico gratuito com nossos especialistas em automação jurídica.
              Descubra quanto tempo e dinheiro seu escritório pode economizar.
            </p>
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-[56px] rounded-xl px-10 text-lg font-bold hover:opacity-90"
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageState>
  )
}
