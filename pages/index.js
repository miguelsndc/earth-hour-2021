import Head from 'next/head';
import Hero from '../components/Hero';
import KnowMore from '../components/KnowMore';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hora do Planeta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <KnowMore />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}
