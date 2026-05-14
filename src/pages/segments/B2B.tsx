import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Monitor,
  FileText,
  Calendar,
  Users,
  LayoutDashboard,
  MessageSquare,
  BriefcaseBusiness,
  Zap,
  Clock,
  TrendingUp,
  Building2,
  BellRing,
  CreditCard,
  RefreshCw,
  FolderOpen,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function B2B() {
  useSEO({
    title: 'Automação para Serviços B2B | Nuvo',
    description:
      'Processo comercial longo, lead que se perde, proposta que demora? Automatize seu fluxo B2B com a Nuvo. Geração automática de propostas, onboarding digital e follow-up inteligente. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Como a Nuvo ajuda no ciclo de vendas B2B?',
      answer:
        'Ajudamos estruturando CRMs inteligentes e automatizando geração de propostas e follow-up, garantindo que o vendedor foque apenas na negociação, reduzindo drasticamente o tempo do ciclo.',
    },
    {
      question: 'É possível automatizar o onboarding de clientes?',
      answer:
        'Sim! Criamos fluxos onde o novo cliente recebe um acesso exclusivo e intuitivo para o envio de documentos e preenchimento de formulários, sendo tudo validado automaticamente para a equipe de entrega.',
    },
    {
      question: 'Vocês integram com sistemas de gestão de projetos?',
      answer:
        'Sim. Conectamos seu CRM comercial direto com ferramentas técnicas como Jira, Trello, Asana, Monday, ou até mesmo com outros CRMs e ERPs próprios.',
    },
    {
      question: 'Como reduzir o tempo de resposta comercial?',
      answer:
        'Com alertas em tempo real no WhatsApp ou Slack e geração de contratos padronizados via templates pré-aprovados, permitindo enviar a proposta ao lead com um único clique.',
    },
    {
      question: 'Consigo medir a lucratividade por projeto?',
      answer:
        'Construímos dashboards gerenciais que cruzam os custos de equipe e tempo investido versus o escopo do contrato fechado, oferecendo visão em tempo real das margens de lucro.',
    },
    {
      question: 'O investimento vale para empresas pequenas?',
      answer:
        'Com certeza. A automação permite que empresas menores e mais enxutas compitam de igual para igual com grandes players, garantindo uma qualidade e rapidez de atendimento impecáveis.',
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer:
        'Em média, um projeto de estruturação B2B focado em automação e CRM leva de 4 a 8 semanas, dependendo da profundidade do fluxo e complexidade das integrações.',
    },
    {
      question: 'Como começar?',
      answer:
        'Basta agendar um diagnóstico gratuito conosco. Vamos mapear o seu processo comercial atual, entender onde estão os gargalos e apresentar um plano de ação automatizado sob medida.',
    },
  ]

  const systems = [
    {
      title: 'Gestão de propostas comerciais',
      desc: 'Geração automática de orçamentos padronizados e interativos.',
      icon: FileText,
    },
    {
      title: 'Portal do cliente B2B',
      desc: 'Ambiente exclusivo para o cliente acompanhar projetos, status e faturas.',
      icon: Monitor,
    },
    {
      title: 'Gestão de contratos recorrentes',
      desc: 'Controle de vigência, reajustes e renovações de forma autônoma.',
      icon: Clock,
    },
    {
      title: 'Central de onboarding de clientes',
      desc: 'Coleta de dados e documentos iniciais sem fricção e de forma 100% digital.',
      icon: Users,
    },
    {
      title: 'Gestão de equipes externas',
      desc: 'Roteirização e acompanhamento remoto de chamados e visitas técnicas.',
      icon: Building2,
    },
    {
      title: 'Agenda comercial inteligente',
      desc: 'Agendamento automático com qualificação prévia e lembretes integrados.',
      icon: Calendar,
    },
    {
      title: 'Dashboard de performance comercial',
      desc: 'Visão em tempo real do funil, taxas de conversões e gargalos na venda.',
      icon: LayoutDashboard,
    },
    {
      title: 'Sistema de NPS e satisfação',
      desc: 'Pesquisas e feedbacks automatizados após cada entrega ou milestone atingido.',
      icon: MessageSquare,
    },
    {
      title: 'Gestão de tarefas e projetos',
      desc: 'Organização profunda das entregas, apontamento de horas e cronograma.',
      icon: BriefcaseBusiness,
    },
  ]

  const automations = [
    { title: 'Automação de qualificação de leads', icon: Zap },
    { title: 'Automação de geração de propostas', icon: FileText },
    { title: 'Automação de follow-up comercial', icon: BellRing },
    { title: 'Automação de onboarding de clientes', icon: Users },
    { title: 'Automação de comunicação de status', icon: Monitor },
    { title: 'Automação de cobrança recorrente', icon: CreditCard },
    { title: 'Automação de renovação de contratos', icon: RefreshCw },
    { title: 'Automação de pesquisa de satisfação', icon: TrendingUp },
    { title: 'Automação de relatórios gerenciais', icon: LayoutDashboard },
    { title: 'Automação de agendamento de reuniões', icon: Calendar },
    { title: 'Automação de gestão de tarefas da equipe', icon: BriefcaseBusiness },
    { title: 'Automação de cobrança de documentos', icon: FolderOpen },
  ]

  const cases = [
    {
      title: 'Consultoria Empresarial',
      location: 'São Paulo, SP',
      revenue: 'Faturamento R$ 2,8M/ano',
      description:
        'Redução de 80% no tempo de emissão de propostas, resultando em +35% de conversão de leads com follow-up automatizado de clientes parados.',
    },
    {
      title: 'Agência de Eventos Corporativos',
      location: 'Rio de Janeiro, RJ',
      revenue: 'Faturamento R$ 2,1M/ano',
      description:
        'Automação de onboarding e aprovação de fornecedores B2B, reduzindo erros de escopo a zero e permitindo dobrar a capacidade total de atendimento.',
    },
    {
      title: 'Gestora de RH Terceirizado',
      location: 'São Paulo, SP',
      revenue: 'Faturamento R$ 38M/ano',
      description:
        'Implementação de portal de chamados e automação de status de vagas B2B, elevando a transparência e o NPS da carteira de clientes de 72 para 94.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Briefcase className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Automação para Serviços B2B — Processo Comercial e Entrega sem Gargalo
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Descubra como empresas de serviços corporativos (B2B) utilizam automação e
              inteligência para reduzir o tempo de fechamento de contratos, integrar equipes e
              entregar mais valor para seus clientes.
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

        {/* GEO Block */}
        <div className="py-16 bg-slate-50">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              O que a Nuvo faz por empresas de serviços B2B
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Vender para outras empresas exige relacionamento, aprovações múltiplas e um ciclo de
              decisão mais longo. O dilema do mercado B2B é que muitas operações escalam a
              complexidade sem escalar o sistema de gestão. O resultado? Propostas esquecidas na
              caixa de entrada, contratos parados na mesa do cliente e um processo de onboarding
              demorado, feito via trocas infinitas de e-mails e planilhas soltas.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              A Nuvo atua exatamente na construção de uma esteira invisível que organiza o fluxo de
              ponta a ponta. Criamos automações sob medida e portais que unificam o processo
              comercial, garantindo que nenhum lead esfrie e que seu novo cliente tenha uma
              experiência digital fluida, desde a primeira reunião até a entrega do serviço
              especializado.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-slate-800">
              Quando a automação B2B faz mais diferença
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#4A3EFF] shrink-0" />
                <span className="text-slate-700">
                  Ciclos de vendas longos, com mais de 30 dias de duração e vários decisores
                  envolvidos.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#4A3EFF] shrink-0" />
                <span className="text-slate-700">
                  Processo de onboarding manual, dependente de coleta de dados picada e e-mails de
                  cobrança.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#4A3EFF] shrink-0" />
                <span className="text-slate-700">
                  Dificuldade em acompanhar o status das propostas enviadas e prever faturamento do
                  mês.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg border shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#4A3EFF] shrink-0" />
                <span className="text-slate-700">
                  Desalinhamento crítico entre a equipe comercial (promessa) e a equipe técnica
                  (entrega do serviço).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* SPIN Selling Framework */}
        <SpinSellingSection
          color={THEME_COLOR}
          situationTitle="Situação — Como está seu processo comercial hoje?"
          situation="Você possui uma equipe comercial dedicada que entende muito bem do serviço, mas grande parte do tempo deles é gasto redigindo propostas extensas, preenchendo contratos e atualizando o CRM manualmente."
          problemTitle="Problema — O que está travando suas vendas B2B?"
          problem="A falta de automação faz com que leads em potencial esfriem pela demora no follow-up. Além disso, quando o contrato finalmente é assinado, a passagem de bastão para a operação técnica é ruidosa e cheia de informações perdidas."
          implicationTitle="Implicação — Quanto custa um processo B2B desorganizado?"
          implication="Você perde negócios para concorrentes mais ágeis, sofre com gargalos na entrega primária e vê seu Custo de Aquisição (CAC) inflar porque sua equipe passa mais tempo lidando com backoffice do que negociando ativamente."
          needPayoffTitle="Need-Payoff — O que muda com a automação B2B?"
          needPayoff="Ao centralizar os dados e automatizar fluxos repetitivos, seu time comercial ganha foco total, o cliente percebe o profissionalismo na sua agilidade, e a empresa consegue escalar o faturamento sem precisar inchar o quadro de funcionários operacionais."
        />

        {/* Systems Showcase Grid */}
        <div className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Sistemas que criamos para empresas de serviços como a sua
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((s, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${THEME_COLOR}15`, color: THEME_COLOR }}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Showcase Grid */}
        <div className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Automações que transformam a operação de serviços B2B
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {automations.map((auto, index) => (
                <div
                  key={index}
                  className="p-5 border rounded-xl flex flex-col items-center text-center bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <auto.icon className="w-8 h-8 mb-3" style={{ color: THEME_COLOR }} />
                  <span className="font-semibold text-sm text-slate-800">{auto.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Resultados reais de quem já passou pela Nuvo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((c, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border shadow-sm flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{c.title}</h3>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                      <span>{c.location}</span>
                      <span className="text-[#4A3EFF] bg-[#4A3EFF]/10 px-2 py-1 rounded-md">
                        {c.revenue}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">"{c.description}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        {/* Conversion Focused CTA */}
        <div className="py-20 bg-slate-900 text-white text-center px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para organizar seu processo comercial?
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Agende um diagnóstico sem custo e descubra como a Nuvo pode desenhar as automações e
              sistemas ideais para transformar as vendas e as entregas da sua empresa B2B.
            </p>
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: THEME_COLOR }}
              className="h-[52px] rounded-lg px-8 text-lg font-bold hover:opacity-90 transition-opacity"
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
