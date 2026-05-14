import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MessageSquare,
  Settings,
  Activity,
  Users,
  Code,
  HelpCircle,
  AlertCircle,
  RefreshCcw,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'

import { getFaqs } from '@/services/api'

const Index = () => {
  const [faqs, setFaqs] = useState<any[]>([])
  const [loadingFaqs, setLoadingFaqs] = useState(true)
  const [errorFaqs, setErrorFaqs] = useState<string | null>(null)

  // SEO and Meta Configuration
  useEffect(() => {
    document.title = 'Consultoria de Tecnologia para PMEs | Nuvo'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Sua empresa cresce mas o caos operacional também? Descubra como a Nuvo organiza, automatiza e liberta seu tempo.',
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content =
        'Sua empresa cresce mas o caos operacional também? Descubra como a Nuvo organiza, automatiza e liberta seu tempo.'
      document.head.appendChild(meta)
    }
  }, [])

  const fetchFaqs = async () => {
    setLoadingFaqs(true)
    setErrorFaqs(null)
    try {
      const data = await getFaqs()
      setFaqs(data)
    } catch (err) {
      setErrorFaqs('Não foi possível carregar as perguntas frequentes.')
    } finally {
      setLoadingFaqs(false)
    }
  }

  useEffect(() => {
    fetchFaqs()
  }, [])

  const painPoints = [
    {
      title: 'WhatsApp uma bagunça?',
      description:
        'Centralize e automatize o atendimento da sua equipe no WhatsApp com Inteligência Artificial.',
      icon: MessageSquare,
      link: '/solucoes/agente-de-ia',
    },
    {
      title: 'Tarefa manual demais?',
      description:
        'Integre sistemas e automatize tarefas repetitivas para que sua equipe foque no que importa.',
      icon: Settings,
      link: '/solucoes/automacao-de-processos',
    },
    {
      title: 'Dependem de você para tudo?',
      description:
        'Mapeie e otimize seus processos para criar uma operação independente e escalável.',
      icon: Activity,
      link: '/solucoes/diagnostico-de-eficiencia',
    },
    {
      title: 'Cliente some sem follow-up?',
      description:
        'Estruture seu CRM e organize seu processo comercial para não perder mais vendas.',
      icon: Users,
      link: '/solucoes/crm-e-organizacao-comercial',
    },
    {
      title: 'Nada pronto resolve?',
      description:
        'Desenvolvimento de sistemas exclusivos e sob medida para o seu modelo de negócio.',
      icon: Code,
      link: '/solucoes/sistemas-sob-medida',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-slate-100/50 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sua empresa cresce mais rápido do que consegue se organizar?
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              A Nuvo ajuda sua empresa a superar o caos operacional através de automação, processos
              inteligentes e sistemas sob medida. Liberte seu tempo para focar no que realmente
              importa: o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg">
                <Link to="/diagnostico-rapido">
                  Quero um diagnóstico gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg w-full sm:w-auto bg-white"
              >
                <Link to="/como-funciona">Como funciona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Reconhece algum destes problemas?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descubra como podemos resolver os principais gargalos que impedem o seu crescimento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, idx) => (
              <Link key={idx} to={point.link} className="group flex">
                <Card className="w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <point.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{point.description}</p>
                    <span className="text-indigo-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                      Ver solução <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
              Mais de 12.450
              <br />
              horas economizadas
            </h2>
            <p className="text-xl text-indigo-100 md:text-2xl">
              Nossas soluções já devolveram milhares de horas para equipes que antes viviam apagando
              incêndios operacionais. Transforme a maneira como sua empresa trabalha e ganhe
              produtividade real.
            </p>
          </div>
        </div>
      </section>

      {/* Real-time FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-slate-600">
                Tire suas dúvidas sobre como a Nuvo pode ajudar sua empresa.
              </p>
            </div>

            {loadingFaqs ? (
              <div className="space-y-4">
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            ) : errorFaqs ? (
              <div className="text-center py-12 bg-white rounded-xl border border-red-100 p-8 shadow-sm">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <p className="text-slate-900 font-medium mb-6">{errorFaqs}</p>
                <Button onClick={fetchFaqs} variant="outline" className="text-slate-700">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Tentar novamente
                </Button>
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
                <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">
                  Nenhuma pergunta disponível no momento.
                </p>
              </div>
            ) : (
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white rounded-xl shadow-sm border border-slate-100"
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="px-6 border-b border-slate-100 last:border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-indigo-600 hover:no-underline py-6">
                      {faq.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                      {faq.resposta}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
