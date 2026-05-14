import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            disabled && 'pointer-events-none opacity-50',
            isActive && 'bg-accent/50 text-accent-foreground font-medium',
            className,
          )}
          {...props}
        >
          <div
            className={cn(
              'text-sm font-heading font-semibold leading-none',
              isActive && 'text-primary',
            )}
          >
            {title}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
              {children}
            </p>
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

  const isSolucoesActive = solucoes.some((s) => s.href === location.pathname)
  const isNegociosActive = negocios.some((n) => n.href === location.pathname)
  const isConteudosActive = conteudos.some((c) => c.href === location.pathname)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/90 border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          aria-label="Ir para a página inicial"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">N</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Nuvo
          </span>
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
                  <ul className="grid w-[600px] grid-cols-3 gap-4 p-6 bg-white">
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
                  <ul className="grid w-[600px] grid-cols-3 gap-4 p-6 bg-white">
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
                  <ul className="grid w-[600px] grid-cols-3 gap-4 p-6 bg-white">
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
        <div className="hidden lg:flex items-center gap-4">
          <Button
            onClick={openModal}
            className="h-[44px] rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm transition-all duration-300 hover:shadow-md px-6 cursor-pointer"
          >
            Quero um diagnóstico gratuito
          </Button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className="flex lg:hidden items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Navegue pelas soluções e conteúdos da Nuvo
              </SheetDescription>

              <div className="flex items-center gap-2 mb-8 mt-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">N</span>
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">Nuvo</span>
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
                  <AccordionItem value="solucoes">
                    <AccordionTrigger
                      className={cn(
                        'font-heading font-semibold',
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
                              'p-3 text-sm hover:bg-muted rounded-md transition-colors',
                              isActive && 'bg-muted',
                            )}
                          >
                            <span
                              className={cn('block font-medium mb-1', isActive && 'text-primary')}
                            >
                              {item.title}
                            </span>
                            <span className="block text-xs text-muted-foreground">{item.desc}</span>
                          </Link>
                        )
                      })}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="negocios">
                    <AccordionTrigger
                      className={cn(
                        'font-heading font-semibold',
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
                              'p-3 text-sm hover:bg-muted rounded-md transition-colors',
                              isActive && 'bg-muted',
                            )}
                          >
                            <span
                              className={cn('block font-medium mb-1', isActive && 'text-primary')}
                            >
                              {item.title}
                            </span>
                            <span className="block text-xs text-muted-foreground">{item.desc}</span>
                          </Link>
                        )
                      })}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="conteudos">
                    <AccordionTrigger
                      className={cn(
                        'font-heading font-semibold',
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
                              'p-3 text-sm rounded-md transition-colors',
                              item.disabled ? 'opacity-50 pointer-events-none' : 'hover:bg-muted',
                              isActive && 'bg-muted',
                            )}
                          >
                            <span
                              className={cn('block font-medium mb-1', isActive && 'text-primary')}
                            >
                              {item.title}
                            </span>
                            <span className="block text-xs text-muted-foreground">{item.desc}</span>
                          </Link>
                        )
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-border">
                <Button
                  onClick={openModal}
                  className="w-full h-[44px] rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm px-6 cursor-pointer"
                >
                  Quero um diagnóstico gratuito
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
