import { useState, useEffect } from 'react'
import { getLeads } from '@/services/api'
import { useRealtime } from '@/hooks/use-realtime'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      const data = await getLeads()
      setLeads(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  useRealtime('leads', () => {
    loadData()
  })

  const getBadgeColor = (c: string) => {
    if (c === 'A') return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
    if (c === 'B') return 'bg-amber-100 text-amber-800 hover:bg-amber-200'
    if (c === 'C') return 'bg-orange-100 text-orange-800 hover:bg-orange-200'
    if (c === 'D') return 'bg-rose-100 text-rose-800 hover:bg-rose-200'
    return 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="container py-12 px-4 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads Capturados</h1>
          <p className="text-muted-foreground">Gerencie os contatos recebidos em tempo real.</p>
        </div>
        <div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-semibold border border-indigo-100">
          Total de Leads: {leads.length}
        </div>
      </div>

      <Card className="shadow-sm border-muted">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[120px]">Data</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Segmento</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="w-[100px] text-center">Classe</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10">
                      Carregando leads...
                    </TableCell>
                  </TableRow>
                ) : leads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10">
                      Nenhum lead encontrado.
                    </TableCell>
                  </TableRow>
                ) : (
                  leads.map((l) => (
                    <TableRow key={l.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium text-muted-foreground">
                        {new Date(l.created).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="font-semibold">{l.email}</TableCell>
                      <TableCell>{l.empresa || '-'}</TableCell>
                      <TableCell>{l.segmento || '-'}</TableCell>
                      <TableCell className="text-right font-mono">
                        {l.score !== undefined ? `${l.score}%` : '-'}
                      </TableCell>
                      <TableCell className="text-center">
                        {l.score_class ? (
                          <Badge
                            variant="outline"
                            className={`font-bold border-transparent ${getBadgeColor(l.score_class)}`}
                          >
                            {l.score_class}
                          </Badge>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
