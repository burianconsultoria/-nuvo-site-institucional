import { Link } from 'react-router-dom'
import {
  Code2,
  ArrowRight,
  Check,
  CheckCircle2,
  LayoutTemplate,
  Users,
  MonitorPlay,
  Layers,
  FileText,
  Activity,
  Calendar,
  Truck,
  Target,
  AlertCircle,
  Lightbulb,
  Server,
  Database,
  Cloud,
  Shield,
  Search,
  PenTool,
  Rocket,
  Wrench,
  TrendingUp,
} from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { Button } from '@/components/ui/button'
import { PageFaqSection } from '@/components/PageFaqSection'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const THEME_COLOR = '#4FD487'

const faqs = [
  {
    question: 'A propriedade intelectual (código fonte) é minha?',
    answer:
      'Sim. Após a conclusão e pagamento do projeto, todo o código fonte e direitos pertencem exclusivamente à sua empresa.',
  },
  {
    question: 'Quanto custa um sistema sob medida?',
    answer:
      'Depende da complexidade e das integrações necessárias, mas geralmente tem um ROI alto ao eliminar licenças caras a longo prazo.',
  },
  {
    question: 'Qual o tempo médio de desenvolvimento?',
    answer: 'Varia entre 2 a 6 meses dependendo do tamanho do escopo definido na fase de projeto.',
  },
  {
    question: 'Vocês fazem a manutenção após a entrega?',
    answer:
      'Sim. Oferecemos contratos de SLA para manutenção preventiva, corretiva e evolutiva do sistema.',
  },
  {
    question: 'O sistema vai funcionar no celular?',
    answer:
      'Sim, desenvolvemos todas as aplicações com design responsivo (mobile-first) ou como PWA/aplicativos nativos se necessário.',
  },
  {
    question: 'É seguro?',
    answer:
      'Seguimos as melhores práticas de segurança de mercado, como criptografia de dados, autenticação robusta e proteção contra ataques comuns.',
  },
  {
    question: 'Pode ser integrado ao meu sistema atual (ERP, CRM)?',
    answer:
      'Sim. Se o seu sistema possuir uma API aberta (REST/GraphQL) ou acesso ao banco de dados, podemos criar integrações bidirecionais.',
  },
  {
    question: 'Como começar?',
    answer:
      'Basta agendar um diagnóstico gratuito conosco. Vamos entender seu problema e desenhar a melhor solução tecnológica para sua empresa.',
  },
]

const examples = [
  { title: 'Gerador de diagnóstico comercial', icon: FileText },
  { title: 'Central de documentos', icon: Layers },
  { title: 'Gestão de RH', icon: Users },
  { title: 'Portal do cliente', icon: MonitorPlay },
  { title: 'Gestão de ordens de serviço', icon: Wrench },
  { title: 'Controle de comissões', icon: TrendingUp },
  { title: 'Agendamento online', icon: Calendar },
  { title: 'Gestão de frota e entregas', icon: Truck },
  { title: 'Dashboard de indicadores', icon: Activity },
]

const spinBlocks = [
  {
    icon: Target,
    title: 'Situação',
    text: 'Sua empresa tenta usar um software de mercado, mas ele atende apenas 60% do que você precisa. O resto é feito por fora.',
  },
  {
    icon: AlertCircle,
    title: 'Problema',
    text: 'Os sistemas de prateleira engessam seus diferenciais competitivos e forçam sua equipe a fazer gambiarras (workarounds) diariamente.',
  },
  {
    icon: ArrowRight,
    title: 'Implicação',
    text: 'Seu custo operacional é elevado porque sua operação é refém de fluxos genéricos, além de depender de várias assinaturas caras mensais.',
  },
  {
    icon: Lightbulb,
    title: 'A Solução (Need-Payoff)',
    text: 'Com um sistema próprio moldado 100% para o seu negócio, você assume o controle da sua eficiência, corta custos com licenças terceiras e ganha um ativo real.',
  },
]

