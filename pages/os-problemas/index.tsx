import { HighlightSection } from '../../components/highlight';
import { TextSection } from '../../components/text-section';
import { MainLink } from '../../components/main-link';
import { Divider } from '../../components/divider';
import { Hero } from '../../components/hero';

export const config = { amp: true };

export default function index() {
  return (
    <div>
      <Hero
        imgSrc='/images/fire.webp'
        title='O que de fato é a mudança climática?'
        description='Aprenda mais sobre os problemas que o planeta está enfrentando, nossos
          desafios e o que eles representam.'
      />

      <TextSection>
        <h1>O que é a Mudança Climática ?</h1>
        <p>
          {' '}
          A Ciência é clara, a Mudança climática é real e está acontecendo neste
          momento. Ela requer ações imediatas para prevenir os piores efeitos
          que se pode ter nas pessoas e na vida selvagem ao redor do mundo. Nós
          sabemos que a temperatura do planeta aumentou cerca de 1ºC no último
          século. Existe um acordo global, que os aumentos de temperatura
          precisam ser mantidos abaixo de 2ºC. Porém estudos sugerem que estamos
          no caminho de aumentos de cerca 4ºC ou mais.
          <br />
          <br />
          Temos visto ultimamente uma série de desenvolvimentos indesejados:
        </p>
        <ul>
          <li>
            16 dos 17 recordes de anos mais quentes ocorreram desde 2001, sendo
            2016 o ano mais quente até agora.
          </li>
          <li>
            Os níveis atuais de concentração de gases do efeito estufa são sem
            precedentes nos últimos 800 mil anos.
          </li>
          <li>
            Antropoceno, no qual a atividade humana é considerada a influência
            dominante no meio ambiente, no clima e na ecologia da Terra.
          </li>
        </ul>
        <p>
          Conforme o planeta aumentar de temperatura, padrões climáticos
          mudarão. Tempos extremos e imprevisíveis vão se tornar mais e mais
          comuns ao redor do mundo, com alguns lugares mais quentes, mais secos,
          com o aumento do nível do mar e o derretimento das geleiras, haverão
          impactos enormes em toda a vida na terra.
        </p>
      </TextSection>
      <Divider />
      <HighlightSection imgSrc='/images/polution.webp'>
        <h1>O que causa o Aquecimento Global?</h1>
        <p>
          <ul>
            <li>Gado Bovino</li>
            <li>Desmatamento</li>
            <li>Queimadas</li>
            <li>Uso de Combustíveis Fósseis</li>
          </ul>
        </p>
      </HighlightSection>
      <Divider />
      <HighlightSection imgSrc='/images/meltedIce.webp'>
        <h1>Como você pode ajudar ?</h1>
        <p>
          Os desafios que estamos enfrentando só aumentam e parecem
          assustadores, mas todos podemos fazer alguma coisa.
        </p>
        <MainLink linkTo='10-coisas-que-podem-ser-feitas'>Ler Mais</MainLink>
      </HighlightSection>
    </div>
  );
}
