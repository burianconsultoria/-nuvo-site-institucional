onRecordCreate((e) => {
  const record = e.record
  const rawData = record.get('score_data') || {}

  try {
    const configRecord = $app.findFirstRecordByFilter('lead_scoring_config', '1=1')
    const config = JSON.parse(configRecord.getString('fields') || '[]')

    let totalScore = 0
    let totalWeight = 0
    const detailedData = []

    config.forEach((field) => {
      const stars = Number(rawData[field.field_name]) || 0
      const weight = Number(field.peso) || 1
      const maxStars = Number(field.max_stars) || 5

      const normalized = (stars / maxStars) * weight
      totalScore += normalized
      totalWeight += weight

      detailedData.push({
        question: field.field_name,
        stars: stars,
        weight: weight,
      })
    })

    let finalScore = totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) : 0
    if (finalScore < 0) finalScore = 0
    if (finalScore > 100) finalScore = 100

    let scoreClass = 'D'
    if (finalScore >= 80) scoreClass = 'A'
    else if (finalScore >= 60) scoreClass = 'B'
    else if (finalScore >= 40) scoreClass = 'C'

    record.set('score', finalScore)
    record.set('score_class', scoreClass)
    record.set('score_data', detailedData)
  } catch (err) {
    let score = record.getInt('score')
    if (score < 0) score = 0
    if (score > 100) score = 100

    let scoreClass = 'D'
    if (score >= 80) scoreClass = 'A'
    else if (score >= 60) scoreClass = 'B'
    else if (score >= 40) scoreClass = 'C'

    record.set('score', score)
    record.set('score_class', scoreClass)
  }

  e.next()
}, 'leads')
