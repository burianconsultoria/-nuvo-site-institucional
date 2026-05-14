import { useEffect, useState } from 'react'
import { createContact } from '@/services/api'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    segmento: '',
    mensagem: '',
  })

  useEffect(() => {
    document.title = 'Contato | Nuvo'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Entre em contato com a Nuvo para conversar sobre sua transformação.',
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Entre em contato com a Nuvo para conversar sobre sua transformação.'
      document.head.appendChild(meta)
    }
  }, [])

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!formData.nome || !formData.email || !formData.empresa) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha seu nome, email e empresa.',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)
    setError(null)

    try {
      await createContact(formData)
      toast({
        title: 'Sucesso',
        description: 'Mensagem enviada com sucesso',
      })
      setFormData({ nome: '', email: '', empresa: '', telefone: '', segmento: '', mensagem: '' })
    } catch (err) {
      setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-3xl mx-auto py-20 px-4 animate-fade-in-up">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          Entre em contato
        </h1>
        <p className="text-lg text-slate-600">
          Preencha o formulário abaixo e nossa equipe entrará em contato para entender seus
          desafios.
        </p>
      </div>

      <Card className="shadow-xl border-slate-200">
        <CardContent className="p-8 md:p-10">
          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle>Erro no envio</AlertTitle>
              <AlertDescription className="flex flex-col gap-4 mt-2">
                <p>{error}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSubmit()}
                  disabled={loading}
                  className="w-fit"
                >
                  {loading ? 'Enviando...' : 'Tentar novamente'}
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  required
                  placeholder="João Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Corporativo *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="joao@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="empresa">Nome da Empresa *</Label>
                <Input
                  id="empresa"
                  required
                  placeholder="Sua Empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                <Input
                  id="telefone"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="segmento">Segmento de Atuação</Label>
              <Select
                value={formData.segmento}
                onValueChange={(val) => setFormData({ ...formData, segmento: val })}
              >
                <SelectTrigger id="segmento">
                  <SelectValue placeholder="Selecione um segmento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="varejo">Varejo & E-commerce</SelectItem>
                  <SelectItem value="servicos">Serviços</SelectItem>
                  <SelectItem value="industria">Indústria</SelectItem>
                  <SelectItem value="saude">Saúde & Bem-estar</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                rows={5}
                placeholder="Conte-nos brevemente como podemos ajudar sua operação..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 text-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              {loading ? 'Enviando Mensagem...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
