import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate, Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 8) {
      return toast({ title: 'A senha deve ter no mínimo 8 caracteres', variant: 'destructive' })
    }

    setLoading(true)
    const { error } = await signUp(email, password, name)
    setLoading(false)

    if (!error) {
      toast({ title: 'Conta criada com sucesso!' })
      navigate('/dashboard')
    } else {
      toast({ title: 'Erro ao criar conta', description: error?.message, variant: 'destructive' })
    }
  }

  return (
    <div className="container max-w-sm py-24 flex items-center justify-center animate-fade-in-up">
      <Card className="w-full shadow-xl border-muted">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold">Cadastro</CardTitle>
          <CardDescription>Crie sua conta administrativa</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Input
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Senha (mín 8 caract.)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <Button type="submit" className="w-full h-11" disabled={loading}>
              {loading ? 'Criando...' : 'Criar Conta'}
            </Button>
            <p className="text-sm text-center text-muted-foreground mt-6">
              Já tem conta?{' '}
              <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                Faça login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
