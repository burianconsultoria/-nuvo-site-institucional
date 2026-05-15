migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('site_content')

    const seeds = [
      {
        key: 'sobre_hero_title',
        label: 'Título Hero (Sobre)',
        value: 'Sobre a Nuvo',
        page: 'sobre',
      },
      {
        key: 'sobre_hero_desc',
        label: 'Descrição Hero (Sobre)',
        value:
          '<p>Nossa missão é resgatar o tempo dos empreendedores e suas equipes. Acreditamos que a tecnologia deve ser um motor de libertação, não uma fonte de dor de cabeça.</p>',
        page: 'sobre',
      },
      {
        key: 'sobre_hero_bg',
        label: 'Imagem de Fundo (Sobre)',
        value: '',
        page: 'sobre',
        media_type: 'image',
      },

      {
        key: 'privacy_policy_text',
        label: 'Texto Política de Privacidade',
        value:
          '<p>A Nuvo valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).</p>',
        page: 'politicas',
      },
      {
        key: 'terms_of_use_text',
        label: 'Texto Termos de Uso',
        value:
          '<p>Bem-vindo aos Termos de Uso da Nuvo. Ao acessar nosso site, utilizar nossas calculadoras (ROI, Diagnósticos) e contratar nossos serviços, você concorda expressamente com as condições estabelecidas neste documento.</p>',
        page: 'politicas',
      },

      {
        key: 'footer_desc',
        label: 'Descrição do Rodapé',
        value:
          'Transformando a eficiência dos seus negócios com tecnologia avançada, automação de processos e Inteligência Artificial.',
        page: 'geral',
      },
    ]

    for (const s of seeds) {
      try {
        app.findFirstRecordByData('site_content', 'key', s.key)
      } catch (_) {
        const record = new Record(col)
        record.set('key', s.key)
        record.set('label', s.label)
        record.set('value', s.value)
        record.set('page', s.page)
        if (s.media_type) {
          record.set('media_type', s.media_type)
        }
        app.save(record)
      }
    }
  },
  (app) => {
    // down
  },
)
