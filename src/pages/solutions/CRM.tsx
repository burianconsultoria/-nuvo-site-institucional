import { ArrowRight, Users, BellRing, PieChart, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'

const MOCK_DATA = { loaded: true }

export default function CRM() {
  useSEO({
    title: 'CRM e Organização Comercial | Nuvo Soluções',
    description:
      'Implemente um CRM que sua equipe vai amar usar. Centralize clientes e garanta que nenhum follow-up seja esquecido.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const navigate = useNavigate()

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-white min-h-screen">
        <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Organize seus clientes e nunca mais perca um follow-up.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deixamos a confusão de planilhas para trás. Implementamos e parametrizamos sistemas de
              CRM aderentes ao seu processo de vendas, garantindo adoção pelo time e clareza para a
              gestão.
            </p>
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 h-14 px-8 text-lg"
              onClick={() => navigate('/diagnostico-rapido')}
            >
              Organizar meus clientes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão 360 do Cliente</h3>
              <p className="text-slate-600">
                Histórico completo de interações, e-mails, ligações e propostas em um só lugar. Todo
                vendedor sabe exatamente o contexto do cliente.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <BellRing className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Automação de Follow-up</h3>
              <p className="text-slate-600">
                Alertas, tarefas e lembretes criados automaticamente baseado no status da
                negociação. Nenhuma venda esfria por esquecimento.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <PieChart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Previsibilidade</h3>
              <p className="text-slate-600">
                Funil de vendas organizado e relatórios de conversão precisos. Saiba exatamente
                quanto entrará de caixa nos próximos meses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageState>
  )
}
