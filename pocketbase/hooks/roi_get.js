routerAdd('GET', '/backend/v1/roi/{id}', (e) => {
  const id = e.request.pathValue('id')
  try {
    const record = $app.findRecordById('roi_responses', id)
    return e.json(200, record)
  } catch (err) {
    return e.json(404, { error: 'Relatório não encontrado' })
  }
})
