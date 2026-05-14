import { ArrowRight, Code2 } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'
import { PageState } from '@/components/ui/page-state'
import { useSimulatedFetch } from '@/hooks/use-simulated-fetch'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/contexts/ContactModalContext'
import { SpinSellingSection } from '@/components/SpinSellingSection'
import { PageFaqSection } from '@/components/PageFaqSection'

const MOCK_DATA = { loaded: true }
const THEME_COLOR = '#4FD487'

export default function CustomSystems() {
  useSEO({
    title: 'Desenvolvimento de Sistemas Customizados | Nuvo Company',
    description:
      'Desenvolvimento de software exclusivo para regras de negócio complexas onde ferramentas de prateleira não funcionam.',
  })

  const { loading, error, empty, retry } = useSimulatedFetch(MOCK_DATA)
  const { openModal } = useContactModal()

  const faqs = [
    {
      question: 'A propriedade intelectual (código fonte) é minha?',
      answer:
        'Sim. Após a conclusão e pagamento do projeto, todo o código fonte e direitos pertencem exclusivamente à sua empresa.',
    },
    {
      question: 'Vocês fazem a manutenção após a entrega?',
      answer:
        'Sim. Oferecemos contratos de SLA para manutenção preventiva, corretiva e evolutiva do sistema.',
    },
    {
      question: 'Quais tecnologias vocês utilizam?',
      answer:
        'Trabalhamos com stacks modernas: React, TypeScript, Node.js e bancos de dados em nuvem garantindo alta performance.',
    },
    {
      question: 'Como sei que o sistema não ficará obsoleto?',
      answer:
        'Utilizamos arquiteturas escaláveis e padrões de mercado que facilitam a atualização constante.',
    },
    {
      question: 'Pode ser integrado ao meu sistema ERP?',
      answer:
        'Sim. Se o seu ERP possuir uma API aberta, podemos criar integrações nativas bidirecionais.',
    },
    {
      question: 'Qual o tempo médio de desenvolvimento?',
      answer:
        'Varia entre 2 a 6 meses dependendo do tamanho do escopo definido na fase de projeto.',
    },
    {
      question: 'Existe uma fase de testes?',
      answer:
        'Sim, realizamos testes contínuos de qualidade (QA) durante todo o ciclo e homologação junto com a sua equipe.',
    },
  ]

  return (
    <PageState loading={loading} error={error} empty={empty} onRetry={retry}>
      <div className="bg-[#1C1C28] text-slate-300 min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-4xl relative text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto border"
            style={{ borderColor: `${THEME_COLOR}50`, backgroundColor: `${THEME_COLOR}20` }}
          >
            <Code2 className="w-8 h-8" style={{ color: THEME_COLOR }} />
          </div>
          <h1 className="text-[32px] md:text-[48px] font-heading font-extrabold text-white tracking-tight mb-6">
            Sistemas Sob Medida — Softwares Exclusivos para Regras de Negócio Únicas
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Quando softwares de prateleira engessam a sua operação, é hora de ter a sua própria
            tecnologia. Desenvolvemos sistemas web modernos, rápidos e focados unicamente na sua
            necessidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              style={{ backgroundColor: THEME_COLOR, color: '#000' }}
              className="h-[44px] rounded-lg px-8 text-lg font-bold hover:opacity-90"
              onClick={openModal}
            >
              Solicitar orçamento de projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-[44px] rounded-lg px-8 text-lg text-white border-white/20 hover:bg-white/10"
              onClick={openModal}
            >
              Ver tecnologias utilizadas
            </Button>
          </div>
        </div>

        <SpinSellingSection
          color={THEME_COLOR}
          situation="Sua empresa tenta usar um software de mercado, mas ele atende apenas 60% do que você precisa. O resto é feito por fora."
          problem="Os sistemas de prateleira engessam seus diferenciais competitivos e forçam sua equipe a fazer gambiarras (workarounds) diariamente."
          implication="Seu custo operacional é elevado porque sua operação é refém de fluxos genéricos, além de depender de várias assinaturas caras mensais."
          needPayoff="Com um sistema próprio moldado 100% para o seu negócio, você assume o controle da sua eficiência, corta custos com licenças terceiras e ganha um ativo real."
        />

        <PageFaqSection color={THEME_COLOR} faqs={faqs} />
      </div>
    </PageState>
  )
}
