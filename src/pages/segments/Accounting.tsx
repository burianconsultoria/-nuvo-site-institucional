import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileText,
  BrainCircuit,
  Calendar,
  Users,
  BarChart,
  FileSignature,
  Clock,
  Star,
  CheckSquare,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4FD487'

export default function Accounting() {
  useSEO({
    title: 'Automação para Contabilidades | Nuvo',
    description:
      'Automatize a coleta de documentos, a classificação fiscal e o atendimento ao cliente. Seu escritório entrega mais, com menos esforço. Diagnóstico gratuito.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)

  const faqs = [
    {
      question: 'Tem integração com sistemas Domínio ou Alterdata?',
      answer:
        'Sim, integramos com os principais ERPs contábeis do mercado, facilitando a troca de informações via API ou através de robôs de automação (RPA).',
    },
    {
      question: 'Como funciona a coleta automática de documentos?',
      answer:
        'Configuramos robôs que buscam notas, extratos e documentos em portais de prefeituras, e-mails e WhatsApp, organizando tudo automaticamente no seu drive ou sistema contábil.',
    },
    {
      question: 'A IA de classificação fiscal é segura e precisa?',
      answer:
        'Sim, treinamos a IA com as regras específicas do seu escritório para reconhecer padrões, cruzar CFOPs e alíquotas com altíssima precisão, minimizando falhas humanas.',
    },
    {
      question: 'Como a automação ajuda a evitar multas?',
      answer:
        'Através de alertas antecipados e dashboards centralizados que mostram o status de entrega de cada obrigação antes do vencimento, garantindo previsibilidade.',
    },
    {
      question: 'Vou precisar demitir ou contratar pessoas de TI?',
      answer:
        'Não. Nossa solução permite que sua equipe atual pare de digitar e foque em análise e consultoria. Nós cuidamos de toda a infraestrutura e tecnologia.',
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer:
        'Depende da complexidade, mas projetos de automação inicial costumam gerar resultados visíveis e economia de horas entre 4 e 8 semanas.',
    },
    {
      question: 'Qual o primeiro passo para automatizar?',
      answer:
        'Realizamos um diagnóstico gratuito para mapear os processos com maiores gargalos no seu escritório e propor um plano de ação focado em ROI rápido.',
    },
  ]

  const systems = [
    {
      title: 'Central de documentos contábeis',
      desc: 'Armazenamento organizado com busca inteligente e OCR para PDFs.',
      icon: FileText,
    },
    {
      title: 'Classificador fiscal inteligente',
      desc: 'IA que analisa e classifica NFes automaticamente segundo as regras.',
      icon: BrainCircuit,
    },
    {
      title: 'Gestão de prazos fiscais',
      desc: 'Dashboard de controle de obrigações por cliente e regime tributário.',
      icon: Calendar,
    },
    {
      title: 'Portal do cliente contábil',
      desc: 'Área logada simplificada para envio e recebimento de arquivos.',
      icon: Users,
    },
    {
      title: 'Painel de produtividade do escritório',
      desc: 'Métricas de tempo e tarefas concluídas por colaborador em tempo real.',
      icon: BarChart,
    },
    {
      title: 'Gestão de contratos de clientes',
      desc: 'Controle de vigências, reajustes anuais e assinaturas digitais.',
      icon: FileSignature,
    },
    {
      title: 'Agenda de obrigações recorrentes',
      desc: 'Disparo de lembretes e guias no piloto automático via WhatsApp/Email.',
      icon: Clock,
    },
    {
      title: 'Sistema de NPS contábil',
      desc: 'Medição contínua da satisfação da sua carteira de clientes.',
      icon: Star,
    },
    {
      title: 'Gestão de tarefas da equipe',
      desc: 'Kanban integrado com os prazos oficiais do governo e alertas.',
      icon: CheckSquare,
    },
  ]

  const automations = [
    {
      title: 'Automação de coleta de documentos',
      desc: 'Download automático em portais de prefeituras e e-mails de clientes.',
    },
    {
      title: 'Automação de classificação de notas fiscais',
      desc: 'Leitura rápida, triagem e estruturação de dados de XMLs em lote.',
    },
    {
      title: 'Automação de pré-preenchimento de guias',
      desc: 'Alimentação automatizada de sistemas governamentais e formulários.',
    },
    {
      title: 'Automação de comunicação de prazos',
      desc: 'Disparos proativos via WhatsApp cobrando documentos atrasados.',
    },
    {
      title: 'Automação de entrega de guias aos clientes',
      desc: 'Envio seguro, pontual e com rastreio de leitura confirmada.',
    },
    {
      title: 'Automação de cobrança de honorários',
      desc: 'Régua de cobrança automática para inadimplentes com alertas.',
    },
    {
      title: 'Automação de renovação de contratos',
      desc: 'Geração de minutas com novos valores reajustados sem digitação.',
    },
    {
      title: 'Automação de relatórios gerenciais',
      desc: 'Consolidação de dados financeiros para envio consultivo ao cliente.',
    },
    {
      title: 'Automação de onboarding de novos clientes',
      desc: 'Jornada de boas-vindas fluida com coleta inicial de dados cadastrais.',
    },
    {
      title: 'Automação de alerta de documentos pendentes',
      desc: 'Cobrança persistente e escalonada dos documentos faltantes.',
    },
    {
      title: 'Automação de pesquisa de satisfação',
      desc: 'Envio trimestral automático após fechamentos fiscais críticos.',
    },
    {
      title: 'Automação de conciliação bancária',
      desc: 'Cruzamento automático de arquivos OFX com os lançamentos do sistema.',
    },
  ]

  const cases = [
    {
      type: 'Pequeno Porte (SP)',
      title: '150 horas recuperadas/mês',
      desc: 'A eliminação da digitação manual permitiu um crescimento rápido da carteira, escalando de 80 para 150 clientes sem novas contratações operacionais.',
    },
    {
      type: 'Pequeno Porte (RJ)',
      title: '80% de redução de tempo',
      desc: 'O tempo investido em classificação fiscal caiu drasticamente, entregando também o benefício de 90% menos erros em lançamentos tributários.',
    },
    {
      type: 'Grande Porte (SP)',
      title: 'Aumento de 60% na produtividade',
      desc: 'A automação do fluxo completo redefiniu a operação, elevando a margem de lucro operacional do escritório de 18% para consistentes 32%.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Hero Section */}
        <div className="bg-white border-b pt-24 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Calculator className="w-16 h-16 mx-auto mb-8" style={{ color: THEME_COLOR }} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Automação para Contabilidades — Menos Retrabalho, Mais Entregas no Prazo
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              O paradoxo do escritório contábil:{' '}
              <strong className="text-slate-800">80% do tempo em rotinas manuais</strong> e apenas
              20% em consultoria estratégica. Inverta essa lógica com automações sob medida.
            </p>

            <div className="text-left max-w-2xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-12 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-6">
                Quando a automação faz a diferença?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-3 shrink-0" style={{ color: THEME_COLOR }} />
                  <span className="text-slate-700 leading-relaxed">
                    Quando você passa mais tempo cobrando documentos do que analisando resultados
                    para o cliente.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-3 shrink-0" style={{ color: THEME_COLOR }} />
                  <span className="text-slate-700 leading-relaxed">
                    Quando erros de digitação e esquecimentos geram retrabalho e multas no
                    fechamento mensal.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-3 shrink-0" style={{ color: THEME_COLOR }} />
                  <span className="text-slate-700 leading-relaxed">
                    Quando o crescimento da carteira obriga a contratação imediata de mais analistas
                    operacionais.
                  </span>
                </li>
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <Link to="/diagnostico-gratuito">
                Quero meu diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* SPIN Selling Section */}
        <SpinSellingSection
          color={THEME_COLOR}
          situation="Manuseio manual de documentos em papel, extratos bancários digitados linha a linha e a correria insana de todos no escritório durante o fechamento mensal."
          problem="Dependência quase total da memória do cliente para enviar documentos no prazo e erros recorrentes de digitação manual que geram estresse e retrabalho."
          implication="Perda massiva de horas faturáveis que poderiam ir para consultoria estratégica, além do custo oculto com multas por atrasos e o risco de churn por atendimento reativo."
          needPayoff="Coleta automática de arquivos, classificação fiscal com Inteligência Artificial e integração direta com seu sistema. Aumente drasticamente suas margens sem inchar a equipe de analistas."
        />

        {/* Systems Showcase */}
        <div className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistemas e Portais Exclusivos</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Desenvolvemos plataformas modernas para digitalizar a experiência do seu cliente e a
                gestão da sua equipe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((sys, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-700/50">
                    <sys.icon className="w-6 h-6" style={{ color: THEME_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sys.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{sys.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automations Showcase */}
        <div className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Automações Estratégicas
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Robôs trabalhando em segundo plano para eliminar a digitação e os gargalos do
                Departamento Pessoal e Fiscal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automations.map((auto, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <Zap className="w-6 h-6 mb-4" style={{ color: THEME_COLOR }} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {auto.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{auto.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Cases */}
        <div className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              Resultados Reais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white shadow-sm border border-slate-200 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: THEME_COLOR }}
                  />
                  <div
                    className="text-sm font-bold uppercase tracking-wider mb-6"
                    style={{ color: THEME_COLOR }}
                  >
                    {c.type}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{c.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <PageFaqSection color={THEME_COLOR} faqs={faqs} />

        {/* CTA Section */}
        <div className="py-24 bg-white text-center border-t border-slate-100">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
              Pronto para seu escritório entregar mais com menos esforço?
            </h2>
            <Button
              asChild
              size="lg"
              className="h-16 px-10 text-xl font-bold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: THEME_COLOR }}
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
