import pb from '@/lib/pocketbase/client'

export interface SiteSettings {
  id: string
  logo?: string
  favicon?: string
  hero_background?: string
  hero_background_type?: string
  footer_logo?: string
}

export interface SiteContent {
  id: string
  key: string
  label: string
  value: string
  page: string
  media?: string
  media_type?: string
}

export const getSiteSettings = async (): Promise<SiteSettings | null> => {
  try {
    const record = await pb.collection('site_settings').getFirstListItem('')
    return record as unknown as SiteSettings
  } catch {
    return null
  }
}

export const updateSiteSettings = async (id: string, data: FormData) => {
  return pb.collection('site_settings').update(id, data)
}

export const getSiteContent = async (): Promise<SiteContent[]> => {
  try {
    return (await pb.collection('site_content').getFullList()) as unknown as SiteContent[]
  } catch {
    return []
  }
}

export const updateSiteContent = async (id: string, data: FormData) => {
  return pb.collection('site_content').update(id, data)
}

export const getFileUrl = (record: any, filename: string) => {
  if (!record || !filename) return ''
  return pb.files.getURL(record, filename)
}
