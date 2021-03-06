import { MainLink } from '..';
import styles from './styles.module.css';

export const YoutubeLiveSection = () => (
  <section className={styles.container}>
    <h1>Participe da Live Oficial</h1>
    <p>
      Fique ligado na estreia do nosso vídeo, no dia 27 de março, que fará você
      enxergar uma nova luz no planeta. Então COMPARTILHE! cada pessoa importa,
      vamos fazer o mundo assistir, vamos fazer o mundo falar.
    </p>
    <MainLink linkTo='https://www.youtube.com/watch?v=hvBsgfn_cvY'>
      Participe aqui
    </MainLink>
  </section>
);
