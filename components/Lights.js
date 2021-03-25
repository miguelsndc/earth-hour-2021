import React from 'react';

import styles from '../styles/Lights.module.css';
import CtaButton from './CtaButton';

export default function Lights() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img}></div>
        <div className={styles.info}>
          <h1>Mais do que um apagar de luzes</h1>
          <p>
            O Poder da Hora do Planeta vêm das pessoas. Embora as circunstâncias
            globais sejam diferentes este ano devido à COVID-19, ainda temos uma
            oportunidade incrível de causar impacto - online e de nossas casas.
            Não importa onde esteja no mundo, você pode falar pela natureza e
            chamar a atenção global para os grandes problemas que o nosso
            planeta enfrenta!
          </p>
          <CtaButton linkTo="/nossa-missao">Ler Mais</CtaButton>
        </div>
      </div>
    </section>
  );
}
