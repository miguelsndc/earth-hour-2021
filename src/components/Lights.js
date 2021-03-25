import React from 'react';

import styles from '../styles/Lights.module.css';

export default function Lights({ children, bgImgPath }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url('${bgImgPath}')` }}
        ></div>
        <div className={styles.info}>{children}</div>
      </div>
    </section>
  );
}
