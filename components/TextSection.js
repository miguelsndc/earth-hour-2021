import React from 'react';
import styles from '../styles/definition.module.css';

export default function TextSection({ children }) {
  return <section className={styles.definition}>{children}</section>;
}
