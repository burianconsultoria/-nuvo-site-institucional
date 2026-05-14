import { useState, useEffect, useCallback } from 'react'
import { Search, Info, AlertCircle, Loader2 } from 'lucide-react'
import pb from '@/lib/pocketbase/client'
import { useRealtime } from '@/hooks/use-realtime'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [category, setCategory] = useState<string>('all')
  const [categories, setCategories] = useState<string[]>([])
  const [faqs, setFaqs] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // SEO Optimization
  useEffect(() => {
    document.title = 'FAQ - Dúvidas Frequentes | Nuvo'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', 'Encontre respostas para suas dúvidas sobre a Nuvo.')
  }, [])

  // Search debounce logic
  useEffect(() => {
    setIsSearching(true)
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
      setIsSearching(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  const loadCategories = async () => {
    try {
      const records = await pb.collection('faq_items').getFullList({ fields: 'categoria' })
      const cats = Array.from(new Set(records.map((r) => r.categoria).filter(Boolean)))
      setCategories(cats as string[])
    } catch (err) {
      console.error('Error loading categories:', err)
    }
  }

  const fetchFaqs = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const filterParts = []
      if (debouncedSearch) {
        const safeSearch = debouncedSearch.replace(/"/g, '\\"').replace(/'/g, "\\'")
        filterParts.push(`(pergunta ~ "${safeSearch}" || resposta ~ "${safeSearch}")`)
      }
      if (category && category !== 'all') {
        const safeCategory = category.replace(/"/g, '\\"').replace(/'/g, "\\'")
        filterParts.push(`categoria = "${safeCategory}"`)
      }
      const filter = filterParts.join(' && ')

      const records = await pb.collection('faq_items').getFullList({
        filter: filter || undefined,
        sort: 'ordem',
      })

      // Client-side relevance sort when searching
      if (debouncedSearch) {
        const term = debouncedSearch.toLowerCase()
        records.sort((a, b) => {
          const aP = a.pergunta.toLowerCase()
          const bP = b.pergunta.toLowerCase()

          if (aP === term && bP !== term) return -1
          if (bP === term && aP !== term) return 1

          const aStarts = aP.startsWith(term)
          const bStarts = bP.startsWith(term)
          if (aStarts && !bStarts) return -1
          if (bStarts && !aStarts) return 1

          const aContains = aP.includes(term)
          const bContains = bP.includes(term)
          if (aContains && !bContains) return -1
          if (bContains && !aContains) return 1

          return a.ordem - b.ordem
        })
      }

      setFaqs(records)
    } catch (err: any) {
      if (!err.isAbort) {
        setError(err.message || 'Erro ao carregar perguntas.')
      }
    } finally {
      setIsLoading(false)
    }
  }, [debouncedSearch, category])

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {
    fetchFaqs()
  }, [fetchFaqs])

  useRealtime('faq_items', () => {
    fetchFaqs()
    loadCategories()
  })

  return (
    <div className="container max-w-4xl py-20 px-4 animate-fade-in-up mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Perguntas Frequentes</h1>
        <p className="text-lg text-muted-foreground">
          Encontre respostas para suas dúvidas sobre a plataforma Nuvo e como podemos ajudar seu
          negócio.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Busque sua dúvida..."
            className="pl-10 pr-10 h-12 text-lg rounded-xl shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {isSearching && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin text-muted-foreground" />
          )}
        </div>

        <div className="w-full md:w-64">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-12 rounded-xl shadow-sm">
              <SelectValue placeholder="Todas as categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground font-medium h-5">
        {!isLoading && !error && (
          <span>
            {faqs.length} {faqs.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
          </span>
        )}
      </div>

      <div className="min-h-[400px]">
        {error ? (
          <div className="flex flex-col items-center justify-center p-12 bg-destructive/10 rounded-xl border border-destructive/20 text-destructive text-center">
            <AlertCircle className="h-10 w-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Erro ao carregar</h3>
            <p className="mb-6">{error}</p>
            <Button
              onClick={fetchFaqs}
              variant="outline"
              className="border-destructive/30 hover:bg-destructive/20 text-destructive"
            >
              Tentar novamente
            </Button>
          </div>
        ) : isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-xl" />
            ))}
          </div>
        ) : faqs.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 bg-card border rounded-xl shadow-sm text-center">
            <Info className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhuma pergunta encontrada</h3>
            <p className="text-muted-foreground max-w-sm">
              Não conseguimos encontrar resultados para sua busca ou filtro. Tente usar outros
              termos.
            </p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border bg-card px-6 rounded-xl shadow-sm data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary py-5">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  )
}
