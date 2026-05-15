import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { getSiteContent, updateSiteContent, type SiteContent } from '@/services/site_settings'
import { Loader2, Save } from 'lucide-react'

export default function ContentDashboard() {
  const [contentItems, setContentItems] = useState<SiteContent[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)

  const fetchContent = async () => {
    try {
      const res = await getSiteContent()
      setContentItems(res)
    } catch (err) {
      toast({ title: 'Erro', description: 'Erro ao carregar conteúdo.', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContent()
  }, [])

  const handleUpdate = async (id: string, value: string) => {
    setSavingId(id)
    try {
      await updateSiteContent(id, value)
      toast({ title: 'Sucesso', description: 'Conteúdo salvo com sucesso!' })
    } catch (err) {
      toast({ title: 'Erro', description: 'Erro ao salvar conteúdo.', variant: 'destructive' })
    } finally {
      setSavingId(null)
    }
  }

  const handleChange = (id: string, newValue: string) => {
    setContentItems((items) =>
      items.map((item) => (item.id === id ? { ...item, value: newValue } : item)),
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Conteúdo do Site</h1>
        <p className="text-slate-500">
          Gerencie os textos principais exibidos no site, como títulos e descrições (permite
          formatação HTML).
        </p>
      </div>

      <div className="grid gap-6">
        {contentItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500">Nenhum conteúdo disponível para edição.</p>
          </div>
        ) : (
          contentItems.map((item) => (
            <Card key={item.id} className="shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{item.label}</CardTitle>
                <CardDescription className="font-mono text-xs">Chave: {item.key}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={item.id}>Valor (Texto ou HTML)</Label>
                  <Textarea
                    id={item.id}
                    value={item.value}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    rows={4}
                    className="font-mono text-sm bg-slate-50 focus:bg-white transition-colors"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    size="sm"
                    onClick={() => handleUpdate(item.id, item.value)}
                    disabled={savingId === item.id}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    {savingId === item.id ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Salvar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
