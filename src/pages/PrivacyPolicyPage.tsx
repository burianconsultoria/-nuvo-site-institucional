export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl animate-fade-in-up">
      <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-10 text-foreground tracking-tight">
        Política de Privacidade
      </h1>

      <div className="prose prose-slate prose-lg max-w-none text-muted-foreground prose-headings:font-heading prose-headings:text-foreground">
        <p>
          A Nuvo valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais
          em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
        </p>

        <h3>Coleta e Uso de Dados</h3>
        <p>
          Coletamos informações estritamente necessárias para a prestação de nossos serviços de
          tecnologia, incluindo nome, e-mail, telefone e dados institucionais da empresa. Estes
          dados são utilizados exclusivamente para nos comunicarmos sobre nossos projetos, prestar
          suporte técnico adequado e fornecer as soluções tecnológicas solicitadas de maneira
          eficiente e personalizada.
        </p>

        <h3>Comunicações Automatizadas e Consentimento</h3>
        <p>
          <strong>
            É nossa política estrita operar sem email automático de marketing, vendas ou newsletters
            sem o seu consentimento prévio, livre e explícito (opt-in).
          </strong>{' '}
          Valorizamos a sua caixa de entrada e você mantém o controle total sobre as comunicações
          que deseja receber. Você pode cancelar a inscrição (opt-out) a qualquer momento através de
          links fornecidos nos próprios e-mails ou entrando em contato diretamente conosco.
        </p>

        <h3>Compartilhamento de Informações</h3>
        <p>
          A Nuvo não vende, aluga ou compartilha seus dados pessoais com terceiros para fins de
          marketing. O compartilhamento de informações ocorrerá apenas com parceiros técnicos
          essenciais para a execução do serviço contratado, sempre sob rigorosos acordos de
          confidencialidade, ou quando exigido por obrigações legais.
        </p>

        <h3>Segurança dos Dados</h3>
        <p>
          Empregamos medidas técnicas e organizacionais avançadas para proteger seus dados contra
          acessos não autorizados, perdas, destruição ou alterações. Utilizamos criptografia e
          controles de acesso rigorosos em nossos bancos de dados.
        </p>

        <h3>Seus Direitos como Titular</h3>
        <p>De acordo com a LGPD, você possui o direito de:</p>
        <ul>
          <li>Confirmar a existência de tratamento de seus dados;</li>
          <li>Acessar os dados mantidos por nós;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Revogar o consentimento previamente fornecido.</li>
        </ul>

        <p>
          Para exercer quaisquer destes direitos ou se tiver dúvidas sobre as nossas práticas de
          privacidade, entre em contato através de nossa página de Contato ou pelo e-mail de suporte
          institucional.
        </p>

        <p className="text-sm mt-12 opacity-70">Última atualização: Maio de 2026</p>
      </div>
    </div>
  )
}
