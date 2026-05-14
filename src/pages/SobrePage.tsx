import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Target, Lightbulb, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const values = [
  {
    title: 'Transparência',
    desc: 'Comunicação clara, honesta e direta em todas as etapas do projeto.',
    icon: Heart,
  },
  {
    title: 'Foco no Resultado',
    desc: 'Criamos soluções que realmente impactam o seu caixa e a produtividade.',
    icon: Target,
  },
  {
    title: 'Inovação Prática',
    desc: 'Tecnologia de ponta aplicada de forma simples para resolver problemas reais.',
    icon: Lightbulb,
  },
  {
    title: 'Parceria Verdadeira',
    desc: 'Jogamos do mesmo lado que a sua empresa. O seu sucesso é o nosso.',
    icon: Users,
  },
]

const team = [
  {
    name: 'Ana Silva',
    role: 'CEO & Fundadora',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=1',
  },
  {
    name: 'Carlos Santos',
    role: 'CTO',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=2',
  },
  {
    name: 'Mariana Costa',
    role: 'Head de Consultoria',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=3',
  },
  {
    name: 'Pedro Alves',
    role: 'Especialista em Automação',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=4',
  },
]

export default function SobrePage() {
  useEffect(() => {
    document.title = 'Sobre a Nuvo | Consultoria de Tecnologia'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça a história e missão da Nuvo.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Conheça a história e missão da Nuvo.'
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      {/* Manifesto Section */}
      <section className="bg-foreground text-background pt-32 pb-24 px-4 text-center rounded-b-[3rem] shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-[48px] md:text-6xl font-heading font-bold tracking-tight mb-10">
            Sobre a Nuvo
          </h1>
          <p className="text-base md:text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Nossa missão é resgatar o tempo dos empreendedores e suas equipes. Acreditamos que a
            tecnologia deve ser um motor de libertação, não uma fonte de dor de cabeça. Através de
            processos inteligentes e automações, transformamos empresas caóticas em operações
            eficientes e escaláveis.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[36px] font-heading font-bold text-foreground">Nossos Valores</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            Os pilares que guiam todas as nossas decisões e projetos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {values.map((val, idx) => (
            <Card
              key={val.title}
              className="border shadow-sm bg-card hover:shadow-md transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <val.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[24px] font-heading font-bold text-foreground mb-2">
                    {val.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-[36px] font-heading font-bold text-foreground">
              Quem faz acontecer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              A equipe de especialistas dedicada a transformar seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-sm z-10"
                  />
                </div>
                <h3 className="font-heading font-bold text-[24px] text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-[36px] md:text-4xl font-heading font-bold text-foreground mb-8">
          Vamos construir o futuro da sua operação juntos?
        </h2>
        <Button
          asChild
          size="lg"
          className="text-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 animate-cta-bounce"
        >
          <Link to="/contato">
            Conversar com consultor
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
