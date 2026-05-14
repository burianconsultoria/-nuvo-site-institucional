import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, FileText, Settings, LineChart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Mapeamento de processos e entrevistas com sua equipe para entender os gargalos da operação.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Proposta',
    description:
      'Apresentação de um plano de ação detalhado com as soluções e o ROI (Retorno sobre Investimento) estimado.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Implementação',
    description:
      'Execução das automações, integração de sistemas e configuração do seu novo ambiente de trabalho.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description:
      'Monitoramento contínuo dos resultados, garantindo que as soluções entreguem a eficiência esperada.',
    icon: LineChart,
  },
]

export default function ComoFuncionaPage() {
  useEffect(() => {
    document.title = 'Como Funciona | Nuvo'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Conheça o processo de transformação da Nuvo em 4 etapas.',
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Conheça o processo de transformação da Nuvo em 4 etapas.'
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-[48px] md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
          Como a Nuvo transforma sua operação
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Nosso método foi desenhado para ser transparente, ágil e focado em resultados. Acompanhe o
          caminho que trilharemos juntos para a eficiência.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid md:grid-cols-2 gap-8 mb-24 relative">
        {steps.map((step, idx) => (
          <Card
            key={step.number}
            className="relative overflow-hidden border shadow-sm group hover:shadow-md transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="absolute top-0 right-0 -mt-6 -mr-6 text-9xl font-heading font-black text-muted opacity-30 select-none group-hover:scale-110 transition-transform duration-500 z-0">
              {step.number}
            </div>
            <CardContent className="p-10 relative z-10">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-[24px] font-heading font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-primary/5 to-background border border-primary/20 rounded-[2.5rem] p-12 shadow-sm animate-slide-up">
        <h2 className="text-[36px] md:text-4xl font-heading font-bold text-foreground mb-6">
          Pronto para dar o primeiro passo?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Faça nosso diagnóstico rápido online agora mesmo e descubra o nível de maturidade da sua
          operação e onde você pode melhorar.
        </p>
        <Button
          asChild
          size="lg"
          className="text-lg rounded-xl shadow-md animate-cta-bounce"
          aria-label="Fazer diagnóstico gratuito"
        >
          <Link to="/diagnostico-rapido">
            Quero um diagnóstico gratuito
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
