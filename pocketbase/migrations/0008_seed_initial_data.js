migrate(
  (app) => {
    const faqCol = app.findCollectionByNameOrId('faq_items')
    if (app.countRecords('faq_items') === 0) {
      const f1 = new Record(faqCol)
      f1.set('pergunta', 'O que a Nuvo faz?')
      f1.set(
        'resposta',
        'A Nuvo automatiza processos de vendas e qualificação de leads através de fluxos inteligentes e análise de dados.',
      )
      f1.set('categoria', 'Geral')
      f1.set('ordem', 1)
      app.save(f1)

      const f2 = new Record(faqCol)
      f2.set('pergunta', 'Para quem é a Nuvo?')
      f2.set(
        'resposta',
        'Para empresas B2B que buscam escala e eficiência no comercial, diminuindo o tempo de qualificação e aumentando conversões.',
      )
      f2.set('categoria', 'Geral')
      f2.set('ordem', 2)
      app.save(f2)
    }

    const configCol = app.findCollectionByNameOrId('lead_scoring_config')
    if (app.countRecords('lead_scoring_config') === 0) {
      const cfg = new Record(configCol)
      cfg.set('fields', [
        { field_name: 'Faturamento', peso: 20, max_stars: 5 },
        { field_name: 'Processos Manuais', peso: 15, max_stars: 5 },
        { field_name: 'WhatsApp', peso: 25, max_stars: 5 },
        { field_name: 'Centralização', peso: 20, max_stars: 5 },
        { field_name: 'Escalabilidade', peso: 20, max_stars: 5 },
      ])
      app.save(cfg)
    }
  },
  (app) => {},
)
