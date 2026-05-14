import { useEffect, useState } from 'react'
import { getFaqs } from '@/services/api'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([])

  useEffect(() => {
    getFaqs().then(setFaqs)
  }, [])

  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h1>
        <p className="text-lg text-slate-600">
          Tudo o que você precisa saber sobre a plataforma Nuvo.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="bg-white border border-slate-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
              {faq.pergunta}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
              {faq.resposta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {faqs.length === 0 && (
        <div className="text-center text-slate-500 py-12">Nenhuma pergunta encontrada.</div>
      )}
    </div>
  )
}
