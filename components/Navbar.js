import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileBreakpoint = 840;
  const offsetTop = 100;

  function handleScroll() {
    if (window.scrollY >= offsetTop) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  function activateMobileMenu() {
    if (window.innerWidth <= mobileBreakpoint) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }

    if (isMenuOpen && window.innerWidth >= mobileBreakpoint) {
      setIsMenuOpen(false);
    }

    if (!hasScrolled && isMenuOpen) {
      console.log('DSAOFOFDAOU');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= mobileBreakpoint) {
      setIsMenuMobile(true);
    }

    window.addEventListener('resize', activateMobileMenu);
    return () => {
      window.removeEventListener('resize', activateMobileMenu);
    };
  }, []);

  function DesktopMenu() {
    return (
      <nav>
        <h1>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </h1>
        <ul>
          <Link href="/nossa-missao">
            <li>A Missão</li>
          </Link>
          <Link href="/os-problemas">
            <li>Os Problemas</li>
          </Link>
          <Link href="/como-participar">
            <li>Como Participar</li>
          </Link>
        </ul>
      </nav>
    );
  }

  function MobileMenu() {
    return (
      <nav className={styles.mobileNav}>
        <Link href="/">
          <h1>logo</h1>
        </Link>

        <div
          className={styles.openMenuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></div>
        {isMenuOpen && (
          <>
            <div
              className={styles.overlay}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></div>
            <aside className={styles.mobileMenu}>
              <div>
                <div className={styles.closeMenuWrapper}>
                  <h1>
                    <Link href="/">
                      <a>Logo</a>
                    </Link>
                  </h1>
                  <div
                    className={styles.closeMenuIcon}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  ></div>
                </div>
                <ul>
                  <Link href="/nossa-missao">
                    <li>A Missão</li>
                  </Link>
                  <Link href="/os-problemas">
                    <li>Os Problemas</li>
                  </Link>
                  <Link href="/como-participar">
                    <li>Como Participar</li>
                  </Link>
                </ul>
              </div>
            </aside>
          </>
        )}
      </nav>
    );
  }

  return (
    <header
      className={`${styles.navbar} ${hasScrolled && styles.navbarActive}`}
    >
      {isMenuMobile ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
}
