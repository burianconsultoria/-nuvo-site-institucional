import { useState, useEffect } from 'react'
import { getScoringConfig, updateScoringConfig } from '@/services/api'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function ScoringConfig() {
  const [config, setConfig] = useState<any>(null)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    getScoringConfig().then(setConfig).catch(console.error)
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      await updateScoringConfig(config.id, { fields: config.fields })
      toast({ title: 'Configurações salvas com sucesso' })
    } catch (e) {
      toast({ title: 'Erro ao salvar', variant: 'destructive' })
    } finally {
      setSaving(false)
    }
  }

  if (!config)
    return <div className="container py-12 text-center text-muted-foreground">Carregando...</div>

  const totalWeight = config.fields.reduce((acc: number, f: any) => acc + Number(f.peso), 0)

  return (
    <div className="container py-12 px-4 max-w-3xl animate-fade-in-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Configuração de Scoring</h1>
        <p className="text-muted-foreground">
          Defina o peso de cada critério analisado no Quiz de Qualificação.
        </p>
      </div>

      <Card className="shadow-sm border-muted">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Critérios de Avaliação</CardTitle>
              <CardDescription>Ajuste os valores (Ideal que a soma total seja 100)</CardDescription>
            </div>
            <div
              className={`px-4 py-2 rounded-lg font-bold text-sm ${totalWeight === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}
            >
              Soma Total: {totalWeight}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {config.fields.map((f: any, i: number) => (
            <div
              key={i}
              className="flex gap-6 items-end p-4 border rounded-xl bg-card hover:shadow-subtle transition-all"
            >
              <div className="flex-1 space-y-2">
                <label className="text-sm font-semibold text-muted-foreground">Variável</label>
                <Input value={f.field_name} disabled className="bg-muted/50 font-medium" />
              </div>
              <div className="w-24 space-y-2">
                <label className="text-sm font-semibold text-muted-foreground">Estrelas</label>
                <Input type="number" value={f.max_stars} disabled className="bg-muted/50" />
              </div>
              <div className="w-32 space-y-2">
                <label className="text-sm font-semibold text-primary">Peso</label>
                <Input
                  type="number"
                  value={f.peso}
                  onChange={(e) => {
                    const newFields = [...config.fields]
                    newFields[i].peso = Number(e.target.value)
                    setConfig({ ...config, fields: newFields })
                  }}
                  className="border-primary/50 focus-visible:ring-primary"
                />
              </div>
            </div>
          ))}
          <Button onClick={handleSave} className="w-full h-12 text-lg" disabled={saving}>
            {saving ? 'Salvando...' : 'Atualizar Configurações'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
