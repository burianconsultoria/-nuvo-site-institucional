import { useEffect, useState } from 'react'
import { getScoringConfig, updateScoringConfig, ScoringConfig, ScoringField } from '@/services/api'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'

export default function ConfigDashboard() {
  const [config, setConfig] = useState<ScoringConfig | null>(null)
  const [fields, setFields] = useState<ScoringField[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getScoringConfig().then((data) => {
      if (data) {
        setConfig(data)
        setFields(data.fields || [])
      }
    })
  }, [])

  const handleWeightChange = (index: number, val: string) => {
    const newFields = [...fields]
    newFields[index].peso = Number(val) || 0
    setFields(newFields)
  }

  const handleSave = async () => {
    if (!config) return
    const totalWeight = fields.reduce((acc, f) => acc + f.peso, 0)
    if (totalWeight !== 100) {
      toast({
        title: 'Aviso',
        description: `A soma dos pesos deve ser 100%. Atual: ${totalWeight}%`,
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    try {
      await updateScoringConfig(config.id, fields)
      toast({ title: 'Sucesso', description: 'Configuração atualizada com sucesso.' })
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Falha ao atualizar configuração.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  if (!config) return <div className="p-8 text-slate-500">Carregando configuração...</div>

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Configuração de Scoring
        </h1>
        <p className="text-slate-500">
          Ajuste os pesos das perguntas do Quiz para o cálculo da nota do Lead.
        </p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Variáveis do Algoritmo</CardTitle>
          <CardDescription>A soma de todos os pesos deve totalizar exatamente 100.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {fields.map((field, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-4 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="flex-1">
                  <Label className="text-base font-medium">{field.field_name}</Label>
                  <p className="text-sm text-slate-500">Escala de 1 a {field.max_stars} estrelas</p>
                </div>
                <div className="w-32">
                  <Label className="text-xs text-slate-500 mb-1 block">Peso (%)</Label>
                  <Input
                    type="number"
                    value={field.peso}
                    onChange={(e) => handleWeightChange(index, e.target.value)}
                    className="text-right font-mono"
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <div className="text-sm font-medium">
                Soma Total:{' '}
                <span
                  className={`font-bold ${fields.reduce((acc, f) => acc + f.peso, 0) === 100 ? 'text-emerald-600' : 'text-rose-600'}`}
                >
                  {fields.reduce((acc, f) => acc + f.peso, 0)}%
                </span>
              </div>
              <Button
                onClick={handleSave}
                disabled={loading}
                className="bg-slate-900 hover:bg-slate-800"
              >
                {loading ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
