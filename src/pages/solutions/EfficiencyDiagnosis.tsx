import {
  ArrowRight,
  Search,
  Target,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Rocket,
  Code,
  Layers,
  Bot,
  Settings,
  Building2,
  Truck,
  HeadphonesIcon,
  Megaphone,
  Receipt,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#FFB65E'

const DIAGNOSIS_TYPES = [
  {
    title: 'Vendas',
    icon: TrendingUp,
    desc: 'Análise do funil, taxas de conversão e gargalos comerciais.',
  },
  {
    title: 'Rotinas',
    icon: Layers,
    desc: 'Mapeamento de processos de backoffice e tarefas repetitivas.',
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    desc: 'Eficiência de campanhas, captação e nutrição de leads.',
  },
  {
    title: 'Operação Logística',
    icon: Truck,
    desc: 'Controle de estoque, roteirização e entregas.',
  },
  {
    title: 'Empresarial',
    icon: Building2,
    desc: 'Visão holística da integração entre departamentos.',
  },
  {
    title: 'Atendimento',
    icon: HeadphonesIcon,
    desc: 'Tempo de resposta, satisfação e canais de suporte.',
  },
  { title: 'Financeiro', icon: Receipt, desc: 'Fluxo de caixa, emissão de notas e cobranças.' },
]

const STATS = [
  { val: '70%', title: 'Uso de Planilhas', desc: 'Das PMEs dependem de planilhas. (Sebrae)' },
  {
    val: '60%',
    title: 'Automatizáveis',
    desc: 'Ocupações têm 30% de tarefas automatizáveis. (McKinsey)',
  },
  {
    val: '5 min',
    title: 'Resposta Rápida',
    desc: 'Aumenta conversão consideravelmente. (Harvard)',
  },
  {
    val: '15-25%',
    title: 'Perda de Receita',
    desc: 'Por ineficiências operacionais. (WEF/Deloitte)',
  },
]

const FAQS = [
  {
    question: '1. O que é o diagnóstico de eficiência?',
    answer:
      'É um mapeamento detalhado dos processos e fluxos de trabalho da sua empresa para identificar gargalos, tarefas repetitivas manuais e oportunidades de melhoria tecnológica.',
  },
  {
    question: '2. Quanto tempo dura o diagnóstico?',
    answer:
      'O processo completo geralmente é concluído entre 1 a 2 semanas, dependendo da complexidade das operações e do acesso aos dados.',
  },
  {
    question: '3. Qual o custo inicial?',
    answer:
      'O diagnóstico inicial exploratório é 100% gratuito. Ele serve para validarmos a viabilidade para um projeto de automação.',
  },
  {
    question: '4. Minha equipe precisará parar de trabalhar?',
    answer:
      'Não. Realizamos entrevistas ágeis de 30 a 60 minutos com pessoas-chave sem interromper a operação.',
  },
  {
    question: '5. Que áreas são analisadas?',
    answer:
      'Avaliamos até 7 frentes: Vendas, Rotinas Administrativas, Marketing, Operação Logística, Empresarial Geral, Atendimento ao Cliente e Financeiro/Faturamento.',
  },
  {
    question: '6. Como recebo os resultados?',
    answer:
      'Você receberá uma apresentação executiva contendo o mapeamento dos gargalos, pontos cegos, plano de ação sugerido e estimativa de ROI.',
  },
  {
    question: '7. Vocês implementam a solução também?',
    answer:
      'Sim! Caso aprovado, nossa equipe desenvolve e implementa as automações, agentes de IA e sistemas necessários.',
  },
  {
    question: '8. Isso funciona para qualquer tipo de empresa?',
    answer:
      'É ideal para PMEs em crescimento que sentem a operação travada por processos analógicos, planilhas ou sistemas desatualizados.',
  },
  {
    question: '9. E o sigilo das informações?',
    answer:
      'Firmamos um NDA (Acordo de Confidencialidade) antes de iniciar qualquer coleta de informações para garantir a proteção total dos seus dados.',
  },
  {
    question: '10. O que acontece depois do diagnóstico?',
    answer:
      'Apresentamos a proposta de projeto. Se fizer sentido, iniciamos o desenvolvimento. Caso contrário, você ganha uma visão clara de como otimizar sua empresa.',
  },
]

export default function EfficiencyDiagnosis() {
  useSEO({
    title: 'Diagnóstico de Eficiência Operacional para PME | Nuvo',
    description:
      'Onde sua empresa perde tempo e dinheiro? O diagnóstico de eficiência da Nuvo mapeia gargalos em processos, atendimento e operação. São 7 tipos de diagnóstico: vendas, rotinas, marketing, logística, empresarial, atendimento e financeiro. Agende seu diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b border-slate-200 py-20 px-4 pt-[180px]">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Diagnóstico de Eficiência para PME — Descubra Onde Sua Empresa Perde Tempo e Dinheiro
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Muitas empresas operam abaixo do seu potencial devido a processos ineficientes. Nosso
              serviço de diagnóstico analisa a fundo a sua operação para identificar gargalos
              ocultos e mapear oportunidades claras de automação e melhoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-[44px] rounded-lg px-8 text-lg"
              >
                <Link to="/cases">Ver cases de sucesso</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
              O que é o Diagnóstico Operacional?
            </h2>
            <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Search className="w-6 h-6" style={{ color: THEME_COLOR }} /> Mapeamento Completo
                  da Sua Operação
                </h3>
                <p>
                  O diagnóstico operacional é uma imersão profunda nos processos da sua empresa.
                  Nosso objetivo é identificar os "pontos cegos" onde sua equipe perde tempo com
                  tarefas repetitivas, onde ocorrem gargalos que atrasam entregas e onde a falta de
                  integração entre sistemas gera custos invisíveis.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6" style={{ color: THEME_COLOR }} /> Foco em Resultados e
                  Automação
                </h3>
                <p>
                  Não entregamos apenas relatórios teóricos. Nosso foco é prático: entender sua
                  realidade para propor soluções tecnológicas reais — como integrações, agentes de
                  IA e automações — que resolvam os problemas na raiz e melhorem diretamente o seu
                  caixa e a experiência do seu cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua empresa está crescendo, as vendas aumentam, mas a operação não acompanha o ritmo de forma saudável. Grande parte dos controles ainda depende de planilhas desconectadas e tarefas executadas de forma totalmente manual."
          problem="Isso gera 'pontos cegos' na gestão, gargalos operacionais e alto volume de atividades manuais. O resultado são erros frequentes e falta de visibilidade em tempo real sobre os indicadores críticos."
          implication="A ineficiência cobra um preço alto: perdas de 15% a 25% da receita anual devido a falhas e perda de tempo, além do custo de oportunidade e desgaste do time focado em copiar dados."
          needPayoff="Com nosso diagnóstico, você recebe um mapeamento claro dos processos, estimativa de ROI e um plano de ação estruturado detalhando o que automatizar para recuperar receita e ganhar eficiência."
        />

        <div className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              7 Tipos de Diagnóstico para o Seu Negócio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
              {DIAGNOSIS_TYPES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border bg-slate-50 hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-10 h-10 mb-4" style={{ color: THEME_COLOR }} />
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              O Custo da Ineficiência em Dados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100"
                >
                  <div className="text-4xl font-black mb-2" style={{ color: THEME_COLOR }}>
                    {stat.val}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{stat.title}</h3>
                  <p className="text-sm text-slate-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Tecnologia e Entregáveis</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Utilizamos o que há de mais moderno para mapear e construir as soluções ideais para
                o seu cenário.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl bg-slate-900 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6" style={{ color: THEME_COLOR }} /> Tech Stack Base
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: THEME_COLOR }}
                    />
                    <div>
                      <strong className="block text-lg">React & Frontend Moderno</strong>
                      <span className="text-slate-400">Interfaces ultra-rápidas e intuitivas.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: THEME_COLOR }}
                    />
                    <div>
                      <strong className="block text-lg">Tecnologia com IA</strong>
                      <span className="text-slate-400">Backend escalável e seguro.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: THEME_COLOR }}
                    />
                    <div>
                      <strong className="block text-lg">Modelos de IA</strong>
                      <span className="text-slate-400">Integração com LLMs avançados.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                  <Rocket className="w-6 h-6" style={{ color: THEME_COLOR }} /> Entregáveis
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Bot className="w-5 h-5 shrink-0 mt-0.5 text-slate-600" />
                    <div>
                      <strong className="block text-lg text-slate-900">Agentes de IA</strong>
                      <span className="text-slate-600">
                        Assistentes autônomos para atendimento 24/7.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="w-5 h-5 shrink-0 mt-0.5 text-slate-600" />
                    <div>
                      <strong className="block text-lg text-slate-900">
                        Automações de Processos
                      </strong>
                      <span className="text-slate-600">
                        Sincronização de dados e disparo de tarefas.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 shrink-0 mt-0.5 text-slate-600" />
                    <div>
                      <strong className="block text-lg text-slate-900">Dashboards Dinâmicos</strong>
                      <span className="text-slate-600">Painéis de indicadores em tempo real.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <PageFaqSection color={THEME_COLOR} faqs={FAQS} />
      </div>
    </PageState>
  )
}
