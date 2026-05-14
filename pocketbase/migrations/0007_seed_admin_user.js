migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'bruno@burian.com.br')
      return
    } catch (_) {}

    const record = new Record(users)
    record.setEmail('bruno@burian.com.br')
    record.setPassword('Skip@Pass')
    record.setVerified(true)
    record.set('name', 'Admin Nuvo')
    app.save(record)
  },
  (app) => {
    try {
      const record = app.findAuthRecordByEmail('_pb_users_auth_', 'bruno@burian.com.br')
      app.delete(record)
    } catch (_) {}
  },
)
