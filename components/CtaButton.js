import React from 'react';

import styles from '../styles/CtaButton.module.css';

export default function CtaButton({ children }) {
  return <button className={styles.button}>{children}</button>;
}
