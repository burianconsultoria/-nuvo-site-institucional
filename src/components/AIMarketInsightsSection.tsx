export function AIMarketInsightsSection({ color }: { color: string }) {
  const stats = [
    {
      value: '80%',
      label: 'Mais chances de conversão ao responder em 5 minutos',
      source: 'Harvard Business Review',
    },
    {
      value: '12h',
      label: 'Tempo médio de resposta das empresas',
      source: 'SuperOffice',
    },
    {
      value: '30%',
      label: 'Redução de custos operacionais em atendimento',
      source: 'McKinsey',
    },
    {
      value: '69%',
      label: 'Dos clientes preferem canais como o WhatsApp',
      source: 'Zendesk',
    },
  ]

  return (
    <div className="py-20 bg-[#1C1C28] text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que os dados dizem sobre o mercado
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ignorar a automação inteligente é deixar dinheiro na mesa todos os dias.
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
