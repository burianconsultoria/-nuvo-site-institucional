import { Calendar, Clock, Mic, MessageSquareText, LayoutDashboard, RefreshCcw } from 'lucide-react'

export function AIFeaturesSection({ color }: { color?: string }) {
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
    <div className="py-24 bg-card text-card-foreground border-y border-border/20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Recursos e Funcionalidades
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tudo o que você precisa para transformar seu WhatsApp em uma máquina de conversão
            automática.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-background p-8 rounded-2xl border border-border/20 hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-support/10 text-support">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
