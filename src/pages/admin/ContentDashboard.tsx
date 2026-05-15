import { useEffect, useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from '@/hooks/use-toast'
import { getSiteContent, updateSiteContent, type SiteContent } from '@/services/site_settings'
import { Loader2, Save, Type } from 'lucide-react'

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

  const groupedContent = useMemo(() => {
    const groups: Record<string, SiteContent[]> = {}
    contentItems.forEach((item) => {
      const prefix = item.key.split('_')[0]
      const category = prefix.charAt(0).toUpperCase() + prefix.slice(1)
      if (!groups[category]) groups[category] = []
      groups[category].push(item)
    })
    return groups
  }, [contentItems])

  const categories = Object.keys(groupedContent)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <Type className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Conteúdo do Site</h1>
            <p className="text-slate-500 mt-1">
              Gerencie os textos e a comunicação visual da sua plataforma de forma centralizada.
            </p>
          </div>
        </div>
      </div>

      {contentItems.length === 0 ? (
        <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-sm">
          <p className="text-slate-500 text-lg">Nenhum conteúdo disponível para edição.</p>
        </div>
      ) : (
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="mb-8 flex flex-wrap h-auto bg-white/60 backdrop-blur-sm border border-slate-200/60 p-2 rounded-2xl gap-2 shadow-sm">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-2.5 rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all shadow-none"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="space-y-6">
              <div className="grid gap-6">
                {groupedContent[cat].map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden"
                  >
                    <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-100/50">
                      <CardTitle className="text-lg text-slate-800">{item.label}</CardTitle>
                      <CardDescription className="font-mono text-xs text-slate-400 mt-1">
                        Chave: {item.key}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-5">
                      <div className="space-y-3">
                        <Label htmlFor={item.id} className="text-slate-600 font-medium">
                          Conteúdo (Texto ou HTML)
                        </Label>
                        <Textarea
                          id={item.id}
                          value={item.value}
                          onChange={(e) => handleChange(item.id, e.target.value)}
                          rows={5}
                          className="font-mono text-sm bg-slate-50/50 focus:bg-white transition-colors border-slate-200/80 resize-y rounded-xl leading-relaxed p-4"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button
                          onClick={() => handleUpdate(item.id, item.value)}
                          disabled={savingId === item.id}
                          className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-6 transition-all"
                        >
                          {savingId === item.id ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4 mr-2" />
                          )}
                          Salvar Alterações
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
