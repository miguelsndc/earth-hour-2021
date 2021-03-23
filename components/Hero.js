import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.info}>
        <h1>A Hora do Planeta</h1>
        <p>
          No dia 27 de março, às 20h30, apague as luzes por uma hora, participe
          de um dos maiores eventos globais de conscientização ambiental !
        </p>
        <button>Saber mais</button>
      </div>
    </section>
  );
}
