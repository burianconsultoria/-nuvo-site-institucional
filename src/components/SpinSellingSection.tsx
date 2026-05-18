import { AlertCircle, Target, ArrowRight, Lightbulb } from 'lucide-react'

interface Props {
  situation: string
  situationTitle?: string
  problem: string
  problemTitle?: string
  implication: string
  implicationTitle?: string
  needPayoff: string
  needPayoffTitle?: string
  color?: string
}

export function SpinSellingSection({
  situation,
  situationTitle = 'Situação Atual',
  problem,
  problemTitle = 'O Problema',
  implication,
  implicationTitle = 'A Implicação',
  needPayoff,
  needPayoffTitle = 'A Solução (Need-Payoff)',
}: Props) {
  return (
    <div className="py-24 bg-cardLight text-cardLight-foreground">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Por que você precisa dessa solução?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-foreground/10 bg-white relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <Target className="w-8 h-8 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-3">{situationTitle}</h3>
            <p className="text-foreground/80 leading-relaxed">{situation}</p>
          </div>
          <div className="p-8 rounded-2xl border border-foreground/10 bg-white relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-expression" />
            <AlertCircle className="w-8 h-8 mb-4 text-expression" />
            <h3 className="text-xl font-bold mb-3">{problemTitle}</h3>
            <p className="text-foreground/80 leading-relaxed">{problem}</p>
          </div>
          <div className="p-8 rounded-2xl border border-foreground/10 bg-white relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-support" />
            <ArrowRight className="w-8 h-8 mb-4 text-support" />
            <h3 className="text-xl font-bold mb-3">{implicationTitle}</h3>
            <p className="text-foreground/80 leading-relaxed">{implication}</p>
          </div>
          <div className="p-8 rounded-2xl border border-foreground/10 bg-white relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-success" />
            <Lightbulb className="w-8 h-8 mb-4 text-success" />
            <h3 className="text-xl font-bold mb-3">{needPayoffTitle}</h3>
            <p className="text-foreground/80 leading-relaxed">{needPayoff}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
