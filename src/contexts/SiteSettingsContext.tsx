import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  getSiteSettings,
  getFileUrl,
  getSiteContent,
  type SiteSettings,
} from '@/services/site_settings'

interface SiteSettingsContextType {
  settings: SiteSettings | null
  content: Record<string, string>
  contentRaw: Record<string, any>
  logoUrl: string
  faviconUrl: string
  heroBackgroundUrl: string
  footerLogoUrl: string
  loading: boolean
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined)

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext)
  if (!context) throw new Error('useSiteSettings must be used within a SiteSettingsProvider')
  return context
}

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [content, setContent] = useState<Record<string, string>>({})
  const [contentRaw, setContentRaw] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [settingsData, contentData] = await Promise.all([getSiteSettings(), getSiteContent()])

        setSettings(settingsData)

        const contentMap: Record<string, string> = {}
        const rawMap: Record<string, any> = {}
        contentData.forEach((item: any) => {
          contentMap[item.key] = item.value
          rawMap[item.key] = item
        })
        setContent(contentMap)
        setContentRaw(rawMap)

        if (settingsData?.favicon) {
          const faviconUrl = getFileUrl(settingsData, settingsData.favicon)
          let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
          if (!link) {
            link = document.createElement('link')
            link.rel = 'icon'
            document.head.appendChild(link)
          }
          link.href = faviconUrl
        }
      } catch (err) {
        console.error('Failed to load settings context', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const logoUrl = settings?.logo ? getFileUrl(settings, settings.logo) : ''
  const faviconUrl = settings?.favicon ? getFileUrl(settings, settings.favicon) : ''
  const heroBackgroundUrl = settings?.hero_background
    ? getFileUrl(settings, settings.hero_background)
    : ''
  const footerLogoUrl = settings?.footer_logo ? getFileUrl(settings, settings.footer_logo) : ''

  return (
    <SiteSettingsContext.Provider
      value={{
        settings,
        content,
        contentRaw,
        logoUrl,
        faviconUrl,
        heroBackgroundUrl,
        footerLogoUrl,
        loading,
      }}
    >
      {children}
    </SiteSettingsContext.Provider>
  )
}
