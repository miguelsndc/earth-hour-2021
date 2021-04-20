import React from 'react';
import styles from './TextSection.module.css';

export default function TextSection({ children }) {
  return <section className={styles.definition}>{children}</section>;
}