const stack = [
  { title: 'Frontend', desc: 'React, TypeScript', icon: LayoutTemplate },
  { title: 'Backend', desc: 'Node.js, Python, Pocketbase', icon: Server },
  { title: 'Banco de Dados', desc: 'PostgreSQL, NoSQL', icon: Database },
  { title: 'APIs', desc: 'REST, GraphQL', icon: Code2 },
  { title: 'Cloud', desc: 'AWS, Vercel', icon: Cloud },
  { title: 'Segurança', desc: 'JWT, Criptografia, LGPD', icon: Shield },
]

const processSteps = [
  { title: 'Descoberta', desc: 'Mapeamento detalhado das necessidades', icon: Search },
  { title: 'Prototipação', desc: 'Design da interface e fluxos visuais', icon: PenTool },
  { title: 'Desenvolvimento ágil', desc: 'Entregas funcionais a cada sprint', icon: Code2 },
  { title: 'Testes', desc: 'QA e homologação com a equipe', icon: CheckCircle2 },
  { title: 'Implantação', desc: 'Go-live do sistema no servidor', icon: Rocket },
  { title: 'Evolução contínua', desc: 'Manutenção e novas features', icon: TrendingUp },
]

const stats = [
  {
    value: '68%',
    label: 'dos projetos falham',
    desc: 'por escopo genérico mal definido (Standish Group).',
  },
  {
    value: '3x',
    label: 'mais caros',
    desc: 'Sistemas SaaS podem custar mais em 5 anos devido a licenças.',
  },
  {
    value: '80%',
    label: 'menos erros',
    desc: 'A automação customizada reduz falhas manuais e retrabalho.',
  },
]

const comparison = [
  { dimension: 'Custo inicial', saas: 'Baixo', custom: 'Alto' },
  {
    dimension: 'Custo ao longo do tempo',
    saas: 'Alto (mensalidade/usuário)',
    custom: 'Baixo (manutenção apenas)',
  },
  {
    dimension: 'Adaptação ao seu processo',
    saas: 'Você se adapta ao sistema',
    custom: 'O sistema se adapta a você',
  },
  {
    dimension: 'Regras de negócio específicas',
    saas: 'Limitado ou impossível',
    custom: '100% atendidas',
  },
  { dimension: 'Tempo de implementação', saas: 'Dias / Semanas', custom: 'Semanas / Meses' },
  { dimension: 'Personalização', saas: 'Apenas visual / cores', custom: 'Total' },
  { dimension: 'Propriedade intelectual', saas: 'Alugada', custom: 'Sua' },
  {
    dimension: 'Integração com sistemas legados',
    saas: 'Depende de APIs genéricas',
    custom: 'Feita sob medida',
  },
  {
    dimension: 'Manutenção',
    saas: 'Depende da fila do fornecedor',
    custom: 'SLA dedicado',
  },
  {
    dimension: 'Indicado quando',
    saas: 'Processo padrão de mercado',
    custom: 'Processo exclusivo / diferencial',
  },
]

