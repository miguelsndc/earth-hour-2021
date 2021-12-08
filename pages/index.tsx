import { Divider } from '../components/divider';
import { Hero } from '../components/hero';
import { HighlightSection } from '../components/highlight';
import { MainLink } from '../components/main-link';
import { TextSection } from '../components/text-section';
import { YoutubeLiveSection } from '../components/live-section';

export const config = { amp: true };

export default function Home() {
  return (
    <div>
      <Hero
        imgSrc='/images/earth.webp'
        title='Junte-se à Hora do Planeta 2021.'
        description='No dia 27 de março, às 20h30, apague as luzes por uma hora, participe
          de um dos maiores eventos globais de conscientização ambiental.'
        linkText='Ler Mais'
        linkUrl='/nossa-missao'
      />

      <TextSection>
        <h1>Mas o que é ?</h1>
        <p>
          A Hora do Planeta surgiu em 2007 em Sydney, na Austrália, e logo
          ganhou o mundo. É uma ação simbólica: ao apagar as luzes uma vez por
          ano, por uma hora, você transmite a mensagem de que se importa e quer
          agir em prol do meio ambiente. <br /> Todos os anos, milhões de
          pessoas se unem ao movimento, que tem como objetivo conscientizar
          indivíduos, empresas e poder público a respeito dos dos desafios
          ambientais da atualidade, incluindo a crise climática e a perda da
          biodiversidade, e de como todos nós podemos fazer algo para reverter
          esse quadro e renovar nossa relação com a natureza. No Brasil, a Hora
          do Planeta acontece há 13 anos.
        </p>
      </TextSection>
      <Divider />
      <HighlightSection imgSrc='/images/phone.webp'>
        <h1>Participe onde você estiver.</h1>
        <p>
          Durante os anos, apagamos as luzes, de ruas inteiras ao redor do
          mundo, chamando a atenção para as mudanças climáticas. Porém, esse
          ano, te convidamos para espalhar a mesma mensagem e recriar o mesmo
          ambiente, online, através do Festival Digital Hora do Planeta.
        </p>
        <MainLink linkTo='/nossa-missao'>Ler Mais</MainLink>
      </HighlightSection>
      <Divider />
      <HighlightSection imgSrc='/images/candle.webp' direction='rtl'>
        <h1>Mais do que um apagar de luzes</h1>
        <p>
          O Poder da Hora do Planeta vêm das pessoas. Embora as circunstâncias
          globais sejam diferentes este ano devido à COVID-19, ainda temos uma
          oportunidade incrível de causar impacto online e de nossas casas.
        </p>
        <MainLink linkTo='/nossa-missao'>Ler Mais</MainLink>
      </HighlightSection>
      <Divider />
      <YoutubeLiveSection />
    </div>
  );
}
