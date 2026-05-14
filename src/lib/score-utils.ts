export function calculateLeadScore(configFields: any[], responses: Record<string, number>) {
  let score = 0
  let maxPossible = 0

  for (const field of configFields) {
    const val = responses[field.field_name] || 1 // Default to 1 star if empty
    maxPossible += field.peso
    score += field.peso * (val / field.max_stars)
  }

  const percentage = maxPossible > 0 ? (score / maxPossible) * 100 : 0
  let score_class = 'D'
  if (percentage >= 80) score_class = 'A'
  else if (percentage >= 60) score_class = 'B'
  else if (percentage >= 40) score_class = 'C'

  return { score: Math.round(percentage), score_class }
}
