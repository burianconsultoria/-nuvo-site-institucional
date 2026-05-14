import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Factory,
  Cog,
  CheckCircle2,
  TrendingUp,
  LayoutDashboard,
  Truck,
  Percent,
  Box,
  ShieldCheck,
  Wrench,
  Globe,
  Zap,
} from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Industries() {
  useSEO({
    title: 'Automação para Indústrias | Nuvo',
    description:
      'Reduza falhas de comunicação entre o comercial e o chão de fábrica. Integre pedidos, produção e estoque com automação inteligente. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Como a Nuvo integra seus sistemas com nosso ERP atual (SAP, TOTVS, etc.)?',
      answer:
        'Utilizamos APIs e webhooks seguros para conectar nossas soluções aos ERPs de mercado, garantindo tráfego de dados bidirecional.',
    },
    {
      question: 'É possível monitorar o chão de fábrica em tempo real?',
      answer:
        'Sim, criamos painéis (dashboards) que coletam dados de apontamentos de produção e exibem o status em tempo real nas TVs da fábrica.',
    },
    {
      question: 'Quanto tempo leva a implementação de uma automação?',
      answer:
        'Projetos focados e automações iniciais podem ser implementados e testados em 3 a 5 semanas.',
    },
    {
      question: 'Vocês fornecem o hardware para os operadores (tablets, coletores)?',
      answer:
        'Nós focamos 100% no software (sistemas e automações). Nossos sistemas rodam em qualquer tablet, celular ou computador com navegador de internet.',
    },
    {
      question: 'As automações de compras podem aprovar orçamentos sozinhas?',
      answer:
        'Sim, configuramos regras de negócios (por exemplo, aprovação automática para valores abaixo de R$ 5.000 ou se estiver dentro da variação de preço aceitável).',
    },
    {
      question: 'Os representantes comerciais terão acesso ao estoque?',
      answer:
        'Podemos criar um portal ou aplicativo específico para representantes, mostrando apenas o estoque disponível, sem expor dados financeiros internos.',
    },
    {
      question: 'Precisamos de uma equipe de TI interna para manter o sistema?',
      answer:
        'Não. A Nuvo cuida da infraestrutura em nuvem, manutenção e evolução contínua da plataforma para que sua indústria foque no que faz melhor.',
    },
    {
      question: 'Como funciona a segurança dos dados dos nossos produtos?',
      answer:
        'Utilizamos criptografia de ponta a ponta e controle de acesso rigoroso por perfil de usuário, garantindo que o segredo industrial e dados financeiros fiquem protegidos.',
    },
  ]

  const systems = [
    { name: 'Gestão de ordens de produção', icon: Cog },
    { name: 'Controle de estoque inteligente', icon: Box },
    { name: 'Rastreamento de lotes', icon: ShieldCheck },
    { name: 'Controle de qualidade digital', icon: CheckCircle2 },
    { name: 'Gestão de manutenção industrial', icon: Wrench },
    { name: 'Portal do fornecedor', icon: Globe },
    { name: 'Painel de indicadores de produção', icon: LayoutDashboard },
    { name: 'Gestão de expedição e logística', icon: Truck },
    { name: 'Controle de comissões industriais', icon: Percent },
  ]

  const automations = [
    'Automação do fluxo de pedidos',
    'Automação de cotação com fornecedores',
    'Automação de emissão de notas fiscais',
    'Automação de controle de qualidade',
    'Automação de manutenção preventiva',
    'Automação de compras recorrentes',
    'Automação de comunicação com clientes',
    'Automação de relatórios de produção',
    'Automação de rastreamento de matéria-prima',
    'Automação de faturamento recorrente',
    'Automação de onboarding de novos fornecedores',
    'Automação de alerta de desvio de padrão',
  ]

  const cases = [
    {
      title: 'Indústria Gráfica',
      revenue: 'Faturamento R$ 2.5M/ano',
      result: 'Redução de 95% nos erros de digitação e retrabalho na pré-impressão.',
    },
    {
      title: 'Fábrica de Confecções',
      revenue: 'Faturamento R$ 3.5M/ano',
      result: 'Aumento de 40% no giro de estoque com previsibilidade de matéria-prima.',
    },
    {
      title: 'Indústria Alimentícia',
      revenue: 'Faturamento R$ 72M/ano',
      result:
        'Rastreabilidade completa de lotes e automação de 100% da emissão de laudos de qualidade, economizando horas da equipe.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
            <Factory className="w-16 h-16 mx-auto mb-6 text-[#4A3EFF]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Automação para Indústrias — Menos Papel, Mais Produção e Eficiência
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Elimine as falhas de comunicação entre o comercial e o chão de fábrica. Integramos o
              seu fluxo desde a entrada do pedido até a expedição, garantindo um processo produtivo
              sem gargalos.
            </p>
            <Button
              asChild
              size="lg"
              className="h-[52px] px-8 text-lg font-bold bg-[#4A3EFF] hover:bg-[#4A3EFF]/90 text-white rounded-lg"
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SPIN Selling */}
        <SpinSellingSection
          color={THEME_COLOR}
          situationTitle="Situação — Como está sua operação hoje?"
          situation="Sua fábrica possui maquinário excelente, mas o fluxo de comunicação entre as vendas, o PCP (Planejamento e Controle da Produção) e o estoque é feito através de planilhas de Excel, e-mails ou mensagens manuais."
          problemTitle="Problema — O que está travando sua produção?"
          problem="Pedidos de vendas chegam sem padronização, o estoque não reflete a realidade em tempo real, e há constantes gargalos onde máquinas ficam paradas aguardando insumos ou aprovações."
          implicationTitle="Implicação — Quanto custa uma indústria desorganizada?"
          implication="Atrasos nas entregas frustram clientes exigentes. O custo de produção aumenta devido ao desperdício de matéria-prima, retrabalho, e pagamento de horas extras para cobrir ineficiências do processo."
          needPayoffTitle="Need-Payoff — O que muda com a automação industrial?"
          needPayoff="Com a automação e sistemas integrados da Nuvo, o pedido de venda gera automaticamente a ordem de produção e reserva o estoque. Você ganha rastreabilidade, previsibilidade e margem de lucro."
        />

        {/* 9 Systems Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Sistemas Industriais Sob Medida
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Soluções desenvolvidas para resolver os desafios específicos do ambiente industrial.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((system, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-6 rounded-xl border bg-slate-50 hover:border-[#4A3EFF]/30 transition-colors shadow-sm"
                >
                  <div className="bg-[#4A3EFF]/10 p-3 rounded-lg text-[#4A3EFF]">
                    <system.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-800">{system.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12 Automations List */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Automações Essenciais para Indústrias
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Elimine o trabalho manual e repetitivo na sua operação com fluxos executados
                automaticamente.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100"
                >
                  <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Casos de Sucesso
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Veja o impacto real da automação e organização nos resultados de nossos clientes
                industriais.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-[#4A3EFF]" />
                  <TrendingUp className="w-10 h-10 text-[#4A3EFF] mb-6" />
                  <h3 className="text-xl font-bold mb-1 text-slate-900">{c.title}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">{c.revenue}</p>
                  <p className="text-slate-700 leading-relaxed">{c.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        {/* Bottom CTA */}
        <section className="py-24 bg-slate-900 text-center px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para revolucionar seu chão de fábrica?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Descubra onde sua indústria está perdendo dinheiro por falta de processos sistêmicos.
              Agende agora um diagnóstico gratuito com nossos especialistas em tecnologia.
            </p>
            <Button
              asChild
              size="lg"
              className="h-[52px] px-8 text-lg font-bold bg-[#4A3EFF] hover:bg-[#4A3EFF]/90 text-white rounded-lg"
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageState>
  )
}
