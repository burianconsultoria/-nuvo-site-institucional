import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import pb from '@/lib/pocketbase/client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Profile() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setSaving(true)
    try {
      await pb.collection('users').update(user.id, { name })
      toast({ title: 'Perfil atualizado com sucesso' })
    } catch {
      toast({ title: 'Erro ao atualizar', variant: 'destructive' })
    } finally {
      setSaving(false)
    }
  }

  const getInitials = (n: string) => (n ? n.substring(0, 2).toUpperCase() : 'US')

  return (
    <div className="container max-w-md py-20 px-4 animate-fade-in-up">
      <Card className="shadow-lg border-muted">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <Avatar className="h-24 w-24 border-4 border-muted">
              <AvatarFallback className="text-2xl font-bold bg-indigo-100 text-indigo-700">
                {getInitials(user?.name || user?.email)}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl font-bold">Meu Perfil</CardTitle>
          <CardDescription>Gerencie suas informações pessoais</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">E-mail</label>
            <Input value={user?.email} disabled className="bg-muted" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Nome Completo</label>
            <Input placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <Button onClick={handleSave} className="w-full h-11 mt-4" disabled={saving}>
            {saving ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
