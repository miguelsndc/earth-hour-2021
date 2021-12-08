import {
  Hero,
  Spacer,
  HighlightSection,
  MainLink,
  YoutubeLiveSection,
} from '../../components/';

export default function index() {
  return (
    <div>
      <Hero
        imgSrc='/images/preserved.webp'
        title='Saiba como Participar da Hora do Planeta 2021.'
        description='Saiba como participar do evento que pode mudar a nossa forma de viver
          nos próximos anos.'
      />
      <Spacer />
      <HighlightSection imgSrc='/images/multiple-candles.webp'>
        <h1>Desligue suas luzes.</h1>
        <p>
          Desligue as luzes da sua casa, convença as pessoas ao seu redor a
          fazer o mesmo, esta é a principal forma de participar da Hora do
          Planeta, chamar a atenção para a situação ambiental atual é o nosso
          objetivo.
        </p>
      </HighlightSection>
      <Spacer />
      <YoutubeLiveSection />
      <Spacer />
      <HighlightSection imgSrc='/images/happiness.webp'>
        <h1>Mude seus hábitos.</h1>
        <p>
          Muito mais do que o festival, nosso movimento busca um mundo melhor,
          por isso, não se limite ao festival, leve isso pra sua vida, faça a
          diferença, e para fazer a diferença, a mudança deve começar de você
          por isso, veja 10 coisas que podem fazer a diferença no impacto da sua
          pegada ecológica.
        </p>
        <MainLink linkTo='/10-coisas-que-podem-ser-feitas'>
          Aprender Mais
        </MainLink>
      </HighlightSection>
    </div>
  );
}
