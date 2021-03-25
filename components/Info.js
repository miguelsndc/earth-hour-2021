import React from 'react';

import TextSection from '../components/TextSection';
import HighlightSection from '../components/HighlightSection';
import Divider from '../components/Divider.js';
import Lights from '../components/Lights';
import YoutubeLiveSection from '../components/YoutubeLiveSection';
import CtaButton from './CtaButton';

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
      <Lights />
      <Divider />
      <YoutubeLiveSection />
    </>
  );
}

export default Info;
