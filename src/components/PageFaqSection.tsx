import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  color: string
  faqs: FaqItem[]
}

export function PageFaqSection({ color, faqs }: Props) {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 bg-white border rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
