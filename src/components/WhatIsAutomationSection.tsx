import { CheckCircle2 } from 'lucide-react'

export function WhatIsAutomationSection({ color }: { color?: string }) {
  const items = [
    'Integração entre sistemas',
    'Disparo automático',
    'Geração de documentos',
    'Sincronização de dados',
    'Fluxos de aprovação',
    'Onboarding automático',
  ]

  return (
    <div className="py-24 bg-cardLight text-cardLight-foreground">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            O que é Automação de Processos?
          </h2>
          <p className="text-xl text-foreground/80">
            Tecnologia que executa tarefas repetitivas para sua equipe focar no que importa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white p-5 rounded-xl border border-foreground/10 shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0 text-support" />
              <span className="font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
