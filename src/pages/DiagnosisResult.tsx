import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLeadById } from '@/services/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Skeleton } from '@/components/ui/skeleton'
import { Download, AlertCircle, ArrowLeft } from 'lucide-react'

export default function DiagnosisResult() {
  const { id } = useParams()
  const [lead, setLead] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return
    getLeadById(id)
      .then(setLead)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4 space-y-8">
        <Skeleton className="h-12 w-3/4 md:w-1/2 mx-auto" />
        <Skeleton className="h-4 w-1/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-48 col-span-1 rounded-2xl" />
          <Skeleton className="h-48 col-span-2 rounded-2xl" />
        </div>
        <Skeleton className="h-[450px] w-full rounded-2xl mt-8" />
      </div>
    )
  }

  if (error || !lead) {
    return (
      <div className="container max-w-2xl mx-auto py-24 px-4 text-center">
        <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Diagnóstico não encontrado</h2>
        <p className="text-slate-600 mb-8">
          Não conseguimos localizar o relatório solicitado. Verifique se o link está correto.
        </p>
        <Button asChild>
          <Link to="/">Voltar para o início</Link>
        </Button>
      </div>
    )
  }

  const chartData = (lead.score_data || []).map((d: any) => ({
    subject: d.question || '',
    score: d.stars || 0,
    fullMark: 5,
  }))

  const chartConfig = {
    score: {
      label: 'Pontuação',
      color: '#4f46e5',
    },
  }

  const getRecommendations = (scoreClass: string) => {
    switch (scoreClass) {
      case 'A':
        return {
          title: 'Alto potencial de escala',
          desc: 'Sua operação é madura. O foco agora deve ser em IA preditiva, integrações avançadas e agentes autônomos para escalar sem aumentar custos.',
          color: 'text-emerald-700',
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          line: 'bg-emerald-500',
        }
      case 'B':
        return {
          title: 'Bom potencial',
          desc: 'Sua empresa tem processos definidos, mas perde eficiência em transições manuais. Recomendamos automação de fluxos de trabalho e um CRM mais robusto.',
          color: 'text-blue-700',
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          line: 'bg-blue-500',
        }
      case 'C':
        return {
          title: 'Potencial médio',
          desc: 'Você possui gargalos evidentes. Recomendamos iniciar com o diagnóstico profundo e automações simples para resolver o trabalho repetitivo da equipe.',
          color: 'text-amber-700',
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          line: 'bg-amber-500',
        }
      default:
        return {
          title: 'Baixo potencial imediato (Necessita Estruturação)',
          desc: 'A operação atual precisa de organização antes de escalar. Sugerimos focar em padronização de processos e implantação de um CRM básico para centralizar os dados.',
          color: 'text-rose-700',
          bg: 'bg-rose-50',
          border: 'border-rose-200',
          line: 'bg-rose-500',
        }
    }
  }

  const rec = getRecommendations(lead.score_class)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 print-area">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 no-print pb-4">
          <Button variant="ghost" asChild className="gap-2 hover:bg-slate-200">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" /> Voltar
            </Link>
          </Button>
          <Button
            onClick={handlePrint}
            className="gap-2 bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm"
          >
            <Download className="w-4 h-4" /> Baixar PDF do diagnóstico
          </Button>
        </div>

        <div className="text-center print-header bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Seu Score de Maturidade Operacional
          </h1>
          <p className="text-slate-600 text-lg">
            Relatório gerado para a empresa{' '}
            <span className="font-bold text-indigo-700">{lead.empresa}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 border-none shadow-md overflow-hidden relative bg-white">
            <div className={`absolute top-0 left-0 w-full h-2 ${rec.line}`} />
            <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Score Final
              </div>
              <div className="text-7xl font-black text-slate-900 mb-3 tracking-tighter">
                {lead.score}
              </div>
              <div
                className={`text-xl font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-slate-50 ${rec.color}`}
              >
                Classe {lead.score_class}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`col-span-1 md:col-span-2 border shadow-sm relative overflow-hidden ${rec.bg} ${rec.border}`}
          >
            <CardContent className="p-8 md:p-10 h-full flex flex-col justify-center">
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${rec.color}`}>{rec.title}</h3>
              <p className="text-slate-800 text-lg leading-relaxed font-medium opacity-90">
                {rec.desc}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md border-slate-200 bg-white">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50">
            <CardTitle className="text-xl text-slate-800">Análise por Dimensão</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 pb-4">
            <div className="h-[400px] w-full">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 5]}
                    tick={{ fill: '#94a3b8' }}
                    axisLine={false}
                  />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="var(--color-score)"
                    strokeWidth={3}
                    fill="var(--color-score)"
                    fillOpacity={0.2}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-slate-400 mt-12 mb-8 no-print p-4 bg-slate-100 rounded-xl border border-slate-200">
          <span className="font-semibold text-slate-500 block mb-1">
            Guarde este link para acessar o resultado depois:
          </span>
          <span className="select-all block truncate max-w-full font-mono text-indigo-500">
            {window.location.href}
          </span>
        </div>
      </div>
    </div>
  )
}
