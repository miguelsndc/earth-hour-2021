import React from 'react';

import styles from './Highlight.module.css';

export default function HighlightSection({ children, bgImgPath }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className="info">{children}</div>
        <div
          className={styles.img}
          style={{ backgroundImage: `url('${bgImgPath}')` }}
        ></div>
      </div>
    </section>
  );
}
