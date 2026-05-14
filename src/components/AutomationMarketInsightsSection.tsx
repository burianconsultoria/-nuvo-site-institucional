interface Props {
  color: string
}

export function AutomationMarketInsightsSection({ color }: Props) {
  const stats = [
    {
      value: '60%',
      label: 'Das ocupações têm pelo menos 30% das atividades automatizáveis',
      source: 'McKinsey',
    },
    {
      value: '22%',
      label: 'De aumento na produtividade após adoção de IA/automação',
      source: 'Deloitte',
    },
    {
      value: '65%',
      label: 'Das interações digitais serão via automação/IA até 2027',
      source: 'IDC',
    },
    {
      value: '25%',
      label: 'A produtividade da PME é apenas 1/4 da grande empresa',
      source: 'Sebrae',
    },
  ]

  return (
    <div className="py-20 bg-[#1C1C28] text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dados que comprovam o valor da automação
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A tecnologia deixou de ser diferencial e passou a ser questão de sobrevivência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
            >
              <div className="text-4xl lg:text-5xl font-extrabold mb-3" style={{ color }}>
                {stat.value}
              </div>
              <p className="text-lg font-medium text-white mb-2 leading-tight">{stat.label}</p>
              <p className="text-sm text-slate-400 font-medium">Fonte: {stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
