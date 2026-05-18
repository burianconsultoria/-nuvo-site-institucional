import { HelpCircle } from 'lucide-react'
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
  faqs: FaqItem[]
  color?: string
}

export function PageFaqSection({ faqs }: Props) {
  return (
    <div className="py-24 bg-card text-card-foreground border-t border-border/20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 mx-auto mb-6 text-support" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-foreground/70">
            Tire suas dúvidas e entenda como nossa solução funciona na prática.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border border-border/20 bg-background px-6 rounded-xl shadow-sm data-[state=open]:border-primary transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-lg py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
