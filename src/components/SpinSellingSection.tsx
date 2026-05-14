import { AlertCircle, Target, ArrowRight, Lightbulb } from 'lucide-react'

interface Props {
  color: string
  situation: string
  situationTitle?: string
  problem: string
  problemTitle?: string
  implication: string
  implicationTitle?: string
  needPayoff: string
  needPayoffTitle?: string
}

export function SpinSellingSection({
  color,
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
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que você precisa dessa solução?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Situation */}
          <div className="p-6 rounded-2xl border bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: color }} />
            <Target className="w-8 h-8 mb-4" style={{ color }} />
            <h3 className="text-xl font-bold mb-2">{situationTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{situation}</p>
          </div>
          {/* Problem */}
          <div className="p-6 rounded-2xl border bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: color }} />
            <AlertCircle className="w-8 h-8 mb-4" style={{ color }} />
            <h3 className="text-xl font-bold mb-2">{problemTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{problem}</p>
          </div>
          {/* Implication */}
          <div className="p-6 rounded-2xl border bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: color }} />
            <ArrowRight className="w-8 h-8 mb-4" style={{ color }} />
            <h3 className="text-xl font-bold mb-2">{implicationTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{implication}</p>
          </div>
          {/* Need-Payoff */}
          <div className="p-6 rounded-2xl border bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: color }} />
            <Lightbulb className="w-8 h-8 mb-4" style={{ color }} />
            <h3 className="text-xl font-bold mb-2">{needPayoffTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{needPayoff}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
