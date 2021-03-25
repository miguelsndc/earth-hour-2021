import Head from 'next/head';
import CtaButton from '../components/CtaButton';
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
      <Hero bgImgPath={`/images/earth.jpg`}>
        <h1>Junte-se à Hora do Planeta 2021.</h1>
        <p>
          No dia 27 de março, às 20h30, apague as luzes por uma hora, participe
          de um dos maiores eventos globais de conscientização ambiental.
        </p>

        <CtaButton linkTo="/nossa-missao">Ler Mais</CtaButton>
      </Hero>
      <Info />
      <PageFooter />
    </div>
  );
}
