import React from 'react';

import TextSection from '../TextSection';
import HighlightSection from '../HighlightSection';
import Divider from '../Divider';
import ReverseHightlight from '../Lights';
import YoutubeLiveSection from '../YoutubeLiveSection';
import CtaButton from '../CtaButton';

function Info() {
  return (
    <>
      <TextSection>
        <h1>Mas o que é ?</h1>
        <p>
          A Hora do Planeta surgiu em 2007 em Sydney, na Austrália, e logo
          ganhou o mundo. É uma ação simbólica: ao apagar as luzes uma vez por
          ano, por uma hora, você transmite a mensagem de que se importa e quer
          agir em prol do meio ambiente.
        </p>
        <div>
          <p>
            Todos os anos, milhões de pessoas se unem ao movimento, que tem como
            objetivo conscientizar indivíduos, empresas e poder público a
            respeito dos dos desafios ambientais da atualidade, incluindo a
            crise climática e a perda da biodiversidade, e de como todos nós
            podemos fazer algo para reverter esse quadro e renovar nossa relação
            com a natureza. No Brasil, a Hora do Planeta acontece há 13 anos.
          </p>
        </div>
      </TextSection>
      <Divider />
      <HighlightSection bgImgPath="/images/phone.jpg">
        <h1>Participe onde você estiver.</h1>
        <p>
          Durante os anos, apagamos as luzes, de ruas inteiras ao redor do
          mundo, chamando a atenção para as mudanças climáticas. Porém, esse
          ano, te convidamos para espalhar a mesma mensagem e recriar o mesmo
          ambiente, online, através do Festival Digital Hora do Planeta.
        </p>
        <CtaButton linkTo="/nossa-missao">Ler Mais</CtaButton>
      </HighlightSection>
      <Divider />
      <ReverseHightlight bgImgPath="/images/candle.jpg">
        <h1>Mais do que um apagar de luzes</h1>
        <p>
          O Poder da Hora do Planeta vêm das pessoas. Embora as circunstâncias
          globais sejam diferentes este ano devido à COVID-19, ainda temos uma
          oportunidade incrível de causar impacto - online e de nossas casas.
          Não importa onde esteja no mundo, você pode falar pela natureza e
          chamar a atenção global para os grandes problemas que o nosso planeta
          enfrenta!
        </p>
        <CtaButton linkTo="/nossa-missao">Ler Mais</CtaButton>
      </ReverseHightlight>
      <Divider />
      <YoutubeLiveSection />
    </>
  );
}

export default Info;
