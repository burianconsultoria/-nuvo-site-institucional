import { useState } from 'react'
import { createLead, createRoiResponse } from '@/services/api'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'
import { TrendingUp } from 'lucide-react'

export default function ROIPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<number | null>(null)

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    faturamento: '',
    conversao: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nome || !formData.email || !formData.faturamento) {
      toast({
        title: 'Aviso',
        description: 'Preencha os campos obrigatórios.',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    try {
      const fat = parseFloat(formData.faturamento) || 0
      const projecao = fat * 1.35 // 35% default increase

      // Basic arbitrary scoring for ROI leads
      const score = fat > 100000 ? 85 : 55
      const score_class = score >= 80 ? 'A' : 'C'

      const lead = await createLead({
        nome: formData.nome,
        email: formData.email,
        empresa: formData.empresa,
        score,
        score_class,
        score_data: { faturamento_informado: fat },
      })

      await createRoiResponse({
        lead_id: lead.id,
        dados: formData,
      })

      setResult(projecao)
    } catch (err) {
      toast({ title: 'Erro', description: 'Ocorreu um erro.', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Calculadora de ROI</h1>
        <p className="text-slate-500 mt-2">
          Descubra quanto você está deixando na mesa sem automação de qualificação.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle>Dados Atuais</CardTitle>
            <CardDescription>Insira as métricas para simulação</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faturamento">Faturamento Mensal Estimado (R$) *</Label>
                <Input
                  id="faturamento"
                  type="number"
                  placeholder="50000"
                  value={formData.faturamento}
                  onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                {loading ? 'Calculando...' : 'Calcular Impacto'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          {result !== null ? (
            <Card className="h-full bg-indigo-600 text-white border-none shadow-xl animate-fade-in flex flex-col justify-center text-center p-8">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
              <h3 className="text-2xl font-bold mb-2">Projeção Nuvo</h3>
              <p className="text-indigo-100 mb-8">
                Com base nos nossos dados, implementando nossa qualificação automática você pode
                atingir:
              </p>
              <div className="text-5xl font-extrabold mb-4">
                R$ {result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-sm font-medium text-indigo-200 bg-indigo-700/50 py-2 px-4 rounded-full mx-auto">
                +35% de aumento potencial
              </p>
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-slate-400 text-center">
              <p>Preencha os dados ao lado para visualizar a projeção de impacto na sua receita.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
