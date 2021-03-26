import Head from 'next/head';

import React from 'react';
import Hero from '../../components/Hero';
import Divider from '../../components/Divider';
import HighlightSection from '../../components/HighlightSection';
import ReverseHighlight from '../../components/Lights';
import PageFooter from '../../components/PageFooter';
import Navbar from '../../components/Navbar';
import YoutubeLiveSection from '../../components/YoutubeLiveSection';
import CtaButton from '../../components/CtaButton';

export default function index() {
  return (
    <div>
      <Head>
        <title>Como Participar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero bgImgPath="/images/preserved.jpg">
        <h1>Saiba como Participar da Hora do Planeta 2021.</h1>
        <p>
          Saiba como participar do evento que pode mudar a nossa forma de viver
          nos próximos anos.
        </p>
      </Hero>
      <Divider />
      <HighlightSection bgImgPath="/images/multiple-candles.jpg">
        <h1>Desligue suas luzes.</h1>
        <p>
          Desligue as luzes da sua casa, convença as pessoas ao seu redor a
          fazer o mesmo, esta é a principal forma de participar da Hora do
          Planeta, chamar a atenção para a situação ambiental atual é o nosso
          objetivo.
        </p>
      </HighlightSection>
      <Divider />
      <YoutubeLiveSection />
      <Divider />
      <ReverseHighlight bgImgPath="/images/happiness.jpg">
        <h1>Mude seus hábitos.</h1>
        <p>
          Muito mais do que o festival, nosso movimento busca um mundo melhor,
          por isso, não se limite ao festival, leve isso pra sua vida, faça a
          diferença, e para fazer a diferença, a mudança deve começar de você
          por isso, veja 10 coisas que podem fazer a diferença no impacto da sua
          pegada ecológica.
        </p>
        <CtaButton linkTo="/10-coisas-que-podem-ser-feitas">
          Aprender Mais
        </CtaButton>
      </ReverseHighlight>
      <PageFooter />
    </div>
  );
}
