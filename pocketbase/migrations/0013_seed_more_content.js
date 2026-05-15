migrate(
  (app) => {
    const contentToSeed = [
      {
        key: 'home_hero_title',
        label: 'Home - Título do Hero',
        value: 'Sua empresa cresce mais rápido do que consegue se organizar?',
      },
      {
        key: 'home_hero_subtitle',
        label: 'Home - Subtítulo do Hero',
        value: 'Supere o caos operacional com processos inteligentes, automação e agentes de IA.',
      },
      {
        key: 'home_hero_description',
        label: 'Home - Descrição do Hero',
        value:
          'A Nuvo ajuda sua empresa a superar o caos operacional através de automação, processos inteligentes e sistemas sob medida. Liberte seu tempo para focar no que realmente importa: o crescimento do seu negócio.',
      },
      {
        key: 'home_pain_title',
        label: 'Home - Título Dores',
        value: 'Reconhece algum destes problemas?',
      },
      {
        key: 'home_pain_subtitle',
        label: 'Home - Subtítulo Dores',
        value:
          'Descubra como podemos resolver os principais gargalos que impedem o seu crescimento.',
      },
      { key: 'home_solutions_title', label: 'Home - Título Soluções', value: 'Nossas Soluções' },
      {
        key: 'home_solutions_subtitle',
        label: 'Home - Subtítulo Soluções',
        value: 'Tecnologia, processos e inteligência artificial para modernizar a sua operação.',
      },
      { key: 'about_title', label: 'Sobre - Título Principal', value: 'Sobre a Nuvo' },
      {
        key: 'about_description',
        label: 'Sobre - Descrição',
        value: 'Somos especialistas em transformação digital e automação.',
      },
      { key: 'contact_title', label: 'Contato - Título', value: 'Fale Conosco' },
      {
        key: 'contact_description',
        label: 'Contato - Descrição',
        value: 'Preencha o formulário abaixo para agendar seu diagnóstico gratuito.',
      },
    ]

    const col = app.findCollectionByNameOrId('site_content')

    for (const item of contentToSeed) {
      try {
        app.findFirstRecordByData('site_content', 'key', item.key)
      } catch (_) {
        const record = new Record(col)
        record.set('key', item.key)
        record.set('label', item.label)
        record.set('value', item.value)
        app.save(record)
      }
    }
  },
  (app) => {
    // no-op
  },
)
