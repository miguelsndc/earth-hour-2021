import Image from 'next/image';
import { MainLink } from '../main-link';
import styles from './styles.module.css';

type Props = {
  imgSrc: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  alt?: string;
};

export const Hero = ({
  imgSrc,
  title,
  description,
  linkText,
  linkUrl,
  alt,
}: Props) => {
  return (
    <section className={styles.hero}>
      <img src={imgSrc} className={styles.img} alt={alt} />
      <div className={styles.overlay}></div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
        {linkText && linkUrl && (
          <MainLink linkTo={linkUrl}>{linkText}</MainLink>
        )}
      </div>
    </section>
  );
};
