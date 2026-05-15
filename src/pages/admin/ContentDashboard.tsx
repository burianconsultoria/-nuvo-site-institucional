import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  getSiteContent,
  updateSiteContent,
  getFileUrl,
  type SiteContent,
} from '@/services/site_settings'
import { toast } from '@/hooks/use-toast'
import { Loader2, FileText, Upload, ImageIcon } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

export default function ContentDashboard() {
  const [contentItems, setContentItems] = useState<SiteContent[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)

  // Local state for edits
  const [edits, setEdits] = useState<
    Record<string, { value: string; mediaFile: File | null; mediaPreview: string }>
  >({})

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    setLoading(true)
    const items = await getSiteContent()
    setContentItems(items)

    const initialEdits: typeof edits = {}
    items.forEach((item) => {
      initialEdits[item.id] = {
        value: item.value || '',
        mediaFile: null,
        mediaPreview: item.media ? getFileUrl(item, item.media) : '',
      }
    })
    setEdits(initialEdits)
    setLoading(false)
  }

  const handleValueChange = (id: string, val: string) => {
    setEdits((prev) => ({ ...prev, [id]: { ...prev[id], value: val } }))
  }

  const handleMediaChange = (id: string, file: File) => {
    setEdits((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        mediaFile: file,
        mediaPreview: URL.createObjectURL(file),
      },
    }))
  }

  const handleSave = async (item: SiteContent) => {
    setSavingId(item.id)
    try {
      const editData = edits[item.id]
      const formData = new FormData()
      formData.append('value', editData.value)
      if (editData.mediaFile) {
        formData.append('media', editData.mediaFile)
      }

      await updateSiteContent(item.id, formData)
      toast({ title: 'Sucesso', description: `Conteúdo "${item.label}" salvo com sucesso.` })
    } catch (e) {
      toast({ title: 'Erro', description: 'Não foi possível salvar.', variant: 'destructive' })
    } finally {
      setSavingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    )
  }

  const grouped = contentItems.reduce(
    (acc, item) => {
      const page = item.page || 'geral'
      if (!acc[page]) acc[page] = []
      acc[page].push(item)
      return acc
    },
    {} as Record<string, SiteContent[]>,
  )

  const pages = Object.keys(grouped).sort()

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Conteúdo do Site</h1>
            <p className="text-slate-500 mt-1">
              Gerencie textos, imagens e mídias das páginas institucionais.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue={pages[0] || 'geral'} className="w-full">
        <TabsList className="bg-white/60 p-1 rounded-xl mb-6 flex flex-wrap h-auto gap-2">
          {pages.map((page) => (
            <TabsTrigger
              key={page}
              value={page}
              className="capitalize data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-lg px-6 py-2"
            >
              {page}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map((page) => (
          <TabsContent key={page} value={page} className="space-y-6">
            {grouped[page].map((item) => (
              <Card
                key={item.id}
                className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-100">
                  <CardTitle className="text-lg text-slate-800">{item.label}</CardTitle>
                  <CardDescription className="font-mono text-xs text-slate-400">
                    Chave: {item.key}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-3">
                    <Label>Texto (HTML permitido)</Label>
                    <Textarea
                      value={edits[item.id]?.value}
                      onChange={(e) => handleValueChange(item.id, e.target.value)}
                      className="min-h-[150px] font-mono text-sm bg-white"
                    />
                  </div>

                  {item.key.includes('bg') ||
                  item.key.includes('image') ||
                  item.key.includes('logo') ||
                  item.key.includes('media') ? (
                    <div className="space-y-3">
                      <Label>Mídia ({item.media_type || 'image'})</Label>
                      <div className="border-2 border-dashed border-slate-200/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-slate-50/50">
                        {edits[item.id]?.mediaPreview ? (
                          <div className="mb-4">
                            <img
                              src={edits[item.id].mediaPreview}
                              alt="Preview"
                              className="max-h-32 object-contain rounded-md shadow-sm"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                            <ImageIcon className="w-8 h-8 text-slate-400" />
                          </div>
                        )}
                        <div className="relative">
                          <Button
                            variant="outline"
                            className="bg-white"
                            onClick={() => document.getElementById(`file-${item.id}`)?.click()}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            {edits[item.id]?.mediaPreview ? 'Trocar Arquivo' : 'Enviar Arquivo'}
                          </Button>
                          <input
                            id={`file-${item.id}`}
                            type="file"
                            className="hidden"
                            accept="image/*,video/*"
                            onChange={(e) =>
                              e.target.files?.[0] && handleMediaChange(item.id, e.target.files[0])
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex justify-end pt-2">
                    <Button
                      onClick={() => handleSave(item)}
                      disabled={savingId === item.id}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      {savingId === item.id && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      Salvar {item.label}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
