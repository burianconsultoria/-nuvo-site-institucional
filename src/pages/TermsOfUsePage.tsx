import { useSiteSettings } from '@/contexts/SiteSettingsContext'

export default function TermsOfUsePage() {
  const { content } = useSiteSettings()

  return (
    <div className="container mx-auto px-4 pt-40 md:pt-48 pb-24 max-w-4xl animate-fade-in-up">
      <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-10 text-foreground tracking-tight">
        Termos de Uso
      </h1>

      <div
        className="prose prose-slate prose-lg max-w-none text-muted-foreground prose-headings:font-heading prose-headings:text-foreground"
        dangerouslySetInnerHTML={{
          __html:
            content.terms_of_use_text ||
            `
            <p>Bem-vindo aos Termos de Uso da Nuvo. Ao acessar nosso site...</p>
            <h3>1. Serviços Oferecidos</h3>
            <p>A Nuvo é uma empresa focada em fornecer soluções de tecnologia...</p>
          `,
        }}
      />
    </div>
  )
}
