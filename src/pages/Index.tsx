import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react'

const Index = () => {
  return (
    <div className="flex flex-col">
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-100 -z-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Escale suas vendas com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Qualificação Inteligente
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              A plataforma definitiva da Nuvo para analisar, pontuar e converter leads B2B baseada
              em dados reais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto shadow-lg shadow-indigo-200"
              >
                <Link to="/quiz">
                  Iniciar Quiz de Qualificação
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg w-full sm:w-auto bg-white hover:bg-slate-50"
              >
                <Link to="/roi">
                  <Calculator className="mr-2 w-5 h-5" />
                  Calcular ROI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Scoring Automático</h3>
              <p className="text-slate-600">
                Identifique os leads mais quentes automaticamente através de nosso algoritmo de
                pontuação configurável.
              </p>
            </div>
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Previsão de ROI</h3>
              <p className="text-slate-600">
                Mostre o valor do seu produto antes mesmo da primeira reunião com calculadoras de
                impacto interativas.
              </p>
            </div>
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Conversão Rápida</h3>
              <p className="text-slate-600">
                Reduza o atrito e acelere o fechamento com fluxos de captura desenhados para alta
                conversão.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
