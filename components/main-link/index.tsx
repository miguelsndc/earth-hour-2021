import { ReactNode } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  linkTo?: string;
};

export const MainLink = ({ children, linkTo }: Props) => {
  return (
    <Link href={linkTo ?? '/'}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};
