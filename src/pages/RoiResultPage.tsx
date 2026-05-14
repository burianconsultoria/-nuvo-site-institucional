import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSEO } from '@/hooks/use-seo'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Printer, ArrowLeft, RefreshCcw } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import RoiDashboard from '@/components/RoiDashboard'

export default function RoiResultPage() {
  useSEO({
    title: 'Resultado do ROI | Nuvo Company',
  })

  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchResult = async () => {
    setLoading(true)
    setError(false)
    try {
      const record = await pb.send(`/backend/v1/roi/${id}`, { method: 'GET' })
      setData(record.dados)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchResult()
  }, [id])

  const handlePrint = () => {
    window.print()
  }

  if (loading) {
    return (
      <div className="container max-w-5xl mx-auto py-12 px-4 space-y-8">
        <Skeleton className="h-10 w-64 mx-auto mb-10" />
        <Skeleton className="h-64 w-full rounded-xl" />
        <div className="grid sm:grid-cols-3 gap-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="container max-w-3xl mx-auto py-24 px-4 text-center">
        <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 inline-block mb-6">
          <p className="text-lg font-medium">Não foi possível carregar o relatório.</p>
          <p className="text-sm opacity-80 mt-1">
            O link pode ser inválido ou houve um erro de conexão.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => navigate('/calculadora-roi')}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Fazer novo cálculo
          </Button>
          <Button onClick={fetchResult}>
            <RefreshCcw className="w-4 h-4 mr-2" /> Tentar novamente
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-5xl mx-auto py-12 px-4 print:p-0">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 print:hidden gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Seu Relatório de ROI</h1>
          <p className="text-slate-500 mt-1">Link salvo permanentemente.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => navigate('/calculadora-roi')}>
            Novo Cálculo
          </Button>
          <Button onClick={handlePrint} className="bg-slate-900 hover:bg-slate-800 text-white">
            <Printer className="w-4 h-4 mr-2" /> Baixar relatório de ROI completo
          </Button>
        </div>
      </div>

      <RoiDashboard calculations={data.calculations} formData={data} />
    </div>
  )
}
