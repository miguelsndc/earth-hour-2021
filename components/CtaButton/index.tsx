import Link from 'next/link';
import React from 'react';

import styles from './CtaButton.module.css';

export default function CtaButton({ children, linkTo }) {
  return (
    <Link href={linkTo ?? '/'}>
      <a>
        <button className={styles.button}>{children}</button>
      </a>
    </Link>
  );
}
