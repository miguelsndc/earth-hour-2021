import Head from 'next/head';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/navbar';
import PageFooter from '../components/PageFooter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hora do Planeta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Info />
      <PageFooter />
    </div>
  );
}
