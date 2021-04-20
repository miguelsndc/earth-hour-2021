import Head from 'next/head';

import React from 'react';

import Hero from '../../components/Hero';
import TextSection from '../../components/TextSection';
import HighlightSection from '../../components/HighlightSection';
import CtaButton from '../../components/CtaButton';
import Divider from '../../components/Divider';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Nossa Missão</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero bgImgPath={'/images/industry.jpg'}>
        <h1>Nossa missão</h1>
        <p>
          Aprende porquê nós começamos e descubra o porquê da nossa missão. no
          ano de 2021 suas ações importam mais do que nunca.
        </p>
      </Hero>
      <TextSection>
        <h1>Nossa História</h1>
        <p>
          Iniciado pela WWF e parceiros, como um apagão simbólico em Sidney no
          ano de 2007, A Hora do Planeta é agora um dos maiores movimentos de
          conscientização ambiental. Acontecendo todo último sábado de março,
          engaja milhões de pessoas em mais de 180 países e território,
          desligando suas luzes para mostrar suporte para o nosso planeta. Mas
          vai muito além da ação simbólica de desligar as luzas, a Hora do
          Planeta se tornou um catalizador de mudanças ambientais, levando a
          maiores mudanças legislativas, ao explorar o poder dar pessoas e das
          ações coletivas. A Hora do Planeta é um movimento aberto e todos são
          bem-vindos, para ajudar a ampliar nossa missão de unir as pessoas e
          proteger o planeta.
        </p>

        <p>
          Em 2007, encorajamos as pessoas ao redor do mundo a desligar suas
          luzes para chamar atenção para as mudanças climáticas. Mais de uma
          década depois, a crise climática perdura, agravada por outra ameaça: a
          perda rápida da biodiversidade. Ecossistemas naturais são vitais para
          o nosso futuro, e a perda dos últimos 50 anos é totalmente sem
          precedentes na história humana . A Natureza não só nos provém comida,
          água, ar limpo e outros serviços que valem mais de 125 trilhões de
          dólares ao ano, ela também é um dos nossos maiores aliados contra a
          mudança climática. Proteger a natureza é uma das soluções mais
          efetivas e imediatas para a crise climática . Hoje, a Hora do Planeta
          busca conscientizar e desencadear discussões globais para proteger a
          natureza não somente para combater a crise, mas para garantir a nossa
          própria saúde, felicidade, prosperidade e até mesmo sobrevivência.
        </p>
      </TextSection>
      <Divider />
      <HighlightSection bgImgPath="/images/united-nations.jpg">
        <h1>2021, O Ano que Importa.</h1>
        <p>
          2021 representa uma oportunidade imperdível para mudança. Em 2021,
          Líderes mundiais vão se reunir em conferências globais chave, e fóruns
          para decidir a agenda ambiental para a próxima década e além. Decisões
          políticas cruciais serão feitas, decisões essas que irão afetar
          diretamente o destino da humanidade e do planeta nos próximos anos.
          Com sua ajuda, a Hora do Planeta 2021 pode se tornar um holofote que
          colocará as questões ambientais como centro nos debates
          internacionais. Juntos, podemos falar e mostrar para os líderes
          globais e outras pessoas importantes que o meio-ambiente importa e
          ações urgentes devem ser tomadas para reverter as perdas.
        </p>
        <CtaButton linkTo="/os-problemas">Aprender Mais </CtaButton>
      </HighlightSection>
      <Divider />
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>Junte-se a Nós e Faça a Diferença.</h1>
        <CtaButton linkTo="/como-participar">Participar</CtaButton>
      </div>
    </div>
  );
}
