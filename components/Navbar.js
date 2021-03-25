import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 250) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.navbar} ${hasScrolled && styles.navbarActive}`}
    >
      <nav>
        <h1>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </h1>
        <ul>
          <li>A Missão</li>
          <li>Os Problemas</li>
          <li>Como Participar</li>
          <li>O que há de novo ?</li>
        </ul>
      </nav>
    </header>
  );
}
