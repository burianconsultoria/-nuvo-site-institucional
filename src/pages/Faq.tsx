import { useState, useEffect } from 'react'
import { getFaqItems } from '@/services/api'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    getFaqItems().then(setItems).catch(console.error)
  }, [])

  return (
    <div className="container max-w-3xl py-20 px-4 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Perguntas Frequentes</h1>
        <p className="text-lg text-muted-foreground">
          Tire suas dúvidas sobre a plataforma Nuvo e como podemos ajudar seu negócio.
        </p>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-muted-foreground">Carregando perguntas...</p>
      ) : (
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item) => (
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
  )
}
