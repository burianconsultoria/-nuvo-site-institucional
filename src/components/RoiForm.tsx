import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createLead, createRoiResponse } from '@/services/api'
import { useToast } from '@/hooks/use-toast'
import { Progress } from '@/components/ui/progress'

export function RoiForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<any>({})
  const [leadId, setLeadId] = useState<string | null>(null)
  const [roi, setRoi] = useState<number | null>(null)
  const { toast } = useToast()

  const handleNext = async () => {
    if (step === 1) {
      if (!formData.email) return toast({ title: 'Email é obrigatório', variant: 'destructive' })
      try {
        const lead = await createLead({ email: formData.email, empresa: formData.empresa })
        setLeadId(lead.id)
        setStep(2)
      } catch (e) {
        toast({ title: 'Erro ao prosseguir', variant: 'destructive' })
      }
    } else if (step === 2) {
      const leads = Number(formData.leads) || 0
      const convAt = Number(formData.conversao_atual) || 0
      const convMe = Number(formData.conversao_meta) || 0
      const ticket = Number(formData.ticket) || 0

      const atual = leads * (convAt / 100) * ticket
      const meta = leads * (convMe / 100) * ticket
      const ganhoExtra = meta - atual

      setRoi(ganhoExtra > 0 ? ganhoExtra : 0)
      try {
        await createRoiResponse({ lead_id: leadId!, dados: formData })
        setStep(3)
      } catch (e) {
        toast({ title: 'Erro ao salvar os dados', variant: 'destructive' })
      }
    }
  }

  if (step === 3 && roi !== null) {
    return (
      <Card className="text-center py-12 border-indigo-100 bg-indigo-50/30 animate-fade-in-up">
        <CardTitle className="text-3xl font-bold mb-4 text-indigo-800">
          Potencial de Crescimento
        </CardTitle>
        <p className="text-5xl font-extrabold text-indigo-600 mb-6">
          + R$ {roi.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-muted-foreground text-lg mb-6">
          Aumento mensal estimado em sua receita aplicando automação.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Fazer novo Cálculo
        </Button>
      </Card>
    )
  }

  return (
    <Card className="shadow-lg border-muted/60">
      <CardHeader>
        <CardTitle>Calculadora de ROI</CardTitle>
        <CardDescription>
          Simule o impacto financeiro da Nuvo no seu negócio (Passo {step} de 2)
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
          </div>
        )}
        {step === 2 && (
          <div className="grid gap-4 animate-fade-in">
            <div className="space-y-1">
              <label className="text-sm font-medium">Leads Gerados por Mês</label>
              <Input
                type="number"
                placeholder="Ex: 500"
                onChange={(e) => setFormData({ ...formData, leads: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Conversão Atual (%)</label>
              <Input
                type="number"
                placeholder="Ex: 2"
                onChange={(e) => setFormData({ ...formData, conversao_atual: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Conversão Esperada (%)</label>
              <Input
                type="number"
                placeholder="Ex: 5"
                onChange={(e) => setFormData({ ...formData, conversao_meta: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Ticket Médio (R$)</label>
              <Input
                type="number"
                placeholder="Ex: 1500"
                onChange={(e) => setFormData({ ...formData, ticket: e.target.value })}
              />
            </div>
          </div>
        )}
        <Button
          onClick={handleNext}
          className="w-full text-lg h-12 mt-4 rounded-xl bg-indigo-600 hover:bg-indigo-700"
        >
          {step === 1 ? 'Avançar' : 'Calcular meu ROI'}
        </Button>
      </CardContent>
    </Card>
  )
}
