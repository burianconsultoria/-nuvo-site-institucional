import { ScoringConfig } from '@/services/api'

export function calculateLeadScore(ratings: Record<string, number>, config: ScoringConfig | null) {
  if (!config || !config.fields || config.fields.length === 0) {
    return { score: 0, score_class: 'D' }
  }

  let totalScore = 0
  let totalWeight = 0

  config.fields.forEach((field) => {
    const rating = ratings[field.field_name] || 0
    const normalized = (rating / field.max_stars) * field.peso
    totalScore += normalized
    totalWeight += field.peso
  })

  // Normalize to 0-100 just in case weights don't sum to 100 perfectly
  const finalScore = totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) : 0

  let score_class = 'D'
  if (finalScore >= 80) score_class = 'A'
  else if (finalScore >= 60) score_class = 'B'
  else if (finalScore >= 40) score_class = 'C'

  return { score: finalScore, score_class }
}
