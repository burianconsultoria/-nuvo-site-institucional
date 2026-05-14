import { Filter, Users, FileText, Receipt, ArrowLeftRight, CheckCircle } from 'lucide-react'

interface Props {
  color: string
}

export function AutomationExamplesSection({ color }: Props) {
  const examples = [
    {
      icon: Filter,
      title: '1. Lead capture e qualificação',
      description: 'Capturar dados do WhatsApp/Web/Instagram e qualificar o score direto no CRM.',
    },
    {
      icon: Users,
      title: '2. Onboarding de clientes',
      description:
        'Boas-vindas automáticas por e-mail, criação de conta e lembretes de primeiros passos.',
    },
    {
      icon: FileText,
      title: '3. Emissão de relatórios',
      description:
        'Coleta de dados em diversos sistemas (CRM, ERP) com envio automático no WhatsApp.',
    },
    {
      icon: Receipt,
      title: '4. Cobrança e faturamento',
      description:
        'Emissão automática de Notas Fiscais e lembretes de vencimento integrados ao WhatsApp.',
    },
    {
      icon: ArrowLeftRight,
      title: '5. Comunicação entre sistemas',
      description: 'Sincronização bidirecional de dados entre o CRM comercial, ERP e planilhas.',
    },
    {
      icon: CheckCircle,
      title: '6. Fluxo de aprovação',
      description:
        'Roteamento de pedidos (compras, descontos) baseado em regras, com lembretes automáticos.',
    },
  ]

  return (
    <div className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">6 Exemplos Práticos de Automação</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja como a automação pode transformar o dia a dia da sua operação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((feature, i) => (
            <div
              key={i}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
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
