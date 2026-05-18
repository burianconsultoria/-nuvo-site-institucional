import { Link, useLocation } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'

export function Footer() {
  const location = useLocation()
  const { content, footerLogoUrl } = useSiteSettings()

  const solucoesLinks = [
    { title: 'Diagnóstico de Eficiência', href: '/solucoes/diagnostico-de-eficiencia' },
    { title: 'Agentes de IA', href: '/solucoes/agentes-de-ia' },
    { title: 'Automação de Processos', href: '/solucoes/automacoes-de-processos' },
    { title: 'CRM e Organização Comercial', href: '/solucoes/crm-e-organizacao-comercial' },
    { title: 'Sistemas Sob Medida', href: '/solucoes/sistemas-sob-medida' },
  ]

  const negociosLinks = [
    { title: 'Serviços B2B', href: '/para-seu-negocio/servicos-b2b' },
    { title: 'Indústrias', href: '/para-seu-negocio/industrias' },
    { title: 'Contabilidades', href: '/para-seu-negocio/contabilidades' },
    { title: 'Advogados', href: '/para-seu-negocio/advogados' },
    { title: 'Agências', href: '/para-seu-negocio/agencias' },
    { title: 'Logística', href: '/para-seu-negocio/logistica' },
  ]

  const recursosLinks = [
    { title: 'Como Funciona', href: '/como-funciona' },
    { title: 'Sobre', href: '/sobre' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Contato', href: '/contato' },
    { title: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { title: 'Termos de Uso', href: '/termos-de-uso' },
  ]

  return (
    <footer className="bg-background text-foreground/90 pt-20 pb-8 border-t border-border/10">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              {footerLogoUrl ? (
                <img src={footerLogoUrl} alt="Logo Nuvo" className="h-10 object-contain" />
              ) : (
                <div className="flex items-center font-heading font-bold text-2xl tracking-tighter text-foreground">
                  <span className="text-primary">n</span>
                  <span className="ml-[-1px] mr-[1px]">u</span>v<span className="ml-[-1px]">o</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-expression ml-1 mb-1" />
                </div>
              )}
            </Link>
            <div
              className="text-foreground/70 text-sm leading-relaxed max-w-xs prose prose-sm prose-invert"
              dangerouslySetInnerHTML={{
                __html:
                  content.footer_desc ||
                  'Transformando a eficiência dos seus negócios com tecnologia avançada, automação de processos e Inteligência Artificial.',
              }}
            />
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da Nuvo"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Nuvo"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-foreground">Soluções</h4>
            <ul className="space-y-4 text-sm text-foreground/70">
              {solucoesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'hover:text-foreground hover:underline transition-colors duration-300',
                      location.pathname === link.href && 'text-foreground underline font-medium',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-foreground">
              Para seu Negócio
            </h4>
            <ul className="space-y-4 text-sm text-foreground/70">
              {negociosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'hover:text-foreground hover:underline transition-colors duration-300',
                      location.pathname === link.href && 'text-foreground underline font-medium',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-foreground">Recursos</h4>
            <ul className="space-y-4 text-sm text-foreground/70">
              {recursosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'hover:text-foreground hover:underline transition-colors duration-300',
                      location.pathname === link.href && 'text-foreground underline font-medium',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 mt-16 pt-8 text-center text-sm text-foreground/50">
          <p>© 2026 Nuvo Company. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
