import pb from '@/lib/pocketbase/client'

export interface ScoringField {
  field_name: string
  peso: number
  max_stars: number
}

export interface ScoringConfig {
  id: string
  fields: ScoringField[]
}

export const getScoringConfig = async (): Promise<ScoringConfig | null> => {
  const records = await pb.collection('lead_scoring_config').getFullList()
  return (records[0] as unknown as ScoringConfig) || null
}

export const updateScoringConfig = async (id: string, fields: ScoringField[]) => {
  return pb.collection('lead_scoring_config').update(id, { fields })
}

export const createLead = async (data: any) => {
  return pb.collection('leads').create(data)
}

export const getLeads = async () => {
  return pb.collection('leads').getFullList({ sort: '-created' })
}

export const createQuizResponse = async (data: any) => {
  return pb.collection('quiz_responses').create(data)
}

export const createRoiResponse = async (data: any) => {
  return pb.collection('roi_responses').create(data)
}

export const createContact = async (data: any) => {
  return pb.collection('contacts').create(data)
}

export const getFaqs = async () => {
  return pb.collection('faq_items').getFullList({ sort: 'ordem' })
}
