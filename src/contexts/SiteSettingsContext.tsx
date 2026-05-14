import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { getSiteSettings, getFileUrl, type SiteSettings } from '@/services/site_settings'
import { useRealtime } from '@/hooks/use-realtime'

interface SiteSettingsContextType {
  settings: SiteSettings | null
  logoUrl: string
  faviconUrl: string
  refresh: () => Promise<void>
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined)

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings | null>(null)

  const loadSettings = async () => {
    const data = await getSiteSettings()
    setSettings(data)
  }

  useEffect(() => {
    loadSettings()
  }, [])

  useRealtime('site_settings', () => {
    loadSettings()
  })

  const logoUrl = settings?.logo ? getFileUrl(settings, settings.logo) : ''
  const faviconUrl = settings?.favicon ? getFileUrl(settings, settings.favicon) : ''

  useEffect(() => {
    if (faviconUrl) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = faviconUrl
    }
  }, [faviconUrl])

  return (
    <SiteSettingsContext.Provider value={{ settings, logoUrl, faviconUrl, refresh: loadSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  )
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext)
  if (context === undefined) {
    throw new Error('useSiteSettings must be used within a SiteSettingsProvider')
  }
  return context
}
