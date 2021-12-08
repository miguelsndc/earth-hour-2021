import Image from 'next/image';

import styles from './styles.module.css';

export const PageFooter = () => {
  return (
    <footer className={styles.container}>
      <div>
        <Image
          src='/icons/instagram.svg'
          width={20}
          height={20}
          alt='Instagram logo'
        />
        <span>@bio_ambiental</span>
      </div>
    </footer>
  );
};
