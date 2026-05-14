import { useEffect, useState } from 'react'
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

const scoreColors: Record<string, string> = {
  A: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  B: 'bg-blue-100 text-blue-800 border-blue-200',
  C: 'bg-amber-100 text-amber-800 border-amber-200',
  D: 'bg-rose-100 text-rose-800 border-rose-200',
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<any[]>([])

  const loadData = async () => {
    const data = await getLeads()
    setLeads(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  useRealtime('leads', () => {
    loadData()
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Leads Capturados</h1>
          <p className="text-slate-500">
            Acompanhe todos os leads gerados pelas calculadoras e quizzes em tempo real.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Origem / Contato</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Classe</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-slate-500">
                  Nenhum lead encontrado.
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-slate-50">
                  <TableCell className="font-medium">{lead.nome || 'N/A'}</TableCell>
                  <TableCell>{lead.empresa || '-'}</TableCell>
                  <TableCell>
                    <div className="text-sm">{lead.email}</div>
                    <div className="text-xs text-slate-500">{lead.telefone || ''}</div>
                  </TableCell>
                  <TableCell className="font-mono">{lead.score || 0}/100</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`font-bold px-2.5 py-0.5 ${scoreColors[lead.score_class] || 'bg-slate-100'}`}
                    >
                      {lead.score_class || 'D'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm">
                    {new Date(lead.created).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
