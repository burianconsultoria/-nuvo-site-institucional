import { useState, useEffect } from 'react'
import { getScoringConfig, createLead, createQuizResponse, ScoringConfig } from '@/services/api'
import { calculateLeadScore } from '@/lib/score-logic'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'
import { ArrowRight, Check } from 'lucide-react'

export default function QuizPage() {
  const [step, setStep] = useState(1)
  const [config, setConfig] = useState<ScoringConfig | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ score: number; class: string } | null>(null)

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    segmento: '',
  })

  const [ratings, setRatings] = useState<Record<string, number>>({})

  useEffect(() => {
    getScoringConfig().then(setConfig)
  }, [])

  const handleNext = () => {
    if (!formData.nome || !formData.email) {
      toast({
        title: 'Aviso',
        description: 'Preencha os campos obrigatórios.',
        variant: 'destructive',
      })
      return
    }
    setStep(2)
  }

  const handleSubmit = async () => {
    if (!config) return
    setLoading(true)
    try {
      const { score, score_class } = calculateLeadScore(ratings, config)

      const leadData = {
        ...formData,
        score,
        score_class,
        score_data: ratings,
      }

      const lead = await createLead(leadData)
      await createQuizResponse({
        lead_id: lead.id,
        respostas: ratings,
      })

      setResult({ score, class: score_class })
      setStep(3)
    } catch (err: any) {
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar o quiz.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  if (step === 3 && result) {
    return (
      <div className="container max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <Card className="text-center py-12 border-none shadow-xl bg-gradient-to-b from-white to-slate-50">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Quiz Concluído!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Analisamos suas respostas e nossa equipe entrará em contato em breve.
          </p>
          <div className="inline-block p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
              Seu Perfil Nuvo
            </p>
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-4xl font-extrabold ${result.class === 'A' ? 'text-emerald-600' : result.class === 'B' ? 'text-blue-600' : result.class === 'C' ? 'text-amber-500' : 'text-rose-500'}`}
              >
                Classe {result.class}
              </span>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-3xl mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Qualificação B2B</h1>
        <p className="text-slate-500 mt-2">
          Descubra o potencial de automação da sua operação em 2 minutos.
        </p>
        <div className="flex gap-2 mt-6">
          <div
            className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'}`}
          />
          <div
            className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`}
          />
        </div>
      </div>

      <Card className="shadow-lg border-slate-200">
        <CardContent className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="João Silva"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@empresa.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="segmento">Segmento de Atuação</Label>
                <Input
                  id="segmento"
                  value={formData.segmento}
                  onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                  placeholder="Tecnologia, Indústria, etc."
                />
              </div>
              <Button
                onClick={handleNext}
                className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-700"
              >
                Avançar <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {step === 2 && config && (
            <div className="space-y-8 animate-fade-in">
              {config.fields.map((field) => (
                <div key={field.field_name} className="space-y-4">
                  <Label className="text-base font-semibold">{field.field_name}</Label>
                  <p className="text-sm text-slate-500 -mt-2">
                    Avalie de 1 a {field.max_stars} o nível atual da sua empresa neste aspecto.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {Array.from({ length: field.max_stars }).map((_, i) => {
                      const val = i + 1
                      const isSelected = ratings[field.field_name] === val
                      return (
                        <button
                          key={val}
                          onClick={() => setRatings({ ...ratings, [field.field_name]: val })}
                          className={`w-12 h-12 rounded-lg font-medium transition-all ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-md scale-105'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {val}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <Button variant="outline" onClick={() => setStep(1)} className="w-1/3 h-12">
                  Voltar
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-2/3 h-12 bg-indigo-600 hover:bg-indigo-700"
                >
                  {loading ? 'Calculando...' : 'Finalizar Análise'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
