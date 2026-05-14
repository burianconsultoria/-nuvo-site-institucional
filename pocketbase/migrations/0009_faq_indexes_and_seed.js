migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('faq_items')

    // Add indexes for optimized search
    col.addIndex('idx_faq_pergunta', false, 'pergunta', '')
    col.addIndex('idx_faq_resposta', false, 'resposta', '')
    app.save(col)

    // Seed standard FAQ data
    const seedData = [
      {
        pergunta: 'O que a Nuvo faz?',
        resposta:
          'A Nuvo é uma consultoria de tecnologia focada em impulsionar o crescimento de pequenas e médias empresas através de soluções de inteligência artificial, automação e sistemas sob medida.',
        categoria: 'Geral',
        ordem: 1,
      },
      {
        pergunta: 'Para quem é a Nuvo?',
        resposta:
          'Para PMEs brasileiras que faturam acima de R$ 1,5M e buscam otimizar processos, reduzir custos operacionais e escalar suas vendas com tecnologia.',
        categoria: 'Geral',
        ordem: 2,
      },
    ]

    for (const item of seedData) {
      try {
        app.findFirstRecordByData('faq_items', 'pergunta', item.pergunta)
      } catch (_) {
        const record = new Record(col)
        record.set('pergunta', item.pergunta)
        record.set('resposta', item.resposta)
        record.set('categoria', item.categoria)
        record.set('ordem', item.ordem)
        app.save(record)
      }
    }
  },
  (app) => {
    const col = app.findCollectionByNameOrId('faq_items')
    col.removeIndex('idx_faq_pergunta')
    col.removeIndex('idx_faq_resposta')
    app.save(col)

    try {
      const r1 = app.findFirstRecordByData('faq_items', 'pergunta', 'O que a Nuvo faz?')
      app.delete(r1)
    } catch (_) {}
    try {
      const r2 = app.findFirstRecordByData('faq_items', 'pergunta', 'Para quem é a Nuvo?')
      app.delete(r2)
    } catch (_) {}
  },
)
