import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero({ children, bgImgPath }) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url('${bgImgPath}')` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.info}>{children}</div>
    </section>
  );
}
