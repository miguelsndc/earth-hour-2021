import { HighlightSection, Hero, Spacer, MainLink } from '../../components';

export default function Index() {
  return (
    <div>
      <Hero
        imgSrc='/images/protest.webp'
        title='10 Coisas que podem ser feitas'
        description='10 coisas que você pode fazer para ajudar a salvar nosso planeta.'
        alt='Cartaz de protesto ambientalista'
      />

      <Spacer />
      <HighlightSection imgSrc='/images/voice.webp' alt='Pessoas em protesto'>
        <h1>1. Use sua voz.</h1>
        <p>
          Nós somos uma das primeiras gerações a saber que estamos destruindo
          nosso mundo, e podemos ser os últimos que podem fazer alguma coisa.
          Falar sobre é uma das coisas mais poderosas que você pode fazer,
          especialmente falando para as pessoas <strong>certas</strong>. Contate
          as empresas cujos produtos você consome, procure saber de onde eles
          vem e como são produzidos. Use as redes sociais - essa é uma das
          melhores formas de fazê-las te ouvir.
          <br />
          Não é só sobre falar com quem está no comando, converse com seus
          amigos, seus vizinhos, fale com seus colegas de trabalho, fale com
          todos, e faça sua voz ser ouvida.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/keep-yourself-informed.webp'
        alt='Homens utilizando celular'
        reversed
      >
        <h1>2. Mantenha-se informado(a).</h1>
        <p>
          Uma das melhores coisas que você pode fazer é se manter informado -
          quanto mais você souber, melhor. Isso te deixa melhor preparado para
          ter as conversas com quem você quer influenciar. Mantenha-se atento
          aos fatos, atualizado em relação as últimas notícias.
          <br />
          Nós temos o mundo na palma das nossas mãos, então procure por pessoas
          influentes e pesquise organizações que estão trabalhando para fazer do
          mundo um lugar melhor.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/politics.webp'
        alt='Mulher falando no megafone'
      >
        <h1>3. Seja Politicamente engajado.</h1>
        <p>
          Todas as pessoas acima dos 18 anos podem votar. Essa é uma
          oportunidade para votar em alguém que represente você e seus ideais, e
          que irá fazer do meio-ambiente uma prioridade.
          <br />
          Ser politicamente engajado não se limita ao voto, e certamente não é
          limitado pela sua idade. Todos os anos mais e mais jovens estão
          trabalhando juntos para mostrar aos que estão no poder que eles querem
          mudança.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/riding-bike.webp'
        alt='Pessoa andando de bicicleta na rua'
        reversed
      >
        <h1>4. Use meios de transporte sustentáveis.</h1>
        <p>
          Transporte é um dos setores mais poluentes. sendo, inquestionavelmente
          responsável por grande parte da emissão de gases tóxicos. Por isso,
          uma das formas mais eficientes de diminuir o impacto causado no
          ambiente é utilizando meios de transporte sustentáveis. Sempre que
          puder, escolha uma forma mais sustentável de ir de A até B, usando uma
          bicicleta, ou indo a pé.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/organic.webp'
        alt='Mesa de alimentos orgânicos'
      >
        <h1>5. Coma de forma sustentável.</h1>
        <p>
          A Produção de alimentos é o pivô da extinção da vida selvagem. O que
          nós comemos contribui para cerca de um quarto da emissão de gases do
          efeito estufa, e é responsável por cerca de 60% da perda da
          biodiversidade global.
          <br />A Pecuária necessita de espaço e quantidades enormes de água e
          comida. Hoje, uma das maiores causas da perda de florestas é a
          expansão dessas fazendas. Migrar de uma dieta baseada em carne, para
          uma dieta baseada em legumes e verduras pode reduzir seu impacto no
          meio-ambiente, Além de diminuir seus custos com alimentação.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection imgSrc='/images/waste.webp' alt='Lixo' reversed>
        <h1>6. Reduza seu desperdício.</h1>
        <p>
          Precisamos tornar o desperdício de nossos recursos inaceitável em
          todos os aspectos de nossa vida. Cada produto que compramos tem uma
          pegada ecológica e pode acabar em aterros sanitários. O impacto da
          poluição do plástico em nossos oceanos está se tornando cada vez mais
          claro, tendo impactos drásticos na vida marinha.
          <br />
          Reciclar o que podemos reduz a quantidade de novos materiais qu e
          estamos fabricando, e reutilizar certos produtos é uma maneira
          criativa de reduzir o desperdício, como transformar uma lata velha em
          um vaso de plantas, as possibilidades são infinitas!
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/organic.webp'
        alt='Mesa de alimentos orgânicos'
      >
        <h1>7. Saiba o que está comprando.</h1>
        <p>
          Todos nós podemos fazer mais para ser mais conscientes sobre o que
          compramos e de onde compramos. Consumir menos vai te fazer economizar,
          reduzir o desperdício e melhorar sua pegada ecológica. Viver um estilo
          de vida menos consumista pode beneficiar você e nosso planeta. <br />
          Use seu poder de compra e certifique-se de que seu dinheiro está indo
          para uma mudança positiva. Ao apoiar produtos ecológicos que são menos
          prejudiciais ao meio ambiente, você está incentivando as empresas a
          adquirir e produzir de forma sustentável.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/ong.webp'
        alt='Homem dando água a elefante'
        reversed
      >
        <h1>8. Doe.</h1>
        <p>
          Existem centenas de organizações não governamentais por todo o mundo
          realizando trabalhos de conscientização em relação às mudanças
          climáticas, preservação e fiscalização do meio-ambiente e da vida
          selvagem. Por isso, elas precisam da sua ajuda para continuar
          realizando esse trabalho, então doe, seu suporte será mais do que
          bem-vindo.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/volunteering.webp'
        alt='Criança plantando árvore'
      >
        <h1>9. Se Voluntarie.</h1>
        <p>
          Se voluntariar pode ser difícil e caro se você não souber onde
          procurar. Mas não precisa ser tão difícil fazer o bem. Frequentemente,
          reservas naturais, parques locais ou ong's da sua região procuram
          voluntários regulares, que podem lhe dar experiência prática de
          conservação, bem como ajudar a restaurar a natureza em sua área local.
          <br />
          Se voluntariar é algo recompensador, que faz bem para a alma.
        </p>
      </HighlightSection>
      <Spacer />
      <HighlightSection
        imgSrc='/images/earth.webp'
        alt='Foto de satélite da Terra'
        reversed
      >
        <h1>10. Participe da Hora do Planeta 2021.</h1>
        <p>
          Esse ano temos uma oportunidade única de mudança, de chamar atenção
          dos líderes globais para a questão ambiental. Não desperdice essa
          oportunidade, convença seus amigos e família a fazerem parte, seja o
          pivô da mudança no lugar onde você vive.
        </p>
        <MainLink linkTo='/como-participar'>Participar</MainLink>
      </HighlightSection>
    </div>
  );
}
