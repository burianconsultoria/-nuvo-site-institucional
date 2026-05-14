import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import pb from '@/lib/pocketbase/client'
import { toast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [fields, setFields] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isOpen && fields.length === 0) {
      setLoading(true)
      pb.collection('form_settings')
        .getFullList({ sort: 'order' })
        .then((res) => setFields(res))
        .catch(() => toast({ title: 'Erro ao carregar formulário', variant: 'destructive' }))
        .finally(() => setLoading(false))
    }
  }, [isOpen, fields.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      for (const field of fields) {
        if (field.required && !formData[field.name]) {
          toast({ title: `O campo ${field.label} é obrigatório`, variant: 'destructive' })
          setSubmitting(false)
          return
        }
      }

      const leadData: any = { score_data: {} }
      const standardFields = ['nome', 'email', 'empresa', 'telefone', 'segmento']

      for (const [key, value] of Object.entries(formData)) {
        if (standardFields.includes(key)) {
          leadData[key] = value
        } else {
          leadData.score_data[key] = value
        }
      }

      // Default logic mappings based on existing schema rules if exact mapping names are slightly off
      if (!leadData.nome && formData['name']) leadData.nome = formData['name']
      if (!leadData.email && formData['e-mail']) leadData.email = formData['e-mail']

      await pb.collection('leads').create(leadData)
      toast({
        title: 'Sucesso!',
        description: 'Seus dados foram enviados. Entraremos em contato em breve.',
      })
      onClose()
      setFormData({})
    } catch (err) {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border border-slate-200">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Quero um diagnóstico gratuito</DialogTitle>
          <DialogDescription>
            Preencha seus dados abaixo e nossa equipe entrará em contato.
          </DialogDescription>
        </DialogHeader>
        {loading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.name} className="text-sm font-semibold">
                  {field.label} {field.required && '*'}
                </Label>
                {field.type === 'select' ? (
                  <Select
                    value={formData[field.name] || ''}
                    onValueChange={(val) => setFormData({ ...formData, [field.name]: val })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={`Selecione ${field.label.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {(field.options || []).map((opt: string) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : field.type === 'textarea' ? (
                  <Textarea
                    id={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    placeholder={field.label}
                    required={field.required}
                    className="min-h-[100px]"
                  />
                ) : (
                  <Input
                    id={field.name}
                    type={field.type === 'tel' ? 'tel' : field.type === 'email' ? 'email' : 'text'}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    placeholder={field.label}
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <Button
              type="submit"
              className="w-full mt-6 bg-primary hover:bg-primary/90 text-white h-11"
              disabled={submitting}
            >
              {submitting ? 'Enviando...' : 'Enviar Dados'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
