import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
};

export const TextSection = ({ children }: Props) => (
  <article className={styles.definition}>{children}</article>
);
