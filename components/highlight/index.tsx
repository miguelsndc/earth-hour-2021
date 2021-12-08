import { ReactNode } from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  imgSrc: string;
  direction?: 'ltr' | 'rtl';
};

export const HighlightSection = ({
  children,
  imgSrc,
  direction = 'ltr',
}: Props) => {
  return (
    <section className={`${styles.container} `}>
      <div className={`${direction === 'ltr' ? styles.content : styles.rtl}`}>
        {direction === 'ltr' && <div className={styles.info}>{children}</div>}
        <Image src={imgSrc} width={1280} height={720} className={styles.img} />
        {direction === 'rtl' && <div className={styles.info}>{children}</div>}
      </div>
    </section>
  );
};
