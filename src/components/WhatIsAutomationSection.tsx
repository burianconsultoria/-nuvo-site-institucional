import { CheckCircle2 } from 'lucide-react'

interface Props {
  color: string
}

export function WhatIsAutomationSection({ color }: Props) {
  const items = [
    'Integração entre sistemas',
    'Disparo automático',
    'Geração de documentos',
    'Sincronização de dados',
    'Fluxos de aprovação',
    'Onboarding automático',
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que é Automação de Processos?</h2>
          <h3 className="text-xl text-slate-600 font-medium">
            Tecnologia que executa tarefas repetitivas para sua equipe focar no que importa
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color }} />
              <span className="font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
