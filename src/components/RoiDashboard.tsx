import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { TrendingUp, Clock, DollarSign, Target } from 'lucide-react'

export default function RoiDashboard({ calculations, formData }: any) {
  const {
    monthlySavings,
    annualSavings,
    roi,
    paybackMonths,
    currentMonthlyCost,
    projectedMonthlyCost,
  } = calculations

  const chartData = [
    { name: 'Custo Atual', valor: currentMonthlyCost, fill: 'hsl(var(--destructive))' },
    { name: 'Com Nuvo', valor: projectedMonthlyCost, fill: 'hsl(var(--primary))' },
  ]

  const chartConfig = {
    valor: { label: 'Custo Mensal (R$)', color: 'hsl(var(--primary))' },
  }

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)

  return (
    <div className="space-y-6 print:space-y-4 print:text-black">
      <div className="hidden print:block mb-8 text-center">
        <h1 className="text-3xl font-bold">Seu Relatório de ROI Completo - Nuvo Company</h1>
        <p className="text-slate-600 mt-2">
          Segmento: {formData.segment} | Funcionários: {formData.employees} | Horas manuais:{' '}
          {formData.manualHours}h/semana
        </p>
      </div>

      <Card className="bg-indigo-600 text-white border-none shadow-xl print:bg-slate-100 print:text-slate-900 print:shadow-none">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <TrendingUp className="w-12 h-12 mb-4 text-indigo-200 print:text-indigo-600" />
          <h2 className="text-lg font-medium text-indigo-100 print:text-slate-600 mb-2">
            Economia Anual Estimada
          </h2>
          <div className="text-5xl font-extrabold tracking-tight">
            {formatCurrency(annualSavings)}
          </div>
          <p className="mt-4 text-indigo-200 print:text-slate-500 font-medium">
            ROI de {roi.toFixed(0)}% sobre o investimento
          </p>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="shadow-sm print:shadow-none print:border-slate-300">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-8 h-8 mx-auto text-emerald-500 mb-3" />
            <p className="text-sm text-slate-500 font-medium mb-1">Economia Mensal</p>
            <p className="text-2xl font-bold text-slate-900">{formatCurrency(monthlySavings)}</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm print:shadow-none print:border-slate-300">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 mx-auto text-blue-500 mb-3" />
            <p className="text-sm text-slate-500 font-medium mb-1">Payback (Retorno)</p>
            <p className="text-2xl font-bold text-slate-900">{paybackMonths.toFixed(1)} meses</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm print:shadow-none print:border-slate-300">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 mx-auto text-purple-500 mb-3" />
            <p className="text-sm text-slate-500 font-medium mb-1">Horas Recuperadas</p>
            <p className="text-2xl font-bold text-slate-900">
              {(formData.employees * formData.manualHours * 4).toFixed(0)}h /mês
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-sm print:shadow-none print:border-slate-300">
          <CardHeader>
            <CardTitle className="text-lg">Comparativo de Custos</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis
                    tickFormatter={(val) => `R$ ${val / 1000}k`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent formatter={(val: number) => formatCurrency(val)} />
                    }
                  />
                  <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm print:shadow-none print:border-slate-300">
          <CardHeader>
            <CardTitle className="text-lg">Detalhamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-slate-500">Custo Manual Atual (Mês)</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(currentMonthlyCost)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-slate-500">Custo Estimado c/ IA (Mês)</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(projectedMonthlyCost)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-slate-500">Investimento Único Estimado</span>
                <span className="font-semibold text-slate-900">
                  {formatCurrency(calculations.investment)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-900 font-medium">Lucro Líquido (Ano 1)</span>
                <span className="font-bold text-emerald-600 text-lg">
                  {formatCurrency(annualSavings - calculations.investment)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="hidden print:block mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="text-xl font-bold mb-3">Recomendação Nuvo Company</h3>
        <p className="text-slate-700">
          Para empresas do segmento de <strong>{formData.segment}</strong>, a automação com agentes
          de IA e integrações sistêmicas proporciona não apenas a redução de{' '}
          {formatCurrency(annualSavings)} em custos anuais, mas também aumenta a previsibilidade,
          reduz erros operacionais e permite que seus {formData.employees} colaboradores foquem em
          tarefas estratégicas de alto valor agregado.
        </p>
      </div>
    </div>
  )
}
