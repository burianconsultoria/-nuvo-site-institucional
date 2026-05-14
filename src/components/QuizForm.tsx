import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getScoringConfig, createLead, updateLead, createQuizResponse } from '@/services/api'
import { calculateLeadScore } from '@/lib/score-utils'
import { useToast } from '@/hooks/use-toast'
import { Progress } from '@/components/ui/progress'

export function QuizForm() {
  const [step, setStep] = useState(1)
  const [config, setConfig] = useState<any>(null)
  const [formData, setFormData] = useState<any>({})
  const [leadId, setLeadId] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    getScoringConfig().then(setConfig).catch(console.error)
  }, [])

  const handleNext = async () => {
    if (step === 1) {
      if (!formData.email) return toast({ title: 'Email é obrigatório', variant: 'destructive' })
      try {
        const lead = await createLead({
          email: formData.email,
          empresa: formData.empresa,
          telefone: formData.telefone,
          segmento: formData.segmento,
        })
        setLeadId(lead.id)
        setStep(2)
      } catch (e) {
        toast({ title: 'Erro ao salvar contato', variant: 'destructive' })
      }
    } else if (step === 2) {
      const scoreResult = calculateLeadScore(config?.fields || [], formData)
      try {
        await updateLead(leadId!, {
          score: scoreResult.score,
          score_class: scoreResult.score_class,
          score_data: formData,
        })
        await createQuizResponse({ lead_id: leadId!, respostas: formData })
        setResult(scoreResult)
        setStep(3)
      } catch (e) {
        toast({ title: 'Erro ao analisar os dados', variant: 'destructive' })
      }
    }
  }

  if (step === 3 && result) {
    return (
      <Card className="text-center py-12 border-emerald-100 bg-emerald-50/30 animate-fade-in-up">
        <CardTitle className="text-4xl mb-4 text-emerald-800">
          Score: {result.score_class}
        </CardTitle>
        <p className="text-muted-foreground text-lg mb-6">
          Pontuação atingida: <span className="font-bold text-foreground">{result.score}%</span>
        </p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Fazer novo Quiz
        </Button>
      </Card>
    )
  }

  return (
    <Card className="shadow-lg border-muted/60">
      <CardHeader>
        <CardTitle>Quiz de Qualificação</CardTitle>
        <CardDescription>
          Avalie o cenário comercial da sua empresa (Passo {step} de 2)
        </CardDescription>
        <Progress value={step * 50} className="mt-4 h-2" />
      </CardHeader>
      <CardContent className="space-y-5">
        {step === 1 && (
          <div className="grid gap-4 animate-fade-in">
            <Input
              placeholder="Seu melhor Email corporativo"
              type="email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Nome da Empresa"
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            />
            <Input
              placeholder="Telefone / WhatsApp"
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            />
            <Input
              placeholder="Segmento de Atuação"
              onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
            />
          </div>
        )}
        {step === 2 && config && (
          <div className="grid gap-5 animate-fade-in">
            {config.fields.map((f: any) => (
              <div key={f.field_name} className="space-y-2">
                <label className="text-sm font-semibold">{f.field_name}</label>
                <Select
                  onValueChange={(v) => setFormData({ ...formData, [f.field_name]: Number(v) })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Como você avalia este critério hoje?" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(f.max_stars)].map((_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1} -{' '}
                        {i === 0 ? 'Muito Baixo' : i === f.max_stars - 1 ? 'Excelente' : 'Regular'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        )}
        <Button onClick={handleNext} className="w-full text-lg h-12 mt-4 rounded-xl">
          {step === 1 ? 'Avançar para Avaliação' : 'Descobrir meu Score'}
        </Button>
      </CardContent>
    </Card>
  )
}
