import { useSiteSettings } from '@/contexts/SiteSettingsContext'

export default function PrivacyPolicyPage() {
  const { content } = useSiteSettings()

  return (
    <div className="container mx-auto px-4 pt-40 md:pt-48 pb-24 max-w-4xl animate-fade-in-up">
      <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-10 text-foreground tracking-tight">
        Política de Privacidade
      </h1>

      <div
        className="prose prose-slate prose-lg max-w-none text-muted-foreground prose-headings:font-heading prose-headings:text-foreground"
        dangerouslySetInnerHTML={{
          __html:
            content.privacy_policy_text ||
            `
            <p>A Nuvo valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).</p>
            <h3>Coleta e Uso de Dados</h3>
            <p>Coletamos informações estritamente necessárias...</p>
            <p class="text-sm mt-12 opacity-70">Última atualização: Maio de 2026</p>
          `,
        }}
      />
    </div>
  )
}
