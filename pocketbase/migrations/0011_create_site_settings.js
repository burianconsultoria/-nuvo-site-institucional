migrate(
  (app) => {
    const collection = new Collection({
      name: 'site_settings',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        {
          name: 'logo',
          type: 'file',
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/jpeg', 'image/png', 'image/svg+xml'],
        },
        {
          name: 'favicon',
          type: 'file',
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/x-icon', 'image/png', 'image/svg+xml'],
        },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)

    const record = new Record(collection)
    app.save(record)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('site_settings')
    app.delete(collection)
  },
)
