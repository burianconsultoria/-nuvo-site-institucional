import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getScoringConfig, createLead, createQuizResponse, ScoringConfig } from '@/services/api'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Skeleton } from '@/components/ui/skeleton'
import { Star, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react'

export default function QuickDiagnosis() {
  const [step, setStep] = useState(1)
  const [config, setConfig] = useState<ScoringConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const navigate = useNavigate()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    segmento: '',
  })

  const [ratings, setRatings] = useState<Record<string, number>>({})

  const fetchConfig = () => {
    setLoading(true)
    setError(false)
    getScoringConfig()
      .then((res) => {
        if (!res || !res.fields || res.fields.length === 0) {
          setError(true)
        } else {
          setConfig(res)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchConfig()
  }, [])

  const isFormValid = () => {
    if (
      !formData.nome ||
      !formData.email ||
      !formData.empresa ||
      !formData.telefone ||
      !formData.segmento
    )
      return false
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return false
    return true
  }

  const handleNext = () => {
    if (!isFormValid()) {
      toast({
        title: 'Aviso',
        description:
          'Preencha todos os campos corretamente. O email válido e todos os campos são obrigatórios.',
        variant: 'destructive',
      })
      return
    }
    setStep(2)
  }

  const allAnswered = () => {
    if (!config) return false
    return config.fields.slice(0, 5).every((f) => ratings[f.field_name])
  }

  const calculateCurrentScore = () => {
    if (!config) return 0
    let totalScore = 0
    let totalWeight = 0
    config.fields.slice(0, 5).forEach((field) => {
      const rating = ratings[field.field_name] || 0
      const normalized = (rating / field.max_stars) * field.peso
      totalScore += normalized
      totalWeight += field.peso
    })
    return totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) : 0
  }

  const handleSubmit = async () => {
    if (!allAnswered()) {
      toast({
        title: 'Aviso',
        description: 'Por favor, responda todas as perguntas.',
        variant: 'destructive',
      })
      return
    }

    setSubmitting(true)
    try {
      const score = calculateCurrentScore()
      const lead = await createLead({
        ...formData,
        score,
        score_data: ratings,
      })

      await createQuizResponse({
        lead_id: lead.id,
        respostas: ratings,
      })

      toast({
        title: 'Diagnóstico gerado!',
        description: 'Sua análise foi concluída com sucesso.',
      })

      navigate(`/diagnostico/${lead.id}`)
    } catch (err: any) {
      toast({
        title: 'Erro',
        description: 'Não foi possível gerar o diagnóstico. Tente novamente.',
        variant: 'destructive',
      })
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="container max-w-3xl mx-auto py-12 px-4 space-y-6">
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-12" />
        <Card>
          <CardContent className="p-8 space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-12 w-full mt-4" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !config) {
    return (
      <div className="container max-w-3xl mx-auto py-24 px-4 text-center">
        <Card className="p-12 border-dashed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Configuração Indisponível</h2>
          <p className="text-slate-500 mb-8">
            Não foi possível carregar as perguntas do diagnóstico no momento.
          </p>
          <Button onClick={fetchConfig} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Tentar novamente
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Diagnóstico Rápido de Maturidade Operacional
          </h1>
          <p className="text-slate-600 text-lg">
            Descubra o nível de eficiência da sua empresa e receba recomendações personalizadas.
          </p>
          <div className="flex gap-2 mt-8 max-w-md mx-auto">
            <div
              className={`h-2 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'}`}
            />
            <div
              className={`h-2 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`}
            />
          </div>
        </div>

        <Card className="shadow-xl border-slate-200/60 overflow-hidden bg-white">
          {step === 1 && (
            <div className="p-8 animate-fade-in">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-800">Seus Dados</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Precisamos de algumas informações para gerar seu relatório.
                </p>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="joao@empresa.com.br"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Nome da Empresa *</Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ex: Nuvo Solutions"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="segmento">Segmento de Atuação *</Label>
                  <Input
                    id="segmento"
                    value={formData.segmento}
                    onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                    placeholder="Ex: Tecnologia, Varejo, Serviços"
                  />
                </div>
                <Button
                  onClick={handleNext}
                  className="w-full h-14 mt-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700"
                >
                  Começar Diagnóstico <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8 animate-fade-in bg-white">
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Avalie sua operação</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    De 1 a 5 estrelas, como você avalia os seguintes pontos?
                  </p>
                </div>
                <div className="text-right hidden sm:block bg-indigo-50 px-4 py-2 rounded-lg">
                  <div className="text-xs text-indigo-600 font-bold uppercase tracking-wider">
                    Score Estimado
                  </div>
                  <div className="text-3xl font-black text-indigo-700">
                    {calculateCurrentScore()}
                  </div>
                </div>
              </div>

              <div className="space-y-8 divide-y divide-slate-100">
                {config.fields.slice(0, 5).map((field, idx) => (
                  <div key={field.field_name} className="pt-6 first:pt-0">
                    <Label className="text-base font-semibold block mb-3 text-slate-800">
                      {idx + 1}. {field.field_name}
                    </Label>
                    <div className="flex gap-2 sm:gap-4">
                      {Array.from({ length: field.max_stars || 5 }).map((_, i) => {
                        const val = i + 1
                        const isSelected = (ratings[field.field_name] || 0) >= val
                        return (
                          <button
                            key={val}
                            onClick={() => setRatings({ ...ratings, [field.field_name]: val })}
                            className="group focus:outline-none transition-transform active:scale-95"
                          >
                            <Star
                              className={`w-10 h-10 transition-all duration-300 ${
                                isSelected
                                  ? 'fill-amber-400 text-amber-400 drop-shadow-sm'
                                  : 'text-slate-200 group-hover:text-amber-200'
                              }`}
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4 pt-6 border-t border-slate-100">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="w-1/3 h-14 text-base font-semibold"
                >
                  Voltar
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={submitting || !allAnswered()}
                  className="w-2/3 h-14 text-base font-semibold bg-indigo-600 hover:bg-indigo-700"
                >
                  {submitting ? 'Processando...' : 'Ver Resultados'}
                  {!submitting && <CheckCircle2 className="ml-2 w-5 h-5" />}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
