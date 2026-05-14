migrate(
  (app) => {
    const leadsId = app.findCollectionByNameOrId('leads').id
    const collection = new Collection({
      name: 'roi_responses',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        {
          name: 'lead_id',
          type: 'relation',
          required: true,
          collectionId: leadsId,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'dados', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    app.delete(app.findCollectionByNameOrId('roi_responses'))
  },
)
