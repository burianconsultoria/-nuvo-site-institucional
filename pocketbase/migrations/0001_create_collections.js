migrate(
  (app) => {
    // 1. Leads
    const leads = new Collection({
      name: 'leads',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'user_id', type: 'relation', collectionId: '_pb_users_auth_', maxSelect: 1 },
        { name: 'email', type: 'email', required: true },
        { name: 'empresa', type: 'text' },
        { name: 'telefone', type: 'text' },
        { name: 'segmento', type: 'text' },
        { name: 'score_class', type: 'text' },
        { name: 'score', type: 'number' },
        { name: 'score_data', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(leads)

    // 2. Lead Scoring Config
    const scoringConfig = new Collection({
      name: 'lead_scoring_config',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'fields', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(scoringConfig)

    // 3. Quiz Responses
    const quizResponses = new Collection({
      name: 'quiz_responses',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'lead_id', type: 'relation', required: true, collectionId: leads.id, maxSelect: 1 },
        { name: 'respostas', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(quizResponses)

    // 4. ROI Responses
    const roiResponses = new Collection({
      name: 'roi_responses',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'lead_id', type: 'relation', required: true, collectionId: leads.id, maxSelect: 1 },
        { name: 'dados', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(roiResponses)

    // 5. Contacts
    const contacts = new Collection({
      name: 'contacts',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'nome', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'empresa', type: 'text' },
        { name: 'telefone', type: 'text' },
        { name: 'segmento', type: 'text' },
        { name: 'mensagem', type: 'text' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(contacts)

    // 6. FAQ Items
    const faqItems = new Collection({
      name: 'faq_items',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'pergunta', type: 'text' },
        { name: 'resposta', type: 'text' },
        { name: 'categoria', type: 'text' },
        { name: 'ordem', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(faqItems)
  },
  (app) => {
    const collections = [
      'faq_items',
      'contacts',
      'roi_responses',
      'quiz_responses',
      'lead_scoring_config',
      'leads',
    ]
    collections.forEach((name) => {
      try {
        const col = app.findCollectionByNameOrId(name)
        app.delete(col)
      } catch (_) {}
    })
  },
)
