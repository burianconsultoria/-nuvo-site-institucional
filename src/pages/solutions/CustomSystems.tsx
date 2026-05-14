import { ArrowRight, Code2, Rocket, Puzzle, Layers } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'

const MOCK_DATA = { loaded: true }

export default function CustomSystems() {
  useSEO({
    title: 'Sistemas Sob Medida | Nuvo Soluções',
    description:
      'Desenvolvimento de software exclusivo para regras de negócio complexas onde ferramentas de prateleira não funcionam.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const navigate = useNavigate()

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-indigo-950 text-slate-300 min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-5xl">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mb-6 border border-indigo-800 shadow-lg">
              <Code2 className="w-8 h-8 text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl">
              Nada pronto resolve? Criamos do zero para você.
            </h1>
            <p className="text-xl text-indigo-200/80 max-w-2xl leading-relaxed mb-10">
              Quando softwares de prateleira engessam a sua operação, é hora de ter a sua própria
              tecnologia. Desenvolvemos sistemas web modernos, rápidos e focados unicamente na sua
              necessidade.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-950 hover:bg-slate-100 h-14 px-8 text-lg font-semibold shadow-xl"
              onClick={() => navigate('/contato')}
            >
              Conversar com consultor
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-900/40 border border-indigo-800/50 p-8 rounded-2xl backdrop-blur-sm">
              <Puzzle className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Aderência Total</h3>
              <p className="text-indigo-200/70 leading-relaxed">
                Fluxos de trabalho e interfaces desenhados exatamente para a sua regra de negócio,
                sem funções inúteis ou falta de recursos.
              </p>
            </div>

            <div className="bg-indigo-900/40 border border-indigo-800/50 p-8 rounded-2xl backdrop-blur-sm">
              <Rocket className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Vantagem Competitiva</h3>
              <p className="text-indigo-200/70 leading-relaxed">
                Terceirize a tecnologia, mas seja o dono do processo. Construa um ativo digital que
                os seus concorrentes não podem simplesmente assinar.
              </p>
            </div>

            <div className="bg-indigo-900/40 border border-indigo-800/50 p-8 rounded-2xl backdrop-blur-sm">
              <Layers className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Integração Perfeita</h3>
              <p className="text-indigo-200/70 leading-relaxed">
                Conectamos seu novo sistema sob medida ao seu ERP antigo, métodos de pagamento ou
                qualquer API necessária sem gambiarras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageState>
  )
}
