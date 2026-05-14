import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { useSEO } from '@/hooks/use-seo'
import pb from '@/lib/pocketbase/client'
import RoiDashboard from '@/components/RoiDashboard'

const SEGMENTS = {
  Varejo: 15000,
  Serviços: 10000,
  Indústria: 25000,
  Tecnologia: 20000,
  Outros: 12000,
}

export default function RoiCalculatorPage() {
  useSEO({
    title: 'Calculadora de ROI | Nuvo Company',
    description:
      'Calcule quanto sua empresa pode economizar com automação e IA. Veja seu retorno sobre investimento de forma rápida e gratuita.',
  })

  const { toast } = useToast()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    employees: '',
    manualHours: '',
    hourlyCost: '',
    segment: '',
    email: '',
    name: '',
  })

  const [hasShownToast, setHasShownToast] = useState(false)
  const [loading, setLoading] = useState(false)

  const calculations = useMemo(() => {
    const emp = parseFloat(formData.employees)
    const hours = parseFloat(formData.manualHours)
    const cost = parseFloat(formData.hourlyCost)

    if (
      isNaN(emp) ||
      isNaN(hours) ||
      isNaN(cost) ||
      emp <= 0 ||
      hours <= 0 ||
      cost <= 0 ||
      !formData.segment
    ) {
      return null
    }

    const monthlySavings = emp * hours * cost * 4
    const annualSavings = monthlySavings * 12
    const investment = SEGMENTS[formData.segment as keyof typeof SEGMENTS] || 12000
    const roi = (annualSavings / investment) * 100
    const paybackMonths = investment / monthlySavings

    return {
      monthlySavings,
      annualSavings,
      roi,
      paybackMonths,
      investment,
      currentMonthlyCost: monthlySavings,
      projectedMonthlyCost: investment / 12,
    }
  }, [formData])

  useEffect(() => {
    if (calculations && !hasShownToast) {
      toast({
        title: 'Diagnóstico gerado!',
        description: 'Veja os resultados do seu potencial de economia ao lado.',
      })
      setHasShownToast(true)
    }
  }, [calculations, hasShownToast, toast])

  const handleSave = async () => {
    setLoading(true)
    try {
      const nome = formData.name || 'Visitante ROI'
      const email = formData.email || `anon_${Date.now()}@roi.nuvo.com.br`

      let leadId = ''
      try {
        const existingLeads = await pb
          .collection('leads')
          .getList(1, 1, { filter: `email = "${email}"` })
        if (existingLeads.items.length > 0) {
          leadId = existingLeads.items[0].id
        } else {
          const newLead = await pb
            .collection('leads')
            .create({ nome, email, segmento: formData.segment })
          leadId = newLead.id
        }
      } catch (err) {
        const newLead = await pb
          .collection('leads')
          .create({ nome, email, segmento: formData.segment })
        leadId = newLead.id
      }

      const roiRecord = await pb.collection('roi_responses').create({
        lead_id: leadId,
        dados: { ...formData, calculations },
      })

      toast({ title: 'Sucesso!', description: 'Relatório salvo com sucesso.' })
      navigate(`/calculadora-roi/${roiRecord.id}`)
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar os dados. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 print:p-0 print:m-0">
      <div className="text-center mb-10 print:hidden">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Calculadora de ROI</h1>
        <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto">
          Descubra o impacto financeiro de automatizar os processos manuais da sua empresa.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <Card className="lg:col-span-4 shadow-md print:hidden sticky top-8">
          <CardHeader>
            <CardTitle>Dados Operacionais</CardTitle>
            <CardDescription>Preencha para visualizar sua economia</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Número de Funcionários</Label>
              <Input
                type="number"
                min="1"
                placeholder="Ex: 10"
                value={formData.employees}
                onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Horas manuais por semana (por func.)</Label>
              <Input
                type="number"
                min="1"
                placeholder="Ex: 15"
                value={formData.manualHours}
                onChange={(e) => setFormData({ ...formData, manualHours: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Custo médio por hora (R$)</Label>
              <Input
                type="number"
                min="1"
                placeholder="Ex: 35"
                value={formData.hourlyCost}
                onChange={(e) => setFormData({ ...formData, hourlyCost: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Segmento</Label>
              <Select
                value={formData.segment}
                onValueChange={(v) => setFormData({ ...formData, segment: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o segmento" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(SEGMENTS).map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-4">
              <p className="text-sm text-muted-foreground">
                Opcional: Salvar link para acesso futuro
              </p>
              <div className="space-y-2">
                <Label>Nome</Label>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>E-mail corporativo</Label>
                <Input
                  type="email"
                  placeholder="email@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-8">
          {calculations ? (
            <div className="animate-fade-in-up">
              <RoiDashboard calculations={calculations} formData={formData} />

              <div className="mt-8 flex justify-end print:hidden">
                <Button
                  size="lg"
                  onClick={handleSave}
                  disabled={loading}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
                >
                  {loading ? 'Salvando...' : 'Salvar e Gerar Link Permanente'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-slate-400 text-center print:hidden">
              <p className="text-lg">
                Preencha todos os dados operacionais ao lado para visualizar a projeção de economia.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
