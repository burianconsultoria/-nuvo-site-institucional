import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Truck,
  Package,
  FileCheck,
  Map,
  MapPin,
  FileText,
  BarChart,
  Globe,
  Fuel,
  Zap,
  Send,
  Route as RouteIcon,
  Bell,
  DollarSign,
  AlertTriangle,
  Wrench,
  MessageSquare,
  FileSpreadsheet,
  RefreshCw,
  Calendar,
  Clock,
  Clock4,
  PhoneOff,
  TrendingDown,
} from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4A3EFF'

export default function Logistics() {
  useSEO({
    title: 'Automação para Logística e Transporte | Nuvo',
    description:
      'Romaneio em papel, assinatura manual, motorista sem informação, cliente ligando? Automatize sua operação logística do início ao fim. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Como funciona a integração com nosso TMS ou ERP?',
      answer:
        'Conectamos nossos sistemas diretamente via API com o seu TMS/ERP, garantindo que os dados fluam sem redigitação.',
    },
    {
      question: 'Como implementar o rastreamento em tempo real?',
      answer:
        'Utilizamos o smartphone do motorista ou a telemetria do caminhão para atualizar o status automaticamente.',
    },
    {
      question: 'O comprovante de entrega digital tem validade?',
      answer:
        'Sim, a assinatura digital na tela com geolocalização e carimbo de tempo garante a validade da entrega.',
    },
    {
      question: 'Como reduzir as ligações de clientes (SAC)?',
      answer:
        'Enviando notificações proativas de status via WhatsApp e fornecendo um portal de rastreamento.',
    },
    {
      question: 'A roteirização considera janelas de entrega?',
      answer:
        'Sim, nosso sistema cria rotas otimizadas respeitando as restrições de horário de cada cliente e a capacidade da frota.',
    },
    {
      question: 'É possível automatizar a cobrança de fretes?',
      answer:
        'Sim, assim que a entrega é confirmada digitalmente, o sistema pode emitir a fatura e o boleto.',
    },
    {
      question: 'Como melhorar a comunicação com os motoristas?',
      answer:
        'Através de um app leve ou chatbot no WhatsApp, onde eles recebem ordens e relatam ocorrências.',
    },
    {
      question: 'Qual o ROI esperado com essas automações?',
      answer:
        'Nossos clientes reduzem custos operacionais, diminuem chamados de clientes em até 70% e aceleram o ciclo de faturamento.',
    },
  ]

  const systems = [
    { title: 'Gestão de ordens de coleta e entrega', icon: Package },
    { title: 'Comprovante digital de entrega', icon: FileCheck },
    { title: 'Roteirização inteligente', icon: Map },
    { title: 'Rastreamento em tempo real para clientes', icon: MapPin },
    { title: 'Gestão de frota', icon: Truck },
    { title: 'Central de documentação fiscal', icon: FileText },
    { title: 'Dashboard de indicadores operacionais', icon: BarChart },
    { title: 'Portal do cliente contratante', icon: Globe },
    { title: 'Gestão de abastecimento e custos', icon: Fuel },
  ]

  const automations = [
    { title: 'Automação de criação de ordens de entrega', icon: Zap },
    { title: 'Automação de envio de comprovante ao cliente', icon: Send },
    { title: 'Automação de roteirização diária', icon: RouteIcon },
    { title: 'Automação de notificação de status', icon: Bell },
    { title: 'Automação de cobrança de fretes', icon: DollarSign },
    { title: 'Automação de alerta de documentação de veículos', icon: AlertTriangle },
    { title: 'Automação de manutenção preventiva da frota', icon: Wrench },
    { title: 'Automação de comunicação com motoristas', icon: MessageSquare },
    { title: 'Automação de relatórios operacionais', icon: FileSpreadsheet },
    { title: 'Automação de conciliação de fretes', icon: RefreshCw },
    { title: 'Automação de agendamento de coleta', icon: Calendar },
    { title: 'Automação de alerta de atraso', icon: Clock },
  ]

  const cases = [
    {
      company: 'Transportadora SP',
      metric: '80 horas recuperadas',
      description: 'Na conciliação de canhotos por mês com o uso do comprovante digital.',
      icon: Clock4,
    },
    {
      company: 'Logística E-commerce MG',
      metric: '70% menos ligações',
      description:
        'No SAC de clientes perguntando o status do pedido graças ao rastreio via WhatsApp.',
      icon: PhoneOff,
    },
    {
      company: 'Distribuidora SP',
      metric: '15% de redução de custos',
      description: 'Economia gerada através de rotas otimizadas e controle automatizado de frota.',
      icon: TrendingDown,
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white border-b py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Truck className="w-16 h-16 mx-auto mb-6" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Automação para Logística — Operação sem Papel, Entrega no Prazo
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Romaneio em papel, assinatura manual, motorista sem informação, cliente ligando?
              Automatize sua operação logística do início ao fim.
            </p>
            <Link to="/diagnostico-gratuito">
              <Button
                size="lg"
                style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
                className="h-[52px] rounded-lg px-8 text-lg font-bold hover:opacity-90 transition-opacity"
              >
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* SPIN Selling Section */}
        <SpinSellingSection
          color={THEME_COLOR}
          situation="Romaneios em papel, canhotos perdidos e motoristas sem informações claras sobre rotas no celular."
          problem="Os clientes ligam cobrando status da entrega e o faturamento atrasa porque o canhoto de papel ainda não chegou à base."
          implication="Multas por atraso, fluxo de caixa estrangulado por faturamento tardio e uma equipe de SAC completamente sobrecarregada."
          needPayoff="Com a operação digitalizada, o motorista assina na tela, o cliente recebe o rastreio por WhatsApp e o faturamento é liberado na hora."
        />

        {/* Systems Portfolio */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Sistemas sob Medida para Logística
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systems.map((sys, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-blue-50 shrink-0">
                    <sys.icon className="w-6 h-6" style={{ color: THEME_COLOR }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                      {sys.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automations Catalog */}
        <section className="py-20 px-4 bg-white border-t border-b">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Catálogo de Automações Estratégicas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {automations.map((auto, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-transparent hover:border-blue-100 transition-colors"
                >
                  <auto.icon className="w-8 h-8 mb-4" style={{ color: THEME_COLOR }} />
                  <h4 className="font-medium text-slate-800">{auto.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Resultados Comprovados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border shadow-sm text-center">
                  <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${THEME_COLOR}15` }}
                  >
                    <c.icon className="w-8 h-8" style={{ color: THEME_COLOR }} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: THEME_COLOR }}>
                    {c.metric}
                  </div>
                  <div className="font-semibold text-slate-900 mb-4">{c.company}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        {/* CTA Banner */}
        <section className="py-24 px-4 bg-slate-900 text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para acelerar suas entregas e reduzir custos?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Fale com nossos especialistas e descubra como as automações certas podem transformar o
              seu negócio logístico hoje mesmo.
            </p>
            <Link to="/diagnostico-gratuito">
              <Button
                size="lg"
                style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
                className="h-[52px] rounded-lg px-8 text-lg font-bold hover:opacity-90 transition-opacity"
              >
                Quero meu diagnóstico gratuito
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageState>
  )
}
