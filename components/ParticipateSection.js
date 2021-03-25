import React from 'react';

import styles from '../styles/Participate.module.css';
import CtaButton from './CtaButton';

export default function ParticipateSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className="info">
          <h1>Participe onde você estiver.</h1>
          <p>
            Durante os anos, apagamos as luzes, de ruas inteiras ao redor do
            mundo, chamando a atenção para as mudanças climáticas. Porém, esse
            ano, te convidamos para espalhar a mesma mensagem e recriar o mesmo
            ambiente, online, através do Festival Digital Hora do Planeta.
          </p>
          <CtaButton>Ler Mais</CtaButton>
        </div>
        <div className={styles.img}></div>
      </div>
    </section>
  );
}
