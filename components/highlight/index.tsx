import { ReactNode } from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  imgSrc: string;
  reversed?: boolean;
  alt?: string;
};

export const HighlightSection = ({
  children,
  imgSrc,
  reversed = false,
  alt,
}: Props) => {
  return (
    <section className={`${styles.container} `}>
      <div className={`${!reversed ? styles.content : styles.rtl}`}>
        {!reversed && <div className={styles.info}>{children}</div>}
        <Image
          src={imgSrc}
          width={1280}
          height={720}
          className={styles.img}
          alt={alt}
        />
        {reversed && <div className={styles.info}>{children}</div>}
      </div>
    </section>
  );
};
