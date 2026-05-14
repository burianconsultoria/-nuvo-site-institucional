export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl animate-fade-in-up">
      <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-10 text-foreground tracking-tight">
        Termos de Uso
      </h1>

      <div className="prose prose-slate prose-lg max-w-none text-muted-foreground prose-headings:font-heading prose-headings:text-foreground">
        <p>
          Bem-vindo aos Termos de Uso da Nuvo. Ao acessar nosso site, utilizar nossas calculadoras
          (ROI, Diagnósticos) e contratar nossos serviços, você concorda expressamente com as
          condições estabelecidas neste documento. Recomendamos a leitura atenta de todas as
          cláusulas a seguir.
        </p>

        <h3>1. Serviços Oferecidos</h3>
        <p>
          A Nuvo é uma empresa focada em fornecer soluções de tecnologia, automação de processos,
          agentes de Inteligência Artificial, implantação de CRMs e desenvolvimento de sistemas sob
          medida para otimizar operações e elevar a eficiência corporativa de nossos clientes.
        </p>

        <h3>2. Propriedade Intelectual (IP) e Entregáveis</h3>
        <p>A inovação e o design técnico são o coração do nosso negócio. Sendo assim:</p>
        <ul>
          <li>
            Todos os códigos-fonte, algoritmos, designs de interface, metodologias e arquiteturas
            desenvolvidos pela Nuvo permanecem de propriedade intelectual exclusiva da Nuvo durante
            toda a fase de planejamento, desenvolvimento e prototipação.
          </li>
          <li>
            <strong>
              A propriedade intelectual (IP) dos projetos desenvolvidos sob medida é transferida
              para o cliente de forma definitiva apenas e exclusivamente sob a cláusula de IP
              ownership após pagamento integral dos valores acordados no respectivo contrato de
              prestação de serviços.
            </strong>
          </li>
          <li>
            O uso de bibliotecas de código aberto e integrações de terceiros seguirá as licenças
            originais dos respectivos criadores.
          </li>
        </ul>

        <h3>3. Responsabilidades do Cliente</h3>
        <p>
          Para garantir a excelência nas entregas, o cliente compromete-se a fornecer todas as
          informações de negócio, aprovações, assets da marca e acessos aos sistemas necessários
          para a execução adequada dos serviços. Além disso, é responsabilidade do cliente realizar
          os pagamentos pontualmente conforme os prazos estipulados nos aditivos contratuais.
        </p>

        <h3>4. Limitação de Responsabilidade</h3>
        <p>
          A Nuvo empenha-se em entregar produtos da mais alta qualidade, seguindo as melhores
          práticas de segurança e estabilidade do mercado. No entanto, declaramos que:
        </p>
        <ul>
          <li>
            Não nos responsabilizamos por perdas indiretas, lucros cessantes, perda de dados ou
            interrupções de negócios decorrentes do uso inadequado de nossos sistemas após a entrega
            técnica.
          </li>
          <li>
            Após o período de garantia ou encerramento do contrato de suporte técnico, a manutenção
            e a adequação de sistemas de terceiros integrados ao projeto são de responsabilidade do
            cliente.
          </li>
        </ul>

        <h3>5. Ferramentas de Diagnóstico</h3>
        <p>
          As calculadoras de ROI e avaliações de eficiência disponibilizadas gratuitamente em nosso
          site têm caráter estimativo e educacional. Os resultados apresentados não configuram
          garantia absoluta de retorno financeiro, uma vez que a execução depende de variáveis
          operacionais intrínsecas a cada negócio.
        </p>

        <h3>6. Atualizações dos Termos</h3>
        <p>
          Estes termos de uso podem ser atualizados periodicamente para refletir mudanças
          legislativas, evoluções em nossos serviços ou nas regras de mercado. O uso contínuo das
          soluções, do site ou a manutenção de contratos ativos com a Nuvo após as alterações
          constitui a aceitação dos novos termos.
        </p>

        <p className="text-sm mt-12 opacity-70">Última atualização: Maio de 2026</p>
      </div>
    </div>
  )
}
