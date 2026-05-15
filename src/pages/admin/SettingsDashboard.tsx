import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from '@/hooks/use-toast'
import {
  getSiteSettings,
  updateSiteSettings,
  getFileUrl,
  type SiteSettings,
} from '@/services/site_settings'
import { extractFieldErrors } from '@/lib/pocketbase/errors'
import { Loader2, Upload, ImageIcon, Video, Palette } from 'lucide-react'

export default function SettingsDashboard() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const logoInputRef = useRef<HTMLInputElement>(null)
  const footerLogoInputRef = useRef<HTMLInputElement>(null)
  const faviconInputRef = useRef<HTMLInputElement>(null)
  const heroBgInputRef = useRef<HTMLInputElement>(null)

  const [logoPreview, setLogoPreview] = useState<string>('')
  const [footerLogoPreview, setFooterLogoPreview] = useState<string>('')
  const [faviconPreview, setFaviconPreview] = useState<string>('')
  const [heroBgPreview, setHeroBgPreview] = useState<string>('')

  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [footerLogoFile, setFooterLogoFile] = useState<File | null>(null)
  const [faviconFile, setFaviconFile] = useState<File | null>(null)
  const [heroBgFile, setHeroBgFile] = useState<File | null>(null)

  const [heroBgType, setHeroBgType] = useState<'image' | 'video'>('image')

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const data = await getSiteSettings()
      setSettings(data)
      if (data) {
        if (data.logo) setLogoPreview(getFileUrl(data, data.logo))
        if (data.footer_logo) setFooterLogoPreview(getFileUrl(data, data.footer_logo))
        if (data.favicon) setFaviconPreview(getFileUrl(data, data.favicon))
        if (data.hero_background) setHeroBgPreview(getFileUrl(data, data.hero_background))
        if (data.hero_background_type) setHeroBgType(data.hero_background_type as 'image' | 'video')
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

  const handleFooterLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFooterLogoFile(file)
      setFooterLogoPreview(URL.createObjectURL(file))
    }
  }

  const handleFaviconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFaviconFile(file)
      setFaviconPreview(URL.createObjectURL(file))
    }
  }

  const handleHeroBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setHeroBgFile(file)
      setHeroBgPreview(URL.createObjectURL(file))
    }
  }

  const handleSave = async () => {
    if (!settings?.id) return
    setIsSaving(true)
    setErrors({})

    try {
      const formData = new FormData()
      if (logoFile) formData.append('logo', logoFile)
      if (footerLogoFile) formData.append('footer_logo', footerLogoFile)
      if (faviconFile) formData.append('favicon', faviconFile)
      if (heroBgFile) formData.append('hero_background', heroBgFile)

      formData.append('hero_background_type', heroBgType)

      await updateSiteSettings(settings.id, formData)
      toast({ title: 'Sucesso', description: 'Configurações salvas com sucesso!' })
      setLogoFile(null)
      setFooterLogoFile(null)
      setFaviconFile(null)
      setHeroBgFile(null)
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
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    )

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Identidade & Mídia</h1>
            <p className="text-slate-500 mt-1">
              Gerencie o logotipo, favicon e as mídias globais do site, como o fundo da seção
              principal.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden">
          <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-100">
            <CardTitle className="text-lg text-slate-800">Logotipo e Favicon</CardTitle>
            <CardDescription>Personalize a marca do seu site.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-4">
              <Label>Logotipo do Site</Label>
              <div className="border-2 border-dashed border-slate-200/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50/30 transition-colors bg-white/50 group">
                {logoPreview ? (
                  <div className="mb-4 relative group">
                    <img src={logoPreview} alt="Logo" className="h-16 object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <ImageIcon className="w-8 h-8 text-slate-400" />
                  </div>
                )}
                <div className="space-y-2 mt-2">
                  <Button
                    variant="outline"
                    className="rounded-xl bg-white hover:bg-slate-50"
                    onClick={() => logoInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors" />
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
              <Label>Logotipo do Rodapé</Label>
              <div className="border-2 border-dashed border-slate-200/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50/30 transition-colors bg-white/50 group">
                {footerLogoPreview ? (
                  <div className="mb-4 relative group">
                    <img
                      src={footerLogoPreview}
                      alt="Footer Logo"
                      className="h-16 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <ImageIcon className="w-8 h-8 text-slate-400" />
                  </div>
                )}
                <div className="space-y-2 mt-2">
                  <Button
                    variant="outline"
                    className="rounded-xl bg-white hover:bg-slate-50"
                    onClick={() => footerLogoInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                    {footerLogoPreview ? 'Trocar Logo Rodapé' : 'Enviar Logo Rodapé'}
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">PNG, JPG, SVG até 5MB</p>
                </div>
                <input
                  ref={footerLogoInputRef}
                  type="file"
                  className="hidden"
                  accept="image/png,image/jpeg,image/svg+xml"
                  onChange={handleFooterLogoChange}
                />
              </div>
              {errors.footer_logo && (
                <p className="text-sm text-red-500 font-medium">{errors.footer_logo}</p>
              )}
            </div>

            <div className="space-y-4">
              <Label>Favicon</Label>
              <div className="border-2 border-dashed border-slate-200/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50/30 transition-colors bg-white/50 group">
                {faviconPreview ? (
                  <div className="mb-4 relative group">
                    <img src={faviconPreview} alt="Favicon" className="w-12 h-12 object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center mb-4">
                    <ImageIcon className="w-6 h-6 text-slate-400" />
                  </div>
                )}
                <div className="space-y-2 mt-2">
                  <Button
                    variant="outline"
                    className="rounded-xl bg-white hover:bg-slate-50"
                    onClick={() => faviconInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors" />
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
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden">
          <CardHeader className="pb-4 bg-slate-50/50 border-b border-slate-100">
            <CardTitle className="text-lg text-slate-800">Fundo do Hero</CardTitle>
            <CardDescription>
              Mídia exibida no fundo da primeira seção da página inicial.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-4">
              <Label>Tipo de Mídia</Label>
              <Select
                value={heroBgType}
                onValueChange={(val: 'image' | 'video') => setHeroBgType(val)}
              >
                <SelectTrigger className="w-full bg-white/50 border-slate-200/80 rounded-xl h-11">
                  <SelectValue placeholder="Selecione o tipo de mídia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Imagem</SelectItem>
                  <SelectItem value="video">Vídeo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Arquivo de Mídia</Label>
              <div className="border-2 border-dashed border-slate-200/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50/30 transition-colors bg-white/50 group">
                {heroBgPreview ? (
                  <div className="mb-4 relative w-full aspect-video rounded-md overflow-hidden bg-black/5 flex items-center justify-center">
                    {heroBgType === 'video' ? (
                      <video
                        src={heroBgPreview}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={heroBgPreview}
                        alt="Hero BG"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    {heroBgType === 'video' ? (
                      <Video className="w-8 h-8 text-slate-400" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                )}
                <div className="space-y-2 mt-4">
                  <Button
                    variant="outline"
                    className="rounded-xl bg-white hover:bg-slate-50"
                    onClick={() => heroBgInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                    {heroBgPreview ? 'Trocar Mídia' : 'Enviar Mídia'}
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">
                    {heroBgType === 'video'
                      ? 'MP4 ou WebM até 50MB. Proporção 16:9 recomendada.'
                      : 'JPG, PNG ou WebP até 50MB. Alta resolução recomendada.'}
                  </p>
                </div>
                <input
                  ref={heroBgInputRef}
                  type="file"
                  className="hidden"
                  accept={
                    heroBgType === 'video'
                      ? 'video/mp4,video/webm'
                      : 'image/jpeg,image/png,image/webp'
                  }
                  onChange={handleHeroBgChange}
                />
              </div>
              {errors.hero_background && (
                <p className="text-sm text-red-500 font-medium">{errors.hero_background}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end pt-2">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 shadow-sm rounded-xl px-8"
        >
          {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Salvar Configurações
        </Button>
      </div>
    </div>
  )
}
