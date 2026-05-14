import { Link } from 'react-router-dom'
import {
  Megaphone,
  ArrowRight,
  FileText,
  CheckSquare,
  BarChart,
  LayoutDashboard,
  Kanban,
  TrendingUp,
  FolderKanban,
  Calendar,
  Briefcase,
  Inbox,
  Clock,
  LineChart,
  CreditCard,
  PhoneCall,
  MessageSquare,
  FolderOutput,
  Smile,
  UserPlus,
  AlertTriangle,
  CalendarDays,
  Receipt,
  Building,
  Building2,
  BriefcaseBusiness,
} from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Agencies() {
  useSEO({
    title: 'Automação para Agências de Marketing e Publicidade | Nuvo',
    description:
      'Briefing perdido, aprovação no WhatsApp, relatório manual que consome dias? Automatize o fluxo da sua agência. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const systems = [
    {
      title: 'Central de briefings',
      description:
        'Formulários dinâmicos que validam informações e organizam pedidos automaticamente antes de chegarem à equipe de criação.',
      icon: FileText,
    },
    {
      title: 'Plataforma de aprovação de artes',
      description:
        'Portais dedicados para clientes revisarem peças e campanhas, mantendo o histórico de alterações e aprovações formalizado.',
      icon: CheckSquare,
    },
    {
      title: 'Gerador de relatórios de performance',
      description:
        'Dashboards que extraem dados ao vivo do Meta Ads, Google Ads e Analytics, consolidando resultados sem uso de planilhas.',
      icon: BarChart,
    },
    {
      title: 'Portal do cliente para agências',
      description:
        'Um ambiente centralizado onde o cliente acompanha o status da sua conta, visualiza faturas e solicita novas demandas.',
      icon: LayoutDashboard,
    },
    {
      title: 'Gestão de projetos e tarefas',
      description:
        'Fluxos visuais integrados (Kanban) que garantem a distribuição correta de demandas e clareza total sobre os gargalos.',
      icon: Kanban,
    },
    {
      title: 'Dashboard de rentabilidade por conta',
      description:
        'Cálculo automático do tempo investido vs. fee cobrado para identificar rapidamente quais clientes estão dando prejuízo.',
      icon: TrendingUp,
    },
    {
      title: 'Central de assets e materiais',
      description:
        'Bibliotecas organizadas e tagueadas para que a equipe encontre logos, vídeos e fotos sem depender de pastas avulsas.',
      icon: FolderKanban,
    },
    {
      title: 'Agenda de entregas e prazos',
      description:
        'Cronograma automatizado de publicações e deadlines, alertando o time sobre riscos de atraso de forma proativa.',
      icon: Calendar,
    },
    {
      title: 'Gestão de contratos e propostas',
      description:
        'Controle de todo o ciclo de vendas da agência, da geração da proposta comercial até a assinatura eletrônica.',
      icon: Briefcase,
    },
  ]

  const automations = [
    { title: 'Automação de captura de briefing', icon: Inbox },
    { title: 'Automação de notificação de prazos', icon: Clock },
    { title: 'Automação de relatórios de performance', icon: LineChart },
    { title: 'Automação de cobrança recorrente', icon: CreditCard },
    { title: 'Automação de follow-up de propostas', icon: PhoneCall },
    { title: 'Automação de comunicação de status', icon: MessageSquare },
    { title: 'Automação de organização de assets', icon: FolderOutput },
    { title: 'Automação de pesquisa de satisfação', icon: Smile },
    { title: 'Automação de onboarding de novos clientes', icon: UserPlus },
    { title: 'Automação de alerta de retrabalho', icon: AlertTriangle },
    { title: 'Automação de agendamento de reuniões', icon: CalendarDays },
    { title: 'Automação de faturamento por projeto', icon: Receipt },
  ]

  const cases = [
    {
      title: 'Case 1',
      porte: 'Pequeno Porte',
      description: 'Agência de marketing digital em São Paulo.',
      faturamento: 'Faturamento R$ 1,5M/ano',
      icon: BriefcaseBusiness,
    },
    {
      title: 'Case 2',
      porte: 'Pequeno Porte',
      description: 'Agência de social media no Rio de Janeiro.',
      faturamento: 'Faturamento R$ 1,1M/ano',
      icon: Building,
    },
    {
      title: 'Case 3',
      porte: 'Grande Porte',
      description: 'Agência full-service em São Paulo.',
      faturamento: 'Faturamento R$ 18M/ano',
      icon: Building2,
    },
  ]

  const faqs = [
    {
      question: 'Como a Nuvo se integra ao nosso Trello/Asana/ClickUp?',
      answer:
        'Utilizamos APIs nativas e webhooks para criar fluxos bidirecionais. Quando um cliente aprova uma proposta ou preenche um briefing, projetos e tarefas são criados automaticamente nessas ferramentas com os responsáveis já assinalados.',
    },
    {
      question: 'Nós já usamos o Monday. Vocês conseguem automatizar ele?',
      answer:
        'Sim! Conectamos o Monday aos seus canais de atendimento, formulários de briefing e geradores de relatórios. Assim, eliminamos o copy-paste diário e garantimos que o board do Monday reflita sempre a realidade da operação.',
    },
    {
      question: 'Qual é o tempo médio de retorno sobre o investimento (ROI)?',
      answer:
        'Para agências de marketing, o ROI costuma aparecer de forma consistente entre 2 a 4 meses. O ganho vem principalmente da redução drástica das horas não faturáveis e da mitigação do churn causado por falhas de atendimento e perda de prazos.',
    },
    {
      question: 'Os clientes terão dificuldade de usar o portal de aprovação?',
      answer:
        'Não. Focamos em interfaces minimalistas e intuitivas. O cliente não precisa aprender a usar um novo software complexo; muitas aprovações podem ocorrer em portais acessados com apenas um clique a partir de um alerta no WhatsApp.',
    },
    {
      question: 'É possível puxar dados do Meta Ads e Google Ads automaticamente?',
      answer:
        'Absolutamente. Construímos rotinas que extraem as métricas essenciais das plataformas de anúncios e as injetam em relatórios consolidados em PDF, Looker Studio ou portais exclusivos, prontos para enviar ao cliente no final da semana.',
    },
    {
      question: 'Como a automação ajuda a evitar o churn de clientes?',
      answer:
        'Garantindo consistência. O churn em agências geralmente nasce de pequenas quebras de expectativa: relatórios atrasados, esquecimento de campanhas ou comunicação falha. A automação assegura que o nível de serviço se mantenha impecável em escala.',
    },
    {
      question: 'A plataforma substitui nosso software de gestão financeira?',
      answer:
        'Não obrigatoriamente. Podemos sincronizar o seu CRM e a sua esteira de projetos com o seu ERP financeiro (Conta Azul, Omie, etc). Assim, quando um projeto é entregue, a nota fiscal e o boleto são gerados e enviados sem fricção.',
    },
    {
      question: 'Precisamos de uma equipe técnica para manter as automações?',
      answer:
        'Não. A Nuvo mapeia, constrói e oferece manutenção contínua para as soluções. Sua agência foca no planejamento e na execução criativa, enquanto nossa tecnologia garante que os processos operacionais funcionem em segundo plano de forma invisível.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Megaphone className="w-12 h-12 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Automação para Agências — Menos Ruído, Mais Projeto Entregue
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforme a operação da sua agência conectando vendas, briefings, aprovações e
              relatórios em fluxos que funcionam sem depender de cobranças no WhatsApp.
            </p>
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
              className="h-14 rounded-lg px-8 text-lg font-bold hover:opacity-90 transition-opacity"
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Introduction Section (BLOCO GEO) */}
        <div className="py-20 bg-slate-50">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              O que a Nuvo faz por agências
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A rotina de uma agência deveria ser focada em criatividade, mídia e estratégia. Mas,
              na prática, o caos operacional acaba dominando: e-mails perdidos, aprovações informais
              via WhatsApp e arquivos espalhados. Isso drena a energia da equipe, gera atrito com o
              cliente e devora a margem de lucro.
            </p>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              A Nuvo entra para implementar uma esteira de processos claros e sistemas
              automatizados. Transformamos o fluxo caótico em uma linha de produção inteligente,
              onde o briefing entra estruturado, as tarefas são distribuídas sem ruído e as
              aprovações ficam registradas em um só lugar.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Quando a automação de agência faz mais diferença
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Quando você sente as dores do crescimento: fragmentação de briefings, horas inteiras
              da equipe gastas montando relatórios manuais de performance e total falta de
              visibilidade sobre a rentabilidade de cada conta. Se a sua agência sofre com
              retrabalho contínuo e não consegue absorver novos contratos sem um salto proporcional
              em custos de folha, a automação deixa de ser um luxo e vira sobrevivência.
            </p>
          </div>
        </div>

        {/* SPIN Selling Section */}
        <SpinSellingSection
          color={THEME_COLOR}
          situationTitle="Situação — Como está a rotina da sua agência hoje?"
          situation="O volume de contas e projetos aumenta. Sua equipe utiliza diversas ferramentas (planilhas, e-mail, gerenciadores), mas nada está perfeitamente integrado. O WhatsApp se tornou a central oficial não documentada de pedidos informais e aprovações, dificultando o rastreio e o controle."
          problemTitle="Problema — O que está travando sua agência?"
          problem="Os briefings chegam incompletos, as peças se perdem em conversas informais e a equipe de atendimento perde horas apenas correndo atrás de informações. O tempo precioso que deveria ser investido pensando em estratégias vencedoras é desperdiçado em follow-up e organização interna."
          implicationTitle="Implicação — Quanto custa uma agência desorganizada?"
          implication="O retrabalho consome as horas estipuladas para a conta, destruindo a sua rentabilidade. O cliente fica insatisfeito com atrasos, gerando atritos e aumentando o churn. O crescimento do negócio trava completamente na sobrecarga dos sócios e gerentes, que apagam incêndios o dia todo."
          needPayoffTitle="Need-Payoff — O que muda com a automação na agência?"
          needPayoff="Com fluxos desenhados e tecnologia trabalhando a seu favor, os dados fluem sem esforço. A equipe tem clareza absoluta do que fazer, os clientes aprovam em portais profissionais e relatórios são gerados em minutos. A agência ganha margem, recupera previsibilidade e escala com qualidade."
        />

        {/* Systems Section */}
        <div className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">
              Sistemas Sob Medida para Agências
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {systems.map((system, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${THEME_COLOR}15`, color: THEME_COLOR }}
                  >
                    <system.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{system.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{system.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automations Catalog Section */}
        <div className="py-24 bg-slate-50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">
              Catálogo de Automações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {automations.map((automation, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${THEME_COLOR}15`, color: THEME_COLOR }}
                  >
                    <automation.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-800 leading-tight">{automation.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cases Section */}
        <div className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Resultados Comprovados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center"
                >
                  <item.icon className="w-12 h-12 mb-6" style={{ color: THEME_COLOR }} />
                  <span className="text-sm font-medium tracking-wider uppercase mb-2 text-slate-400">
                    {item.porte}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="w-full pt-6 border-t border-slate-700">
                    <span className="block font-bold text-lg text-white">{item.faturamento}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        {/* Final CTA Section */}
        <div className="py-24" style={{ backgroundColor: THEME_COLOR }}>
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Pronto para sua agência voltar a criar?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Chega de perder tempo com tarefas mecânicas, planilhas quebradas e clientes
              descontentes. Transforme a sua operação agora.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 h-16 rounded-xl px-10 text-xl font-bold transition-all shadow-lg hover:shadow-xl"
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageState>
  )
}
