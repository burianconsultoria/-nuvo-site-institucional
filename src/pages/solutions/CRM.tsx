import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Clock,
  Zap,
  MessageCircle,
  BarChart3,
  AlertTriangle,
  Target,
  TrendingUp,
  Briefcase,
  Workflow,
  ShieldCheck,
  ThumbsUp,
  Quote,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'
import { cn } from '@/lib/utils'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#2F7CFF'

export default function CRM() {
  useSEO({
    title: 'CRM e Organização Comercial para PME | Nuvo',
    description:
      'Lead que some sem follow-up é dinheiro perdido. Organizamos seu funil com CRM feito sob medida + automação de follow-up + nutrição de leads. Classificação A/B/C/D de leads. Aumente sua conversão. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Vocês usam Pipedrive, HubSpot ou sistema próprio?',
      answer:
        'Implementamos as melhores soluções de mercado (HubSpot, Pipedrive, Kommo, Zoho) ou criamos do zero dependendo da sua complexidade e orçamento.',
    },
    {
      question: 'É possível integrar as conversas do WhatsApp ao CRM?',
      answer:
        'Sim! Garantimos que as interações feitas no WhatsApp da empresa ou do vendedor fiquem registradas diretamente no histórico do cliente no CRM.',
    },
    {
      question: 'Minha equipe tem aversão a novos sistemas. Como garantem a adoção?',
      answer:
        'Nós parametrizamos o sistema para ser um facilitador, não um fiscal. Removemos campos desnecessários e automatizamos o trabalho manual. Também realizamos treinamentos práticos com o time.',
    },
    {
      question: 'Funciona para quem tem equipe de vendas externa (na rua)?',
      answer:
        'Perfeitamente. Os sistemas que implementamos possuem aplicativos mobile robustos para que o vendedor externo atualize tudo em tempo real, inclusive com geolocalização.',
    },
    {
      question: 'Quanto tempo leva para implementar e começar a usar?',
      answer:
        'Dependendo da complexidade do seu processo e integrações necessárias, uma implementação leva entre 2 a 4 semanas para estar rodando perfeitamente.',
    },
    {
      question: 'Como fica meu histórico atual de clientes? Vou perder?',
      answer:
        'Não. Nós cuidamos de toda a migração, importação e higienização dos seus dados atuais (planilhas ou outro sistema) para a nova ferramenta.',
    },
    {
      question: 'Vou ter relatórios para acompanhar minha equipe?',
      answer:
        'Sim. Criamos dashboards gerenciais sob medida para que você acompanhe taxas de conversão, motivos de perda, tempo médio de venda e previsão de faturamento.',
    },
    {
      question: 'Eu já tenho um CRM mas virou bagunça. Vocês organizam?',
      answer:
        'Com certeza. Fazemos o que chamamos de "Revitalização de CRM", limpando a base de dados, redesenhando o funil e reconfigurando as automações.',
    },
  ]

  const features = [
    { icon: LayoutDashboard, title: 'Pipeline Visual' },
    { icon: Clock, title: 'Automação de follow-up' },
    { icon: Zap, title: 'Nutrição automática' },
    { icon: MessageCircle, title: 'Integração nativa com WhatsApp' },
    { icon: BarChart3, title: 'Relatórios automáticos' },
    { icon: AlertTriangle, title: 'Alertas inteligentes' },
    { icon: Target, title: 'Gestão de metas' },
    { icon: TrendingUp, title: 'Forecasting' },
  ]

  const customPoints = [
    {
      icon: Briefcase,
      title: 'Fluxo de Vendas Exclusivo',
      desc: 'Não forçamos sua equipe a usar um modelo padrão. Desenhamos o pipeline refletindo a sua jornada de compra real.',
    },
    {
      icon: Workflow,
      title: 'Sem Excesso de Burocracia',
      desc: 'Ocultamos campos inúteis e automatizamos a entrada de dados. O vendedor gasta tempo vendendo, não preenchendo formulários.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrações Reais',
      desc: 'Seu CRM conversa de verdade com seu ERP, Automação de Marketing e WhatsApp. Uma fonte única de verdade.',
    },
    {
      icon: ThumbsUp,
      title: 'Adoção Garantida',
      desc: 'Focamos na experiência do usuário (vendedor). Se é difícil de usar, ninguém usa. Entregamos uma ferramenta intuitiva.',
    },
  ]

  const stats = [
    {
      source: 'InsideSales',
      text: '44% dos vendedores desistem após o primeiro follow-up, mas 80% das vendas requerem pelo menos 5 interações.',
    },
    {
      source: 'Harvard Business Review',
      text: 'Empresas que contatam um lead na primeira hora têm 60x mais chance de qualificar o negócio do que as que demoram 24h.',
    },
    {
      source: 'Gartner',
      text: 'Um CRM bem implementado e adotado pela equipe pode aumentar a receita em até 29%.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Hero Section */}
        <div
          className="bg-[#1C1C28] text-white py-24 px-4 text-center relative border-b-4 overflow-hidden"
          style={{ borderColor: THEME_COLOR }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-[#2F7CFF]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <h1 className="text-[36px] md:text-[52px] font-heading font-extrabold tracking-tight mb-6 leading-tight">
              CRM e Organização Comercial para PME — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F7CFF] to-[#7AAFFF]">
                Nunca Mais Perca um Lead por Falta de Follow-up
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Lead que some sem follow-up é dinheiro perdido. Organizamos seu funil com CRM feito
              sob medida, automação de tarefas e nutrição de leads. Aumente sua conversão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                style={{ backgroundColor: THEME_COLOR, color: '#fff' }}
                className="h-[50px] rounded-lg px-8 text-lg font-bold hover:opacity-90 shadow-lg"
              >
                <Link to="/diagnostico-gratuito">
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                O que é CRM e Organização Comercial para PME?
              </h2>
              <h3 className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto">
                Um processo comercial organizado que funciona mesmo quando sua equipe está ocupada
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Cada lead tem um dono e um próximo passo definido',
                'Follow-ups acontecem automaticamente no momento certo',
                'Leads frios são nutridos até estarem prontos para comprar',
                'O pipeline de vendas é visível e previsível',
                'Relatórios de performance são gerados automaticamente',
                'A equipe comercial sabe exatamente o que fazer a cada momento',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm"
                >
                  <CheckCircle2
                    className="w-6 h-6 shrink-0 mt-0.5"
                    style={{ color: THEME_COLOR }}
                  />
                  <p className="text-lg text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SPIN Selling */}
        <SpinSellingSection
          color={THEME_COLOR}
          situation="Atualmente, seus leads chegam por vários canais e ficam espalhados no WhatsApp, em planilhas desatualizadas e até cadernos. Não existe um processo padrão de atendimento."
          problem="Follow-ups são esquecidos diariamente. Leads que não compram na hora são abandonados. Falta visibilidade de quantos negócios estão em andamento ou por que são perdidos."
          implication="Se você perde 3 vendas de R$ 10.000/mês porque o vendedor esqueceu de retornar, estamos falando de R$ 30.000/mês ou R$ 360.000/ano deixados na mesa."
          needPayoff="Implementamos um sistema automatizado que registra todos os leads, agenda follow-ups, integra suas ferramentas e garante que nenhuma oportunidade seja esquecida."
        />

        {/* Custom CRM Value Prop */}
        <div className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              Nosso CRM é feito sob medida para sua operação comercial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {customPoints.map((point, idx) => {
                const Icon = point.icon
                return (
                  <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${THEME_COLOR}20`, color: THEME_COLOR }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{point.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Lead Classification */}
        <div className="py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Classificação Inteligente de Leads (A/B/C/D)
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Implementamos um sistema de pontuação (Lead Scoring) para que sua equipe foque
                energia apenas em quem está pronto para comprar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-green-200 bg-green-50/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl">
                    A
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Classe A (Prioritário)</h4>
                    <span className="text-sm font-semibold text-green-600">Score 80-100</span>
                  </div>
                </div>
                <p className="text-slate-700">
                  Alta intenção de compra e fit perfeito. Contato imediato e acompanhamento
                  agressivo pelo time comercial.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-blue-200 bg-blue-50/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                    B
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Classe B (Interessante)</h4>
                    <span className="text-sm font-semibold text-blue-600">Score 60-79</span>
                  </div>
                </div>
                <p className="text-slate-700">
                  Bom fit mas momento de compra incerto. Entra em fluxo de nutrição ativa pelo
                  comercial para aquecimento.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-yellow-200 bg-yellow-50/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-xl">
                    C
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Classe C (Morno)</h4>
                    <span className="text-sm font-semibold text-yellow-600">Score 40-59</span>
                  </div>
                </div>
                <p className="text-slate-700">
                  Fit parcial. Recebe conteúdo educacional automatizado do marketing até melhorar o
                  score e subir de classe.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xl">
                    D
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Classe D (Frio)</h4>
                    <span className="text-sm font-semibold text-slate-500">Score 0-39</span>
                  </div>
                </div>
                <p className="text-slate-700">
                  Sem fit ou intenção clara. Contato eventual apenas por listas de transmissão
                  genéricas e informativas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-slate-900">
              Tudo o que sua operação precisa
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-8 h-8 mb-4" style={{ color: THEME_COLOR }} />
                    <h4 className="font-semibold text-slate-800">{feat.title}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Data & Research */}
        <div className="py-20 bg-white border-b border-slate-200">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative"
                >
                  <Quote className="absolute top-6 left-6 w-8 h-8 text-slate-200" />
                  <p className="text-slate-700 font-medium leading-relaxed relative z-10 pt-6 mb-6">
                    "{stat.text}"
                  </p>
                  <div
                    className="text-sm font-bold tracking-wide uppercase"
                    style={{ color: THEME_COLOR }}
                  >
                    — {stat.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        {/* CTA Section */}
        <div className="container mx-auto max-w-4xl px-4 mt-20">
          <div
            className="rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
            style={{ backgroundColor: THEME_COLOR }}
          >
            <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/800/400?q=success')] opacity-10 bg-cover bg-center mix-blend-overlay" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Pronto para organizar seu comercial?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Agende uma conversa e descubra como podemos acabar com a perda de leads na sua
                empresa.
              </p>
              <Button
                asChild
                size="lg"
                className="h-[56px] px-10 text-lg font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
              >
                <Link to="/diagnostico-gratuito">
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageState>
  )
}
