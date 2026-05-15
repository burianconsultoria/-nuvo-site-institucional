import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'
import { useSiteSettings } from '@/contexts/SiteSettingsContext'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

const solucoes = [
  {
    title: 'Diagnóstico de Eficiência',
    href: '/solucoes/diagnostico-de-eficiencia',
    desc: 'Avalie a maturidade digital do seu negócio',
  },
  {
    title: 'Agentes de IA',
    href: '/solucoes/agentes-de-ia',
    desc: 'Atendimento inteligente operando 24/7',
  },
  {
    title: 'Automação de Processos',
    href: '/solucoes/automacoes-de-processos',
    desc: 'Elimine gargalos operacionais e erros',
  },
  {
    title: 'CRM e Organização Comercial',
    href: '/solucoes/crm-e-organizacao-comercial',
    desc: 'Centralize vendas e indicadores',
  },
  {
    title: 'Sistemas Sob Medida',
    href: '/solucoes/sistemas-sob-medida',
    desc: 'Plataformas desenvolvidas sob medida',
  },
]

const negocios = [
  {
    title: 'Serviços B2B',
    href: '/para-seu-negocio/servicos-b2b',
    desc: 'Eficiência para empresas',
  },
  {
    title: 'Indústrias',
    href: '/para-seu-negocio/industrias',
    desc: 'Automação na linha de produção',
  },
  {
    title: 'Contabilidades',
    href: '/para-seu-negocio/contabilidades',
    desc: 'Otimização e agilidade',
  },
  { title: 'Advogados', href: '/para-seu-negocio/advogados', desc: 'Organização de processos' },
  { title: 'Agências', href: '/para-seu-negocio/agencias', desc: 'Mais escala e resultados' },
  { title: 'Logística', href: '/para-seu-negocio/logistica', desc: 'Controle de ponta a ponta' },
]