export default function CustomSystems() {
  useSEO({
    title: 'Sistemas Sob Medida para PME | Nuvo',
    description:
      'Nenhum sistema do mercado se encaixa no seu processo? Criamos softwares exclusivos para suas regras de negócio. Veja exemplos do que já construímos e compare SaaS vs sistema sob medida. Diagnóstico gratuito.',
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1C1C28] text-slate-300 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: THEME_COLOR }}
          />
        </div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto border"
            style={{ borderColor: `${THEME_COLOR}50`, backgroundColor: `${THEME_COLOR}20` }}
          >
            <Code2 className="w-8 h-8" style={{ color: THEME_COLOR }} />
          </div>
          <h1 className="text-[32px] md:text-[56px] font-heading font-extrabold text-white tracking-tight mb-6 leading-[1.15]">
            Sistemas Sob Medida para PME —{' '}
            <span style={{ color: THEME_COLOR }}>
              Quando Nenhuma Plataforma Pronta Resolve Seu Problema
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Nenhum sistema do mercado se encaixa no seu processo? Criamos softwares exclusivos para
            suas regras de negócio.
          </p>
          <Button
            asChild
            size="lg"
            style={{ backgroundColor: THEME_COLOR, color: '#000' }}
            className="h-[52px] rounded-xl px-8 text-lg font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Link to="/diagnostico-gratuito">
              Quero meu diagnóstico gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro (O que é) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 leading-tight">
                O que são Sistemas Sob Medida para PME?
              </h2>
              <h3 className="text-xl font-medium text-slate-600 mb-6">
                Softwares exclusivos criados para resolver exatamente o seu problema
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Quando as ferramentas de prateleira não dão conta das particularidades do seu
                negócio, um software customizado é a única saída para garantir escalabilidade e
                eficiência. Ele é construído em volta do seu processo, e não o contrário.
              </p>
              <div className="space-y-4">
                <p className="font-semibold text-slate-900">Quando escolher sob medida:</p>
                <ul className="space-y-3">
                  {[
                    'Quando suas regras de negócio são únicas e inegociáveis.',
                    'Quando você usa 5 ferramentas diferentes que não se conversam.',
                    'Quando o custo de licenças mensais (por usuário) fica insustentável.',
                    'Quando você quer criar um portal exclusivo para clientes ou parceiros.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-sm relative">
              <img
                src="https://img.usecurling.com/p/800/600?q=software%20dashboard&color=green&dpr=2"
                alt="Software development"
                className="rounded-2xl w-full h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Exemplos do que já construímos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sistemas projetados para resolver gargalos operacionais específicos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {examples.map((ex, i) => {
              const Icon = ex.icon
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${THEME_COLOR}15`, color: THEME_COLOR }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{ex.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SPIN Selling Block */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 max-w-3xl mx-auto leading-tight">
            Quando o Mercado Não Tem a Solução, a Gente Cria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {spinBlocks.map((block, i) => {
              const Icon = block.icon
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50 relative overflow-hidden group hover:border-slate-200 transition-colors"
                >
                  <div
                    className="absolute top-0 left-0 w-2 h-full transition-all duration-300"
                    style={{ backgroundColor: THEME_COLOR }}
                  />
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${THEME_COLOR}15`, color: THEME_COLOR }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">{block.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            Como funciona o desenvolvimento de um sistema sob medida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative"
                >
                  <div className="text-6xl font-black text-slate-100 absolute top-4 right-6 pointer-events-none select-none">
                    0{i + 1}
                  </div>
                  <Icon className="w-8 h-8 mb-6" style={{ color: THEME_COLOR }} />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Comparativo: Sistema Pronto vs Sob Medida
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-[30%] py-5 text-slate-900 font-bold">
                      Dimensão
                    </TableHead>
                    <TableHead className="w-[35%] py-5 text-slate-900 font-bold">
                      Sistema Pronto (SaaS)
                    </TableHead>
                    <TableHead className="w-[35%] py-5 font-bold" style={{ color: THEME_COLOR }}>
                      Sistema Sob Medida (Nuvo)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparison.map((row, i) => (
                    <TableRow key={i} className="hover:bg-slate-50/50">
                      <TableCell className="font-medium text-slate-700 py-4">
                        {row.dimension}
                      </TableCell>
                      <TableCell className="text-slate-500 py-4">{row.saas}</TableCell>
                      <TableCell className="text-slate-900 font-medium py-4">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" style={{ color: THEME_COLOR }} />
                          {row.custom}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Stack de desenvolvimento que utilizamos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Icon className="w-6 h-6" style={{ color: THEME_COLOR }} />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data / Stats */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            Dados sobre desenvolvimento de software
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <div
                  className="text-5xl font-black mb-4 tracking-tighter"
                  style={{ color: THEME_COLOR }}
                >
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{stat.label}</h3>
                <p className="text-slate-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reinforcement */}
      <section className="py-24 bg-[#1C1C28] text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Software pronto resolve o problema médio de uma empresa média.
          </h2>
          <h2
            className="text-3xl md:text-5xl font-black mb-12 leading-tight"
            style={{ color: THEME_COLOR }}
          >
            Sistema sob medida não é luxo, é eficiência.
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Você troca aluguel de licenças por um ativo tecnológico da sua própria empresa.
          </p>
          <Button
            asChild
            size="lg"
            style={{ backgroundColor: THEME_COLOR, color: '#000' }}
            className="h-[52px] rounded-xl px-8 text-lg font-bold hover:opacity-90 shadow-lg"
          >
            <Link to="/diagnostico-gratuito">
              Quero meu diagnóstico gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <PageFaqSection color={THEME_COLOR} faqs={faqs} />
    </div>
  )
}
