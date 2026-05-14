import { useEffect, useState } from 'react'
import pb from '@/lib/pocketbase/client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/hooks/use-toast'
import { Trash2, Plus, GripVertical, Loader2 } from 'lucide-react'

export default function FormSettingsDashboard() {
  const [fields, setFields] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchFields = async () => {
    try {
      const res = await pb.collection('form_settings').getFullList({ sort: 'order' })
      setFields(res)
    } catch (err) {
      toast({ title: 'Erro ao carregar campos', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFields()
  }, [])

  const addField = async () => {
    try {
      const newField = {
        name: `campo_${Date.now()}`,
        label: 'Novo Campo',
        type: 'text',
        required: false,
        order: fields.length + 1,
        options: null,
      }
      const created = await pb.collection('form_settings').create(newField)
      setFields([...fields, created])
    } catch (err) {
      toast({ title: 'Erro ao criar campo', variant: 'destructive' })
    }
  }

  const deleteField = async (id: string) => {
    try {
      await pb.collection('form_settings').delete(id)
      setFields(fields.filter((f) => f.id !== id))
    } catch (err) {
      toast({ title: 'Erro ao deletar campo', variant: 'destructive' })
    }
  }

  const updateField = async (id: string, data: any) => {
    try {
      const updated = await pb.collection('form_settings').update(id, data)
      setFields(fields.map((f) => (f.id === id ? updated : f)))
    } catch (err) {
      toast({ title: 'Erro ao atualizar', variant: 'destructive' })
    }
  }

  const updateOptions = (id: string, optionsStr: string) => {
    const opts = optionsStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    updateField(id, { options: opts })
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Campos do Formulário</h1>
        <p className="text-slate-500">
          Gerencie os campos exibidos no modal de contato (Diagnóstico Gratuito).
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Configuração Dinâmica</CardTitle>
            <CardDescription>Adicione ou remova campos e defina seus tipos.</CardDescription>
          </div>
          <Button onClick={addField} size="sm" className="gap-2">
            <Plus className="w-4 h-4" /> Adicionar Campo
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <div className="flex justify-center p-8">
              <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
            </div>
          ) : (
            fields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50"
              >
                <div className="flex items-start gap-4">
                  <div className="pt-2 cursor-move text-slate-400">
                    <GripVertical className="w-5 h-5" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
                    <div className="space-y-1">
                      <Label>Nome do Campo (ID)</Label>
                      <Input
                        value={field.name}
                        onChange={(e) => updateField(field.id, { name: e.target.value })}
                        className="font-mono text-sm bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Rótulo (Label)</Label>
                      <Input
                        value={field.label}
                        onChange={(e) => updateField(field.id, { label: e.target.value })}
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Tipo</Label>
                      <Select
                        value={field.type}
                        onValueChange={(val) => updateField(field.id, { type: val })}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Texto</SelectItem>
                          <SelectItem value="email">E-mail</SelectItem>
                          <SelectItem value="tel">Telefone</SelectItem>
                          <SelectItem value="select">Seleção (Dropdown)</SelectItem>
                          <SelectItem value="textarea">Área de Texto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <Label>Ordem</Label>
                      <Input
                        type="number"
                        value={field.order}
                        onChange={(e) => updateField(field.id, { order: Number(e.target.value) })}
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteField(field.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                {field.type === 'select' && (
                  <div className="pl-9">
                    <Label className="text-xs mb-1 block">Opções (separadas por vírgula)</Label>
                    <Input
                      defaultValue={(field.options || []).join(', ')}
                      onBlur={(e) => updateOptions(field.id, e.target.value)}
                      placeholder="Ex: Opção 1, Opção 2, Opção 3"
                      className="bg-white"
                    />
                  </div>
                )}
                <div className="pl-9 flex items-center gap-2">
                  <Switch
                    checked={field.required}
                    onCheckedChange={(val) => updateField(field.id, { required: val })}
                  />
                  <Label
                    className="text-sm text-slate-600 cursor-pointer"
                    onClick={() => updateField(field.id, { required: !field.required })}
                  >
                    Campo Obrigatório
                  </Label>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  )
}
