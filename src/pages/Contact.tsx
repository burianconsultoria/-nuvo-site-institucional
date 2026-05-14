import { useState } from 'react'
import { createContact } from '@/services/api'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    segmento: '',
    mensagem: '',
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createContact(formData)
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Nossa equipe entrará em contato em breve.',
      })
      setFormData({ nome: '', email: '', empresa: '', telefone: '', segmento: '', mensagem: '' })
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Por favor, tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-2xl py-20 px-4 animate-fade-in-up">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Fale Conosco</h1>
        <p className="text-lg text-muted-foreground">
          Preencha o formulário abaixo para conversarmos sobre a sua operação comercial.
        </p>
      </div>

      <Card className="border-muted shadow-lg">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome Completo *</label>
                <Input
                  required
                  placeholder="João Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Corporativo *</label>
                <Input
                  required
                  type="email"
                  placeholder="joao@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Empresa</label>
                <Input
                  placeholder="Sua Empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Telefone / WhatsApp</label>
                <Input
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Como podemos ajudar? *</label>
              <Textarea
                required
                placeholder="Descreva os desafios do seu negócio..."
                className="min-h-[120px]"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full h-12 text-lg rounded-xl" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
