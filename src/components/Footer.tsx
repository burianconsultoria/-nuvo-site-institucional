import { Link, useLocation } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Footer() {
  const location = useLocation()

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
    <footer className="bg-[#1C1C28] text-white/90 pt-16 pb-8">
      <div className="w-full max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Marca */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">N</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">Nuvo</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Transformando a eficiência dos seus negócios com tecnologia avançada, automação de
              processos e Inteligência Artificial.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da Nuvo"
                className="text-white/60 hover:text-[#4A3EFF] transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Nuvo"
                className="text-white/60 hover:text-[#4A3EFF] transition-colors duration-300"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Soluções */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Soluções</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {solucoesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'hover:text-white hover:underline transition-colors duration-300',
                      location.pathname === link.href && 'text-white underline font-medium',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Segmentos */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Para seu Negócio</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {negociosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'hover:text-white hover:underline transition-colors duration-300',
                      location.pathname === link.href && 'text-white underline font-medium',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Recursos */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Recursos</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {recursosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'hover:text-white hover:underline transition-colors duration-300',
                      location.pathname === link.href && 'text-white underline font-medium',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-white/50">
          <p>© 2026 Nuvo Company. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
