import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1C1C28] text-white/90 pt-16 pb-8">
      <div className="container mx-auto px-4">
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
              <li>
                <Link
                  to="/solucoes/diagnostico-de-eficiencia"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Diagnóstico de Eficiência
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/agente-de-ia"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Agente de IA
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/automacao-de-processos"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Automação de Processos
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/crm-e-organizacao-comercial"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  CRM e Organização Comercial
                </Link>
              </li>
              <li>
                <Link
                  to="/solucoes/sistemas-sob-medida"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Sistemas Sob Medida
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Segmentos */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Para seu Negócio</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link
                  to="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Serviços B2B
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Indústrias
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Academias
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Clínicas
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  E-commerce WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Recursos */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Recursos</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link
                  to="/como-funciona"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos-de-uso"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  Termos de Uso
                </Link>
              </li>
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
