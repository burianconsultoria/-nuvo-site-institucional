import pb from '@/lib/pocketbase/client'

export interface SiteSettings {
  id: string
  logo: string
  favicon: string
  hero_background: string
  hero_background_type: 'image' | 'video' | ''
}

export interface SiteContent {
  id: string
  key: string
  label: string
  value: string
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const records = await pb.collection('site_settings').getFullList<SiteSettings>()
    if (records.length > 0) {
      return records[0]
    }
    const created = await pb.collection('site_settings').create<SiteSettings>({})
    return created
  } catch (error) {
    console.error('Error fetching site settings', error)
    return null
  }
}

export async function updateSiteSettings(id: string, data: FormData): Promise<SiteSettings> {
  return await pb.collection('site_settings').update<SiteSettings>(id, data)
}

export function getFileUrl(record: any, fileName: string): string {
  if (!fileName) return ''
  return pb.files.getURL(record, fileName)
}

export async function getSiteContent(): Promise<SiteContent[]> {
  try {
    return await pb.collection('site_content').getFullList<SiteContent>()
  } catch (error) {
    console.error('Error fetching site content', error)
    return []
  }
}
