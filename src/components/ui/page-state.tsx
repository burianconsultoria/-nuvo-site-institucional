import { ReactNode } from 'react'
import { AlertCircle, FileQuestion } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

interface PageStateProps {
  loading: boolean
  error: boolean
  empty: boolean
  onRetry?: () => void
  children: ReactNode
}

export function PageState({ loading, error, empty, onRetry, children }: PageStateProps) {
  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-fade-in-up">
        <div className="space-y-4 max-w-2xl">
          <Skeleton className="h-12 w-3/4 bg-slate-200" />
          <Skeleton className="h-6 w-full bg-slate-200" />
          <Skeleton className="h-6 w-5/6 bg-slate-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-48 rounded-xl bg-slate-200" />
          <Skeleton className="h-48 rounded-xl bg-slate-200" />
          <Skeleton className="h-48 rounded-xl bg-slate-200 hidden md:block" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 animate-fade-in">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
          Ocorreu um erro ao carregar o conteúdo
        </h3>
        <p className="text-slate-500 max-w-md mb-6">
          Não foi possível carregar as informações desta página. Por favor, verifique sua conexão e
          tente novamente.
        </p>
        {onRetry && (
          <Button onClick={onRetry} variant="default" className="bg-indigo-600 hover:bg-indigo-700">
            Tentar novamente
          </Button>
        )}
      </div>
    )
  }

  if (empty) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 animate-fade-in">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <FileQuestion className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
          Nenhuma informação disponível
        </h3>
        <p className="text-slate-500 max-w-md">
          Não encontramos os dados necessários para exibir este conteúdo no momento.
        </p>
      </div>
    )
  }

  return <div className="animate-fade-in">{children}</div>
}
