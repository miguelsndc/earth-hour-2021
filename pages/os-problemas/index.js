import Head from 'next/head';

import React from 'react';

import HighlightSection from '../../components/HighlightSection';
import ReverseHighlight from '../../components/Lights';
import TextSection from '../../components/TextSection';
import CtaButton from '../../components/CtaButton';
import Divider from '../../components/Divider';
import Navbar from '../../components/Navbar';
import PageFooter from '../../components/PageFooter';
import Hero from '../../components/Hero';

export default function index() {
  return (
    <div>
      <Head>
        <title>Os Problemas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero bgImgPath="images/fire.jpg">
        <h1>O que de fato é a mudança climática?</h1>
        <p>
          Aprenda mais sobre os problemas que o planeta está enfrentando, nossos
          desafios e o que eles representam.
        </p>
      </Hero>
      <TextSection>
        <h1>O que é a Mudança Climática ?</h1>
        <p>
          {' '}
          A Ciência é clara, a Mudança climática é real e está acontecendo neste
          momento. Ela requer ações imediatas para prevenir os piores efeitos
          que se pode ter nas pessoas e na vida selvagem ao redor do mundo.
        </p>
        <p>
          Nós sabemos que a temperatura do planeta aumentou cerca de 1ºC no
          último século. Existe um acordo global, que os aumentos de temperatura
          precisam ser mantidos abaixo de 2ºC. Porém estudos sugerem que estamos
          no caminho de aumentos de cerca 4ºC ou mais.
        </p>
        <p>
          Temos visto ultimamente uma série de desenvolvimentos indesejados:
        </p>
        <ul>
          <li>
            <p>
              {'>'} 16 dos 17 recordes de anos mais quentes ocorreram desde
              2001, sendo 2016 o ano mais quente até agora.
            </p>
          </li>
          <li>
            <p>
              {'>'} Os níveis atuais de concentração de gases do efeito estufa
              são sem precedentes nos últimos 800 mil anos.
            </p>
          </li>
          <li>
            <p>
              {'>'} E recentemente, cientistas declararam um novo período
              geológico: o Antropoceno, no qual a atividade humana é considerada
              a influência dominante no meio ambiente, no clima e na ecologia da
              Terra.
            </p>
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
      <HighlightSection bgImgPath="/images/polution.jpg">
        <h2 style={{ fontSize: '2.5rem' }}>
          O que causa o Aquecimento Global?
        </h2>
        <p>
          <ul>
            <li>
              <div>
                <h4>{'>'} Uso de combustíveis fósseis</h4>
                <p>
                  Ao longo dos últimos 150 anos, a indústria alterou o
                  equilíbrio do ciclo do carbono, ao queimar quantidades enormes
                  de combustíveis fósseis.
                </p>
              </div>
            </li>
            <li style={{ margin: '1rem 0' }}>
              <div>
                <h4>{'>'} Gado bovino e o Desmatamento</h4>
                <p>
                  Ao derrubar florestas, diminui-se a quantidade de agentes que
                  transformam o gás carbônico em oxigênio, e manter enormes
                  quantidades de cabeças de gado, se aumenta exponencialmente a
                  produção de metano, um gás tóxico, que contribui para o efeito
                  estufa
                </p>
              </div>
            </li>
          </ul>
        </p>
      </HighlightSection>
      <Divider />
      <ReverseHighlight bgImgPath="/images/meltedIce.jpg">
        <h1>Como você pode ajudar ?</h1>
        <p>
          Os desafios que estamos enfrentando só aumentam e parecem
          assustadores, mas todos podemos fazer alguma coisa.
        </p>
        <CtaButton linkTo="10-coisas-que-podem-ser-feitas">Ler Mais</CtaButton>
      </ReverseHighlight>
      <Divider />
      <PageFooter />
    </div>
  );
}
