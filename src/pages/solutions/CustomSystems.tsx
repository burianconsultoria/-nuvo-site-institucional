import { ArrowRight, Code2, Rocket, Puzzle, Layers } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'

const MOCK_DATA = { loaded: true }

export default function CustomSystems() {
  useSEO({
    title: 'Sistemas Sob Medida | Nuvo Soluções',
    description:
      'Desenvolvimento de software exclusivo para regras de negócio complexas onde ferramentas de prateleira não funcionam.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const navigate = useNavigate()
  const { openModal } = useContactModal()

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-[#1C1C28] text-slate-300 min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-5xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-product-sys/10 blur-[100px] pointer-events-none" />
          <div className="flex flex-col items-center text-center mb-20 relative z-10">
            <div className="w-16 h-16 bg-product-sys/10 rounded-full flex items-center justify-center mb-6 border border-product-sys/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Code2 className="w-8 h-8 text-product-sys" />
            </div>
            <h1 className="text-[32px] md:text-[48px] font-heading font-extrabold text-white tracking-tight mb-6 max-w-3xl">
              Nada pronto resolve? Criamos do zero para você.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              Quando softwares de prateleira engessam a sua operação, é hora de ter a sua própria
              tecnologia. Desenvolvemos sistemas web modernos, rápidos e focados unicamente na sua
              necessidade.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-[44px] rounded-lg px-8 text-lg font-semibold shadow-xl cursor-pointer"
              onClick={openModal}
            >
              Conversar com consultor
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/5 border border-product-sys/20 p-8 rounded-2xl backdrop-blur-sm hover:border-product-sys/50 transition-colors">
              <Puzzle className="w-10 h-10 text-product-sys mb-6" />
              <h3 className="text-[24px] font-heading font-bold text-white mb-3">
                Aderência Total
              </h3>
              <p className="text-white/70 leading-relaxed">
                Fluxos de trabalho e interfaces desenhados exatamente para a sua regra de negócio,
                sem funções inúteis ou falta de recursos.
              </p>
            </div>

            <div className="bg-white/5 border border-product-sys/20 p-8 rounded-2xl backdrop-blur-sm hover:border-product-sys/50 transition-colors">
              <Rocket className="w-10 h-10 text-product-sys mb-6" />
              <h3 className="text-[24px] font-heading font-bold text-white mb-3">
                Vantagem Competitiva
              </h3>
              <p className="text-white/70 leading-relaxed">
                Terceirize a tecnologia, mas seja o dono do processo. Construa um ativo digital que
                os seus concorrentes não podem simplesmente assinar.
              </p>
            </div>

            <div className="bg-white/5 border border-product-sys/20 p-8 rounded-2xl backdrop-blur-sm hover:border-product-sys/50 transition-colors">
              <Layers className="w-10 h-10 text-product-sys mb-6" />
              <h3 className="text-[24px] font-heading font-bold text-white mb-3">
                Integração Perfeita
              </h3>
              <p className="text-white/70 leading-relaxed">
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
