migrate(
  (app) => {
    // Seed User
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'bruno@burian.com.br')
    } catch (_) {
      const record = new Record(users)
      record.setEmail('bruno@burian.com.br')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Admin')
      app.save(record)
    }

    // Seed FAQ
    const faq = app.findCollectionByNameOrId('faq_items')
    try {
      app.findFirstRecordByData('faq_items', 'pergunta', 'O que a Nuvo faz?')
    } catch (_) {
      const r1 = new Record(faq)
      r1.set('pergunta', 'O que a Nuvo faz?')
      r1.set(
        'resposta',
        'A Nuvo automatiza processos de vendas e qualificação de leads através de formulários dinâmicos e inteligência.',
      )
      r1.set('categoria', 'Geral')
      r1.set('ordem', 1)
      app.save(r1)

      const r2 = new Record(faq)
      r2.set('pergunta', 'Para quem é a Nuvo?')
      r2.set(
        'resposta',
        'Para empresas B2B que buscam escala e eficiência na jornada comercial, filtrando e priorizando seus melhores contatos.',
      )
      r2.set('categoria', 'Geral')
      r2.set('ordem', 2)
      app.save(r2)
    }

    // Seed Lead Scoring Config
    const scoringConfig = app.findCollectionByNameOrId('lead_scoring_config')
    try {
      app.findFirstRecordByFilter('lead_scoring_config', 'created > "2000-01-01"')
    } catch (_) {
      const record = new Record(scoringConfig)
      record.set('fields', [
        { field_name: 'Faturamento', peso: 20, max_stars: 5 },
        { field_name: 'Processos Manuais', peso: 15, max_stars: 5 },
        { field_name: 'WhatsApp', peso: 25, max_stars: 5 },
        { field_name: 'Centralização', peso: 20, max_stars: 5 },
        { field_name: 'Escalabilidade', peso: 20, max_stars: 5 },
      ])
      app.save(record)
    }
  },
  (app) => {
    // Irreversible or not needed to down seed data fully in standard usage
  },
)
