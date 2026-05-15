migrate(
  (app) => {
    // 1. Update site_settings
    const siteSettings = app.findCollectionByNameOrId('site_settings')

    if (!siteSettings.fields.getByName('hero_background')) {
      siteSettings.fields.add(
        new FileField({
          name: 'hero_background',
          maxSelect: 1,
          maxSize: 52428800,
          mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm'],
        }),
      )
    }

    if (!siteSettings.fields.getByName('hero_background_type')) {
      siteSettings.fields.add(
        new SelectField({
          name: 'hero_background_type',
          maxSelect: 1,
          values: ['image', 'video'],
        }),
      )
    }

    app.save(siteSettings)

    // 2. Create site_content
    let siteContent
    try {
      siteContent = app.findCollectionByNameOrId('site_content')
    } catch (e) {
      siteContent = new Collection({
        name: 'site_content',
        type: 'base',
        listRule: '',
        viewRule: '',
        createRule: "@request.auth.id != ''",
        updateRule: "@request.auth.id != ''",
        deleteRule: "@request.auth.id != ''",
        fields: [
          { name: 'key', type: 'text', required: true },
          { name: 'label', type: 'text', required: true },
          { name: 'value', type: 'editor' },
          { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
          { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
        ],
        indexes: [],
      })
      app.save(siteContent)
    }

    // 3. Seed site_content
    const contentToSeed = [
      {
        key: 'hero_title',
        label: 'Título do Hero',
        value: '<p>Sua empresa cresce mais rápido do que consegue se organizar?</p>',
      },
      {
        key: 'hero_subtitle',
        label: 'Subtítulo do Hero',
        value:
          '<p>Supere o caos operacional com processos inteligentes, automação e agentes de IA.</p>',
      },
      {
        key: 'hero_description',
        label: 'Descrição do Hero',
        value:
          '<p>A Nuvo ajuda sua empresa a superar o caos operacional através de automação, processos inteligentes e sistemas sob medida. Liberte seu tempo para focar no que realmente importa: o crescimento do seu negócio.</p>',
      },
    ]

    for (const item of contentToSeed) {
      try {
        app.findFirstRecordByData('site_content', 'key', item.key)
      } catch (_) {
        const record = new Record(siteContent)
        record.set('key', item.key)
        record.set('label', item.label)
        record.set('value', item.value)
        app.save(record)
      }
    }

    // 4. Ensure site_settings record exists
    try {
      const records = app.findRecordsByFilter('site_settings', '', '', 1, 0)
      if (records.length === 0) {
        const record = new Record(siteSettings)
        app.save(record)
      }
    } catch (e) {}
  },
  (app) => {
    const siteSettings = app.findCollectionByNameOrId('site_settings')
    siteSettings.fields.removeByName('hero_background')
    siteSettings.fields.removeByName('hero_background_type')
    app.save(siteSettings)

    try {
      const siteContent = app.findCollectionByNameOrId('site_content')
      app.delete(siteContent)
    } catch (e) {}
  },
)
