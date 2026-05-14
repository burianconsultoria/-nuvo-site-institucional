import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'
import {
  getSiteSettings,
  updateSiteSettings,
  getFileUrl,
  type SiteSettings,
} from '@/services/site_settings'
import { extractFieldErrors } from '@/lib/pocketbase/errors'
import { Loader2, Upload, ImageIcon } from 'lucide-react'

export default function SettingsDashboard() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const logoInputRef = useRef<HTMLInputElement>(null)
  const faviconInputRef = useRef<HTMLInputElement>(null)

  const [logoPreview, setLogoPreview] = useState<string>('')
  const [faviconPreview, setFaviconPreview] = useState<string>('')

  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [faviconFile, setFaviconFile] = useState<File | null>(null)

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const data = await getSiteSettings()
      setSettings(data)
      if (data) {
        if (data.logo) setLogoPreview(getFileUrl(data, data.logo))
        if (data.favicon) setFaviconPreview(getFileUrl(data, data.favicon))
      }
    } catch (e) {
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar as configurações',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setLogoFile(file)
      setLogoPreview(URL.createObjectURL(file))
    }
  }

  const handleFaviconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFaviconFile(file)
      setFaviconPreview(URL.createObjectURL(file))
    }
  }

  const handleSave = async () => {
    if (!settings?.id) return
    setIsSaving(true)
    setErrors({})

    try {
      const formData = new FormData()
      if (logoFile) formData.append('logo', logoFile)
      if (faviconFile) formData.append('favicon', faviconFile)

      await updateSiteSettings(settings.id, formData)
      toast({ title: 'Sucesso', description: 'Configurações salvas com sucesso!' })
      setLogoFile(null)
      setFaviconFile(null)
      loadSettings()
    } catch (error) {
      const fieldErrors = extractFieldErrors(error)
      setErrors(fieldErrors)
      toast({
        title: 'Erro ao salvar',
        description: 'Verifique os campos e tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading)
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    )

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Identidade Visual</h1>

      <Card>
        <CardHeader>
          <CardTitle>Logotipo e Favicon</CardTitle>
          <CardDescription>
            Personalize a marca do seu site alterando o logotipo do cabeçalho e o ícone do
            navegador.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label>Logotipo do Site</Label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors">
                {logoPreview ? (
                  <div className="mb-4 relative group">
                    <img src={logoPreview} alt="Logo" className="h-16 object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <ImageIcon className="w-8 h-8 text-slate-400" />
                  </div>
                )}
                <div className="space-y-1">
                  <Button variant="outline" onClick={() => logoInputRef.current?.click()}>
                    <Upload className="w-4 h-4 mr-2" />
                    {logoPreview ? 'Trocar Logo' : 'Enviar Logo'}
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">PNG, JPG, SVG até 5MB</p>
                </div>
                <input
                  ref={logoInputRef}
                  type="file"
                  className="hidden"
                  accept="image/png,image/jpeg,image/svg+xml"
                  onChange={handleLogoChange}
                />
              </div>
              {errors.logo && <p className="text-sm text-red-500 font-medium">{errors.logo}</p>}
            </div>

            <div className="space-y-4">
              <Label>Favicon</Label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors">
                {faviconPreview ? (
                  <div className="mb-4 relative group">
                    <img src={faviconPreview} alt="Favicon" className="w-12 h-12 object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center mb-4">
                    <ImageIcon className="w-6 h-6 text-slate-400" />
                  </div>
                )}
                <div className="space-y-1">
                  <Button variant="outline" onClick={() => faviconInputRef.current?.click()}>
                    <Upload className="w-4 h-4 mr-2" />
                    {faviconPreview ? 'Trocar Favicon' : 'Enviar Favicon'}
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">ICO, PNG, SVG até 5MB</p>
                </div>
                <input
                  ref={faviconInputRef}
                  type="file"
                  className="hidden"
                  accept="image/x-icon,image/png,image/svg+xml"
                  onChange={handleFaviconChange}
                />
              </div>
              {errors.favicon && (
                <p className="text-sm text-red-500 font-medium">{errors.favicon}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <Button
              onClick={handleSave}
              disabled={isSaving || (!logoFile && !faviconFile)}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Salvar Alterações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
