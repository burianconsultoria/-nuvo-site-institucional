migrate(
  (app) => {
    const collection = new Collection({
      name: 'form_settings',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        {
          name: 'type',
          type: 'select',
          required: true,
          values: ['text', 'email', 'tel', 'select', 'textarea'],
          maxSelect: 1,
        },
        { name: 'required', type: 'bool' },
        { name: 'order', type: 'number' },
        { name: 'options', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)

    const col = app.findCollectionByNameOrId('form_settings')
    const defaults = [
      {
        name: 'nome',
        label: 'Nome Completo',
        fieldType: 'text',
        required: true,
        order: 1,
        options: null,
      },
      {
        name: 'email',
        label: 'E-mail Corporativo',
        fieldType: 'email',
        required: true,
        order: 2,
        options: null,
      },
      {
        name: 'empresa',
        label: 'Empresa',
        fieldType: 'text',
        required: true,
        order: 3,
        options: null,
      },
      {
        name: 'telefone',
        label: 'Telefone / WhatsApp',
        fieldType: 'tel',
        required: true,
        order: 4,
        options: null,
      },
      {
        name: 'segmento',
        label: 'Segmento de Atuação',
        fieldType: 'select',
        required: true,
        order: 5,
        options: [
          'Tecnologia',
          'Varejo & E-commerce',
          'Serviços',
          'Indústria',
          'Saúde & Bem-estar',
          'Educação',
          'Outro',
        ],
      },
    ]

    for (const d of defaults) {
      const record = new Record(col)
      record.set('name', d.name)
      record.set('label', d.label)
      record.set('type', d.fieldType)
      record.set('required', d.required)
      record.set('order', d.order)
      record.set('options', d.options)
      app.save(record)
    }
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('form_settings')
    app.delete(collection)
  },
)
