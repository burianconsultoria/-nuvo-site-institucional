import pb from '@/lib/pocketbase/client'

export interface SiteSettings {
  id: string
  logo: string
  favicon: string
  collectionId: string
  collectionName: string
}

export const getSiteSettings = async (): Promise<SiteSettings | null> => {
  try {
    const records = await pb.collection('site_settings').getFullList<SiteSettings>()
    return records[0] || null
  } catch (e) {
    return null
  }
}

export const updateSiteSettings = async (id: string, data: FormData) => {
  return pb.collection('site_settings').update<SiteSettings>(id, data)
}

export const getFileUrl = (
  record: Pick<SiteSettings, 'id' | 'collectionId' | 'collectionName'>,
  fileName: string,
) => {
  if (!fileName) return ''
  return pb.files.getURL(record, fileName)
}
