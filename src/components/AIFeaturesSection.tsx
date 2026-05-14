import { Calendar, Clock, Mic, MessageSquareText, LayoutDashboard, RefreshCcw } from 'lucide-react'

export function AIFeaturesSection({ color }: { color: string }) {
  const features = [
    {
      icon: Calendar,
      title: 'Agendamento inteligente',
      description: 'Integração com Google Calendar/Calendly para marcar reuniões automaticamente.',
    },
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Capture até 35% mais leads que chegam durante a noite e finais de semana.',
    },
    {
      icon: MessageSquareText,
      title: 'Customização de tom de voz',
      description:
        'Treinamento para a personalidade do negócio (Advocacia, Academia, Indústria, etc).',
    },
    {
      icon: Mic,
      title: 'Entendimento de áudio e texto',
      description: 'Capacidade de processar e extrair informações até de mensagens de voz.',
    },
    {
      icon: LayoutDashboard,
      title: 'Painel administrativo',
      description: 'Métricas de volume, conversão e logs completos de transferência para humanos.',
    },
    {
      icon: RefreshCcw,
      title: 'Atualizações via WhatsApp',
      description: 'Habilidade de atualizar o treinamento do agente diretamente pelo aplicativo.',
    },
  ]

  return (
    <div className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos e Funcionalidades</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tudo o que você precisa para transformar seu WhatsApp em uma máquina de conversão
            automática.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${color}15`, color }}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
