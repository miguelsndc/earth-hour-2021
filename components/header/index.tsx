import Link from 'next/link';
import Image from 'next/image';

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const navigation = [
  {
    key: 0,
    name: 'Home',
    path: '/',
  },
  {
    key: 1,
    name: 'A Missão',
    path: '/nossa-missao',
  },
  {
    key: 2,
    name: 'Os Problemas',
    path: '/os-problemas',
  },
  {
    key: 3,
    name: 'Como Participar',
    path: '/como-participar',
  },
  {
    key: 4,
    name: 'Como Mudar',
    path: '/10-coisas-que-podem-ser-feitas',
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const offsetTop = useRef(200);

  const topDistanceListener = () => {
    const scrolled = window.scrollY >= offsetTop.current;

    scrolled ? setHasScrolled(true) : setHasScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', topDistanceListener);

    return () => window.removeEventListener('scroll', topDistanceListener);
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const hideMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen && <div className={styles.overlay} onClick={hideMenu}></div>}

      <header
        className={`${styles.navbar} ${hasScrolled && styles.navbarActive}`}
      >
        <nav className={styles.menu}>
          <h1>
            <Link href='/'>
              <a>WWF</a>
            </Link>
          </h1>
          <button className={styles.openMenu} onClick={handleToggleMenu}>
            <Image src='/icons/menu.svg' width={36} height={36} />
          </button>

          <div
            className={`${styles.linkWrapper} ${
              menuOpen ? styles.openedLinkWrapper : styles.closedLinkWrapper
            }`}
          >
            {menuOpen && (
              <button className={styles.closeMenu} onClick={handleToggleMenu}>
                <Image src='/icons/close.svg' width={36} height={36} />
              </button>
            )}

            <ul>
              {navigation.map(link => (
                <li key={link.key} onClick={hideMenu}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
