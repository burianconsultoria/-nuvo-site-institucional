import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContactModal } from '@/contexts/ContactModalContext'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'
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
import { ChaosToOrderPattern } from '@/components/ui/patterns'
import { getFaqs } from '@/services/api'

const Index = () => {
  const [faqs, setFaqs] = useState<any[]>([])
  const [loadingFaqs, setLoadingFaqs] = useState(true)
  const [errorFaqs, setErrorFaqs] = useState<string | null>(null)

  const { content, settings, heroBackgroundUrl } = useSiteSettings()
  const { openModal } = useContactModal()

  const heroTitle =
    content.home_hero_title || 'Sua empresa cresce mais rápido do que consegue se organizar?'
  const heroSubtitle =
    content.home_hero_subtitle ||
    'Supere o caos operacional com processos inteligentes, automação e agentes de IA.'
  const heroDesc =
    content.home_hero_description ||
    'A Nuvo ajuda sua empresa a superar o caos operacional através de automação, processos inteligentes e sistemas sob medida. Liberte seu tempo para focar no que realmente importa: o crescimento do seu negócio.'

  const painTitle = content.home_pain_title || 'Reconhece algum destes problemas?'
  const painSubtitle =
    content.home_pain_subtitle ||
    'Descubra como podemos resolver os principais gargalos que impedem o seu crescimento.'

  const solutionsTitle = content.home_solutions_title || 'Nossas Soluções'
  const solutionsSubtitle =
    content.home_solutions_subtitle ||
    'Tecnologia, processos e inteligência artificial para modernizar a sua operação.'

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
      link: '/solucoes/agentes-de-ia',
    },
    {
      title: 'Tarefa manual demais?',
      description:
        'Integre sistemas e automatize tarefas repetitivas para que sua equipe foque no que importa.',
      icon: Settings,
      link: '/solucoes/automacoes-de-processos',
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
      <section className="relative pt-48 md:pt-56 pb-32 md:pb-40 overflow-hidden bg-background text-foreground min-h-[85vh] flex items-center border-b border-border/10">
        <ChaosToOrderPattern />
        {heroBackgroundUrl ? (
          settings?.hero_background_type === 'video' ? (
            <video
              src={heroBackgroundUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 mix-blend-screen"
            />
          ) : (
            <img
              src={heroBackgroundUrl}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 mix-blend-screen"
            />
          )
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-0" />

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-expression mr-2 animate-pulse"></span>
                Consultoria de Tecnologia para PMEs
              </div>

              <h1
                className="text-[36px] md:text-[60px] font-heading font-bold tracking-tight leading-[1.1] drop-shadow-md text-left text-foreground [&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: heroTitle }}
              />

              <div
                className="text-[20px] md:text-[24px] font-heading font-medium text-foreground/90 drop-shadow-sm text-left [&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: heroSubtitle }}
              />

              <div
                className="text-[16px] md:text-[18px] text-foreground/70 max-w-xl mt-4 relative z-10 text-left leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: heroDesc }}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-8 items-start">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="text-lg w-full sm:w-auto shadow-xl shadow-primary/20 animate-cta-bounce min-h-[52px] px-8 py-3 rounded-xl cursor-pointer"
                  aria-label="Fazer diagnóstico gratuito"
                >
                  Diagnóstico gratuito
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg w-full sm:w-auto min-h-[52px] px-8 py-3 rounded-xl transition-all"
                  aria-label="Entender como funciona"
                >
                  <Link to="/como-funciona">Como funciona</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative h-[500px] w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>

              <div className="absolute top-[10%] right-[15%] flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-card shadow-2xl border border-border/20 animate-float">
                <Bot className="w-12 h-12 text-primary" aria-hidden="true" />
              </div>

              <div className="absolute top-[40%] left-[10%] flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-card shadow-2xl border border-border/20 animate-float-delayed">
                <Settings className="w-10 h-10 text-support" aria-hidden="true" />
              </div>

              <div className="absolute bottom-[20%] right-[25%] flex flex-col items-center justify-center w-28 h-28 rounded-2xl bg-card shadow-2xl border border-border/20 animate-float-fast">
                <BarChart3 className="w-14 h-14 text-expression" aria-hidden="true" />
              </div>

              <div className="absolute top-[60%] right-[5%] flex items-center gap-3 px-6 py-4 rounded-full bg-card shadow-2xl border border-border/20 animate-float">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <span className="text-base font-semibold text-foreground">Eficiência +140%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-card relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] hidden xl:block opacity-10 animate-fade-in-up">
            <MessageSquare className="w-16 h-16 animate-float text-primary" aria-hidden="true" />
          </div>
          <div
            className="absolute top-[40%] right-[5%] hidden xl:block opacity-10 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Settings className="w-20 h-20 animate-float-delayed text-support" aria-hidden="true" />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-[24px] md:text-[36px] font-heading font-semibold text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: painTitle }}
            ></h2>
            <p
              className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: painSubtitle }}
            ></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {painPoints.map((point, idx) => (
              <Link
                key={idx}
                to={point.link}
                className="group flex animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
                aria-label={`Ver solução para ${point.title}`}
              >
                <Card className="product-card w-full border-l-4 border-l-primary rounded-xl bg-background border-border/10">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:scale-110 transition-all duration-300">
                        <point.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>
                    <CardTitle className="text-[18px] font-heading font-semibold text-foreground leading-tight min-h-[44px]">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/60 mb-4 line-clamp-3">
                      {point.description}
                    </p>
                    <span className="text-sm font-medium flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                      Ver solução <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="py-24 bg-cardLight text-cardLight-foreground relative overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-[24px] md:text-[40px] font-heading font-semibold mb-4"
              dangerouslySetInnerHTML={{ __html: solutionsTitle }}
            ></h2>
            <p
              className="text-[16px] md:text-[18px] opacity-80 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: solutionsSubtitle }}
            ></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Diagnóstico de Eficiência',
                desc: 'Avalie a maturidade digital do seu negócio e encontre os principais gargalos.',
                image: 'https://img.usecurling.com/p/400/250?q=dashboard,office&color=purple',
                link: '/solucoes/diagnostico-de-eficiencia',
              },
              {
                title: 'Agente de IA',
                desc: 'Atendimento e vendas automáticas via WhatsApp operando 24 horas por dia.',
                image: 'https://img.usecurling.com/p/400/250?q=technology,office&color=purple',
                link: '/solucoes/agentes-de-ia',
              },
              {
                title: 'Automação de Processos',
                desc: 'Integrações inteligentes que eliminam tarefas repetitivas e erros humanos.',
                image: 'https://img.usecurling.com/p/400/250?q=automation,people&color=purple',
                link: '/solucoes/automacoes-de-processos',
              },
              {
                title: 'CRM e Comercial',
                desc: 'Estruturação do processo de vendas para maior conversão e previsibilidade.',
                image: 'https://img.usecurling.com/p/400/250?q=sales,meeting&color=purple',
                link: '/solucoes/crm-e-organizacao-comercial',
              },
              {
                title: 'Sistemas Sob Medida',
                desc: 'Desenvolvimento de plataformas e aplicativos customizados para a sua regra de negócio.',
                image: 'https://img.usecurling.com/p/400/250?q=code,team&color=purple',
                link: '/solucoes/sistemas-sob-medida',
              },
            ].map((sol, i) => (
              <Link
                to={sol.link}
                key={i}
                className="group block animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Card className="overflow-hidden bg-white text-cardLight-foreground border-border/10 h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                      {sol.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="opacity-70">{sol.desc}</p>
                    <div className="mt-6 font-medium flex items-center text-primary">
                      Conheça a solução{' '}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
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

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-[32px] md:text-[48px] font-heading font-bold tracking-tighter leading-tight">
              Mais de 12.450
              <br />
              horas economizadas
            </h2>
            <p className="text-[16px] md:text-[18px] text-primary-foreground/90 max-w-2xl mx-auto">
              Nossas soluções já devolveram milhares de horas para equipes que antes viviam apagando
              incêndios operacionais. Transforme a maneira como sua empresa trabalha e ganhe
              produtividade real.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-left animate-slide-up hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <img
                      src="https://img.usecurling.com/i?q=gym&color=white"
                      alt="Company Logo"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Rede de Academias</h4>
                    <p className="text-sm text-white/70">Redução de 80% no tempo de resposta</p>
                  </div>
                </div>
                <p className="text-white/90 italic">
                  "Com o Agente de IA da Nuvo, nosso atendimento passou a rodar 24h. As conversões
                  aumentaram 35% e a equipe de vendas agora foca só nos casos complexos."
                </p>
              </div>

              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-left animate-slide-up hover:-translate-y-1 transition-transform"
                style={{ animationDelay: '200ms' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <img
                      src="https://img.usecurling.com/i?q=clinic&color=white"
                      alt="Company Logo"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Clínica Médica</h4>
                    <p className="text-sm text-white/70">Automação de agendamentos</p>
                  </div>
                </div>
                <p className="text-white/90 italic">
                  "Integrar nosso sistema de agendamento com o WhatsApp mudou o jogo. Faltas
                  reduziram em 40% com os lembretes automáticos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time FAQ Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[30%] left-[10%] hidden lg:block animate-fade-in-up">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-support/10 animate-float text-support">
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

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-[24px] md:text-[36px] font-heading font-semibold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-base md:text-lg text-foreground/70">
                Tire suas dúvidas sobre como a Nuvo pode ajudar sua empresa.
              </p>
            </div>

            {loadingFaqs ? (
              <div className="space-y-4">
                <Skeleton className="h-16 w-full rounded-lg bg-card" />
                <Skeleton className="h-16 w-full rounded-lg bg-card" />
                <Skeleton className="h-16 w-full rounded-lg bg-card" />
              </div>
            ) : errorFaqs ? (
              <div className="text-center py-12 bg-card rounded-xl border border-destructive/20 p-8 shadow-sm animate-fade-in">
                <AlertCircle
                  className="w-12 h-12 text-destructive mx-auto mb-4"
                  aria-hidden="true"
                />
                <p className="text-foreground font-medium mb-6">{errorFaqs}</p>
                <Button onClick={fetchFaqs} variant="outline">
                  <RefreshCcw className="w-4 h-4 mr-2" aria-hidden="true" />
                  Tentar novamente
                </Button>
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl border border-border/20 p-8 shadow-sm animate-fade-in">
                <HelpCircle
                  className="w-12 h-12 text-foreground/50 mx-auto mb-4"
                  aria-hidden="true"
                />
                <p className="text-foreground/70 font-medium">
                  Nenhuma pergunta disponível no momento.
                </p>
              </div>
            ) : (
              <Accordion
                type="single"
                collapsible
                className="w-full bg-card rounded-xl shadow-sm border border-border/20 animate-fade-in"
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="px-6 border-b border-border/20 last:border-0 data-[state=open]:bg-primary/5 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground py-6 hover:no-underline">
                      {faq.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-6">
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
