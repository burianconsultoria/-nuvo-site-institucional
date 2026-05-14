import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Printer, Loader2 } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/hooks/use-toast'
import { useSEO } from '@/hooks/use-seo'
import pb from '@/lib/pocketbase/client'
import RoiDashboard from '@/components/RoiDashboard'

const SEGMENTS = {
  Varejo: 15000,
  Serviços: 10000,
  Indústria: 25000,
  Tecnologia: 20000,
  Outros: 12000,
}

const formSchema = z.object({
  employees: z.coerce
    .number({ invalid_type_error: 'Obrigatório' })
    .positive('Deve ser maior que 0'),
  manualHours: z.coerce
    .number({ invalid_type_error: 'Obrigatório' })
    .positive('Deve ser maior que 0'),
  hourlyCost: z.coerce
    .number({ invalid_type_error: 'Obrigatório' })
    .positive('Deve ser maior que 0'),
  segment: z.string().min(1, 'Selecione um segmento'),
  name: z.string().optional(),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
})

type FormValues = z.infer<typeof formSchema>

export default function RoiCalculatorPage() {
  useSEO({
    title: 'Calculadora de ROI | Nuvo Company',
    description:
      'Calcule quanto sua empresa pode economizar com automação e IA. Veja seu retorno sobre investimento de forma rápida e gratuita.',
  })

  const { toast } = useToast()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employees: undefined as unknown as number,
      manualHours: undefined as unknown as number,
      hourlyCost: undefined as unknown as number,
      segment: '',
      name: '',
      email: '',
    },
    mode: 'onChange',
  })

  const formValues = form.watch()
  const isValid = form.formState.isValid

  useEffect(() => {
    const t = setTimeout(() => setIsInitializing(false), 500)
    return () => clearTimeout(t)
  }, [])

  const calculations = useMemo(() => {
    const emp = Number(formValues.employees)
    const hours = Number(formValues.manualHours)
    const cost = Number(formValues.hourlyCost)

    if (
      isNaN(emp) ||
      isNaN(hours) ||
      isNaN(cost) ||
      emp <= 0 ||
      hours <= 0 ||
      cost <= 0 ||
      !formValues.segment
    ) {
      return null
    }

    const monthlySavings = emp * hours * cost * 4
    const annualSavings = monthlySavings * 12
    const investment = SEGMENTS[formValues.segment as keyof typeof SEGMENTS] || 12000
    const roi = (annualSavings / investment) * 100
    const paybackMonths = investment / monthlySavings

    return {
      monthlySavings,
      annualSavings,
      roi,
      paybackMonths,
      investment,
      currentMonthlyCost: monthlySavings,
      projectedMonthlyCost: investment / 12,
    }
  }, [formValues])

  const onSubmit = async (values: FormValues) => {
    if (!calculations) return

    setLoading(true)
    try {
      const nome = values.name || 'Visitante ROI'
      const email = values.email || `anon_${Date.now()}@roi.nuvo.com.br`

      let leadId = ''
      try {
        const existingLeads = await pb
          .collection('leads')
          .getList(1, 1, { filter: `email = "${email}"` })
        if (existingLeads.items.length > 0) {
          leadId = existingLeads.items[0].id
        } else {
          const newLead = await pb
            .collection('leads')
            .create({ nome, email, segmento: values.segment })
          leadId = newLead.id
        }
      } catch (err) {
        const newLead = await pb
          .collection('leads')
          .create({ nome, email, segmento: values.segment })
        leadId = newLead.id
      }

      const roiRecord = await pb.collection('roi_responses').create({
        lead_id: leadId,
        dados: { ...values, calculations },
      })

      toast({ title: 'Sucesso!', description: 'Relatório salvo com sucesso.' })
      navigate(`/calculadora-roi/${roiRecord.id}`)
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar os dados. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePrint = () => {
    toast({ title: 'Exportando PDF', description: 'O documento está sendo gerado.' })
    setTimeout(() => {
      window.print()
    }, 500)
  }

  if (isInitializing) {
    return (
      <div className="container max-w-6xl mx-auto py-12 px-4 space-y-8">
        <Skeleton className="h-10 w-64 mx-auto mb-10" />
        <div className="grid lg:grid-cols-12 gap-8">
          <Skeleton className="lg:col-span-4 h-[600px] rounded-xl" />
          <Skeleton className="lg:col-span-8 h-[600px] rounded-xl" />
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 print:p-0 print:m-0">
      <div className="text-center mb-10 print:hidden">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Calculadora de ROI</h1>
        <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto">
          Descubra o impacto financeiro de automatizar os processos manuais da sua empresa.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <Card className="lg:col-span-4 shadow-md print:hidden h-fit">
          <CardHeader>
            <CardTitle>Dados Operacionais</CardTitle>
            <CardDescription>Preencha para visualizar sua economia</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="employees"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Funcionários</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          placeholder="Ex: 10"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="manualHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horas manuais por semana (por func.)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          placeholder="Ex: 15"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hourlyCost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Custo médio por hora (R$)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          step="0.01"
                          placeholder="Ex: 35.50"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="segment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segmento</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o segmento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.keys(SEGMENTS).map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Opcional: Salvar link para acesso futuro
                  </p>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail corporativo</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@empresa.com.br" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-6 flex flex-col gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading || !isValid || !calculations}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? 'Salvando...' : 'Salvar e Gerar Link Permanente'}
                  </Button>

                  {calculations && (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handlePrint}
                      className="w-full"
                    >
                      <Printer className="mr-2 h-4 w-4" />
                      Exportar PDF
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="lg:col-span-8">
          {calculations ? (
            <div className="animate-fade-in-up">
              <RoiDashboard calculations={calculations} formData={formValues} />
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-slate-400 text-center print:hidden">
              <p className="text-lg">
                Preencha todos os dados operacionais ao lado para visualizar a projeção de economia.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
