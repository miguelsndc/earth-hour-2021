import React from 'react';

import styles from '../styles/YoutubeLiveSection.module.css';

export default function YoutubeLiveSection() {
  return (
    <section className={styles.container}>
      <h1>Participe da Live Oficial</h1>
      <p>
        Fique ligado na estreia do nosso vídeo, no dia 27 de março, que fará
        você enxergar uma nova luz no planeta. Então COMPARTILHE! cada pessoa
        importa, vamos fazer o mundo assistir, vamos fazer o mundo falar.
      </p>
      <iframe src="https://www.youtube.com/embed/hvBsgfn_cvY?mute=1"></iframe>
    </section>
  );
}
