import React from 'react';

import Image from 'next/image';

import styles from '../styles/PageFooter.module.css';

export default function PageFooter() {
  return (
    <footer className={styles.container}>
      <div className="col1">
        <ul>
          <li>
            <Image src="/images/dsadsa.png" width={90} height={50} />
          </li>
          <li> ETE Porto Digital</li>
          <li>
            <div className={styles.instagram}></div>@bio_ambiental
          </li>
          <li>
            <div className={styles.person}></div>Miguel Santos Nogueira da Costa
            2ºC
          </li>
        </ul>
      </div>
    </footer>
  );
}