const conteudos = [
  { title: 'Blog', href: '#', disabled: true, desc: 'Artigos sobre tecnologia (Em breve)' },
  { title: 'Cases', href: '#', disabled: true, desc: 'Histórias de clientes (Em breve)' },
  { title: 'FAQ', href: '/faq', disabled: false, desc: 'Respostas para suas dúvidas' },
  {
    title: 'Como Funciona',
    href: '/como-funciona',
    disabled: false,
    desc: 'Nossa metodologia passo a passo',
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { disabled?: boolean }
>(({ className, title, children, disabled, to, ...props }, ref) => {
  const location = useLocation()
  const isActive = to && location.pathname === to

  return (
    <li>
      <NavigationMenuLink asChild active={isActive}>
        <Link
          to={to ?? '#'}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-slate-100/80 hover:shadow-sm focus:bg-slate-100/80 focus:shadow-sm',
            disabled && 'pointer-events-none opacity-50',
            isActive && 'bg-slate-100 shadow-sm text-accent-foreground font-medium',
            className,
          )}
          {...props}
        >
          <div
            className={cn(
              'text-sm font-heading font-semibold leading-none text-slate-900',
              isActive && 'text-primary',
            )}
          >
            {title}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-slate-500 mt-1.5">{children}</p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export function Header() {
  const { openModal } = useContactModal()
  const location = useLocation()
  const { logoUrl } = useSiteSettings()

  const isSolucoesActive = solucoes.some((s) => s.href === location.pathname)
  const isNegociosActive = negocios.some((n) => n.href === location.pathname)
  const isConteudosActive = conteudos.some((c) => c.href === location.pathname)

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-6 md:px-12 pointer-events-none">
      <header className="w-full max-w-6xl pointer-events-auto backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full transition-all duration-300">
        <div className="px-6 md:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            aria-label="Ir para a página inicial"
          >
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="h-8 w-auto object-contain" />
            ) : (
              <>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white font-heading font-bold text-base">N</span>
                </div>
                <span className="font-heading font-bold text-xl tracking-tight text-foreground hidden sm:inline-block">
                  Nuvo
                </span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center flex-1 justify-center text-[#1C1C28]"
            aria-label="Navegação Principal"
          >
            <NavigationMenu delayDuration={300}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'font-heading font-semibold text-sm',
                      isSolucoesActive && 'text-primary',
                    )}
                  >
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] grid-cols-3 gap-3 p-4 bg-transparent">
                      {solucoes.map((item) => (
                        <ListItem key={item.title} title={item.title} to={item.href}>
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'font-heading font-semibold text-sm',
                      isNegociosActive && 'text-primary',
                    )}
                  >
                    Para seu Negócio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] grid-cols-3 gap-3 p-4 bg-transparent">
                      {negocios.map((item) => (
                        <ListItem key={item.title} title={item.title} to={item.href}>
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'font-heading font-semibold text-sm',
                      isConteudosActive && 'text-primary',
                    )}
                  >
                    Conteúdos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] grid-cols-3 gap-3 p-4 bg-transparent">
                      {conteudos.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          to={item.href}
                          disabled={item.disabled}
                        >
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2 text-foreground/70">
              <a
                href="#"
                className="p-2 hover:text-primary transition-colors hover:bg-white/50 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-primary transition-colors hover:bg-white/50 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-primary transition-colors hover:bg-white/50 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <Button
              onClick={openModal}
              className="h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm transition-all duration-300 hover:shadow-md px-5 cursor-pointer"
            >
              Diagnóstico gratuito
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1">
            <div className="flex items-center gap-0.5 mr-1 text-foreground/70">
              <a
                href="#"
                className="p-1.5 hover:text-primary transition-colors hover:bg-white/50 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1.5 hidden sm:flex hover:text-primary transition-colors hover:bg-white/50 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1.5 hover:text-primary transition-colors hover:bg-white/50 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/50"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-5 w-5 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col w-[300px] sm:w-[400px] border-l-white/20 bg-white/95 backdrop-blur-3xl"
              >
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas soluções e conteúdos da Nuvo
                </SheetDescription>

                <div className="flex items-center gap-2 mb-8 mt-4">
                  {logoUrl ? (
                    <img src={logoUrl} alt="Logo" className="h-8 w-auto object-contain" />
                  ) : (
                    <>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-white font-heading font-bold text-lg">N</span>
                      </div>
                      <span className="font-heading font-bold text-xl tracking-tight">Nuvo</span>
                    </>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue={
                      isSolucoesActive
                        ? 'solucoes'
                        : isNegociosActive
                          ? 'negocios'
                          : isConteudosActive
                            ? 'conteudos'
                            : undefined
                    }
                  >
                    <AccordionItem value="solucoes" className="border-b-white/20">
                      <AccordionTrigger
                        className={cn(
                          'font-heading font-semibold hover:no-underline',
                          isSolucoesActive && 'text-primary',
                        )}
                      >
                        Soluções
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2">
                        {solucoes.map((item) => {
                          const isActive = location.pathname === item.href
                          return (
                            <Link
                              key={item.title}
                              to={item.href}
                              className={cn(
                                'p-3 text-sm hover:bg-white/60 rounded-xl transition-colors',
                                isActive && 'bg-white/80 shadow-sm',
                              )}
                            >
                              <span
                                className={cn('block font-medium mb-1', isActive && 'text-primary')}
                              >
                                {item.title}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {item.desc}
                              </span>
                            </Link>
                          )
                        })}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="negocios" className="border-b-white/20">
                      <AccordionTrigger
                        className={cn(
                          'font-heading font-semibold hover:no-underline',
                          isNegociosActive && 'text-primary',
                        )}
                      >
                        Para seu Negócio
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2">
                        {negocios.map((item) => {
                          const isActive = location.pathname === item.href
                          return (
                            <Link
                              key={item.title}
                              to={item.href}
                              className={cn(
                                'p-3 text-sm hover:bg-white/60 rounded-xl transition-colors',
                                isActive && 'bg-white/80 shadow-sm',
                              )}
                            >
                              <span
                                className={cn('block font-medium mb-1', isActive && 'text-primary')}
                              >
                                {item.title}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {item.desc}
                              </span>
                            </Link>
                          )
                        })}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="conteudos" className="border-b-transparent">
                      <AccordionTrigger
                        className={cn(
                          'font-heading font-semibold hover:no-underline',
                          isConteudosActive && 'text-primary',
                        )}
                      >
                        Conteúdos
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2">
                        {conteudos.map((item) => {
                          const isActive = location.pathname === item.href
                          return (
                            <Link
                              key={item.title}
                              to={item.href}
                              className={cn(
                                'p-3 text-sm rounded-xl transition-colors',
                                item.disabled
                                  ? 'opacity-50 pointer-events-none'
                                  : 'hover:bg-white/60',
                                isActive && 'bg-white/80 shadow-sm',
                              )}
                            >
                              <span
                                className={cn('block font-medium mb-1', isActive && 'text-primary')}
                              >
                                {item.title}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {item.desc}
                              </span>
                            </Link>
                          )
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-border/40">
                  <Button
                    onClick={openModal}
                    className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm px-6 cursor-pointer"
                  >
                    Quero um diagnóstico gratuito
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}
