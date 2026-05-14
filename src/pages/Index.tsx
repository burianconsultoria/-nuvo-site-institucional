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
  Bot,
  Zap,
  BarChart3,
  CheckCircle2,
  Workflow,
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
      borderClass: 'border-l-product-ai hover:shadow-product-ai/20',
      iconClass: 'bg-product-ai-light text-product-ai group-hover:bg-product-ai',
      textClass: 'text-product-ai',
    },
    {
      title: 'Tarefa manual demais?',
      description:
        'Integre sistemas e automatize tarefas repetitivas para que sua equipe foque no que importa.',
      icon: Settings,
      link: '/solucoes/automacao-de-processos',
      borderClass: 'border-l-product-auto hover:shadow-product-auto/20',
      iconClass: 'bg-product-auto-light text-product-auto group-hover:bg-product-auto',
      textClass: 'text-product-auto',
    },
    {
      title: 'Dependem de você para tudo?',
      description:
        'Mapeie e otimize seus processos para criar uma operação independente e escalável.',
      icon: Activity,
      link: '/solucoes/diagnostico-de-eficiencia',
      borderClass: 'border-l-product-diag hover:shadow-product-diag/20',
      iconClass: 'bg-product-diag-light text-product-diag group-hover:bg-product-diag',
      textClass: 'text-product-diag',
    },
    {
      title: 'Cliente some sem follow-up?',
      description:
        'Estruture seu CRM e organize seu processo comercial para não perder mais vendas.',
      icon: Users,
      link: '/solucoes/crm-e-organizacao-comercial',
      borderClass: 'border-l-product-crm hover:shadow-product-crm/20',
      iconClass: 'bg-product-crm-light text-product-crm group-hover:bg-product-crm',
      textClass: 'text-product-crm',
    },
    {
      title: 'Nada pronto resolve?',
      description:
        'Desenvolvimento de sistemas exclusivos e sob medida para o seu modelo de negócio.',
      icon: Code,
      link: '/solucoes/sistemas-sob-medida',
      borderClass: 'border-l-product-sys hover:shadow-product-sys/20',
      iconClass: 'bg-product-sys-light text-product-sys group-hover:bg-product-sys',
      textClass: 'text-product-sys',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />

        {/* Floating Elements Background - Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Element 1: Bot Icon */}
          <div
            className="absolute top-[15%] left-[10%] hidden md:block animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl border border-border animate-float">
              <Bot className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
          </div>
          {/* Element 2: Zap Icon */}
          <div
            className="absolute top-[25%] right-[12%] hidden lg:block animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-xl border border-border animate-float-delayed">
              <Zap className="w-10 h-10 text-secondary" aria-hidden="true" />
            </div>
          </div>
          {/* Element 3: BarChart Icon */}
          <div
            className="absolute bottom-[20%] left-[15%] hidden lg:block animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-xl border border-border animate-float-fast">
              <BarChart3 className="w-7 h-7 text-tertiary" aria-hidden="true" />
            </div>
          </div>
          {/* Element 4: ROI Badge */}
          <div
            className="absolute bottom-[25%] right-[20%] hidden md:block animate-fade-in-up"
            style={{ animationDelay: '700ms' }}
          >
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white shadow-xl border border-border animate-float">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Eficiência +140%</span>
            </div>
          </div>
          {/* Mobile subtle element */}
          <div className="absolute top-[10%] right-[5%] block md:hidden opacity-50 animate-float-delayed">
            <Zap className="w-8 h-8 text-secondary" aria-hidden="true" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-[32px] md:text-[48px] font-heading font-bold tracking-tight leading-tight text-foreground drop-shadow-sm">
              Sua empresa cresce mais rápido do que consegue se organizar?
            </h1>
            <h3 className="text-[18px] md:text-[24px] font-heading font-semibold text-muted-foreground drop-shadow-sm max-w-3xl mx-auto">
              Supere o caos operacional com processos inteligentes, automação e agentes de IA.
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 relative z-10">
              A Nuvo ajuda sua empresa a superar o caos operacional através de automação, processos
              inteligentes e sistemas sob medida. Liberte seu tempo para focar no que realmente
              importa: o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                asChild
                size="lg"
                className="text-lg w-full sm:w-auto shadow-lg animate-cta-bounce min-h-[44px] px-8 py-3 rounded-lg bg-[#4A3EFF] hover:bg-[#4A3EFF]/90 text-white"
                aria-label="Fazer diagnóstico gratuito"
              >
                <Link to="/diagnostico-rapido">
                  Quero um diagnóstico gratuito
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg w-full sm:w-auto bg-background/80 backdrop-blur-sm min-h-[44px] px-8 py-3 rounded-lg border-2 hover:bg-accent"
                aria-label="Entender como funciona"
              >
                <Link to="/como-funciona">Como funciona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        {/* Floating Elements Background - Body (Pain Points) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] hidden xl:block opacity-20 animate-fade-in-up">
            <MessageSquare className="w-16 h-16 animate-float text-product-ai" aria-hidden="true" />
          </div>
          <div
            className="absolute top-[40%] right-[5%] hidden xl:block opacity-20 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Settings
              className="w-20 h-20 animate-float-delayed text-product-auto"
              aria-hidden="true"
            />
          </div>
          <div
            className="absolute bottom-[20%] left-[8%] hidden xl:block opacity-20 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <Users className="w-16 h-16 animate-float-fast text-product-crm" aria-hidden="true" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-[24px] md:text-[36px] font-heading font-semibold text-foreground mb-4">
              Reconhece algum destes problemas?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como podemos resolver os principais gargalos que impedem o seu crescimento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, idx) => (
              <Link
                key={idx}
                to={point.link}
                className="group flex animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
                aria-label={`Ver solução para ${point.title}`}
              >
                <Card className={`product-card w-full border-l-4 ${point.borderClass}`}>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:text-white transition-all duration-300 ${point.iconClass}`}
                    >
                      <point.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-[18px] md:text-[24px] font-heading font-semibold text-foreground">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground mb-4">{point.description}</p>
                    <span
                      className={`font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300 ${point.textClass}`}
                    >
                      Ver solução <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Floating Elements Background - Social Proof */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-[20%] right-[20%] hidden md:block opacity-30 animate-fade-in-up">
            <CheckCircle2 className="w-12 h-12 animate-float-fast text-white" aria-hidden="true" />
          </div>
          <div
            className="absolute bottom-[30%] left-[25%] hidden md:block opacity-30 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Workflow className="w-16 h-16 animate-float text-white" aria-hidden="true" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-[32px] md:text-[48px] font-heading font-bold tracking-tighter leading-tight">
              Mais de 12.450
              <br />
              horas economizadas
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Nossas soluções já devolveram milhares de horas para equipes que antes viviam apagando
              incêndios operacionais. Transforme a maneira como sua empresa trabalha e ganhe
              produtividade real.
            </p>
          </div>
        </div>
      </section>

      {/* Real-time FAQ Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating Elements Background - FAQ */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[30%] left-[10%] hidden lg:block animate-fade-in-up">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 animate-float text-secondary">
              <HelpCircle className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
          <div
            className="absolute bottom-[20%] right-[10%] hidden lg:block animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 animate-float-delayed text-primary">
              <Code className="w-8 h-8" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-[24px] md:text-[36px] font-heading font-semibold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
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
              <div className="text-center py-12 bg-card rounded-xl border border-destructive/20 p-8 shadow-sm animate-fade-in">
                <AlertCircle
                  className="w-12 h-12 text-destructive mx-auto mb-4"
                  aria-hidden="true"
                />
                <p className="text-foreground font-medium mb-6">{errorFaqs}</p>
                <Button onClick={fetchFaqs} variant="outline" className="text-foreground">
                  <RefreshCcw className="w-4 h-4 mr-2" aria-hidden="true" />
                  Tentar novamente
                </Button>
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl border border-border p-8 shadow-sm animate-fade-in">
                <HelpCircle
                  className="w-12 h-12 text-muted-foreground mx-auto mb-4"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground font-medium">
                  Nenhuma pergunta disponível no momento.
                </p>
              </div>
            ) : (
              <Accordion
                type="single"
                collapsible
                className="w-full bg-card rounded-xl shadow-sm border border-border animate-fade-in"
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="px-6 border-b border-border last:border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground py-6">
                      {faq.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
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
