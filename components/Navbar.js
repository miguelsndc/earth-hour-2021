import React from 'react';
import styles from '../styles/Navbar.module.css';

export default function navbar() {
  return (
    <header className={styles.navbar}>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>Sobre</li>
          <li>Participe</li>
          <li>O que é ?</li>
        </ul>
      </nav>
    </header>
  );
}
