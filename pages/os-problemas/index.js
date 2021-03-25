import Head from 'next/head';

import React from 'react';

import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';

export default function index() {
  return (
    <div>
      <Head>
        <title>Os Problemas</title>
      </Head>
      <Navbar />
      <Hero bgImgPath="/images/deforestation.jpg">
        <h1>Aprenda sobre os problemas.</h1>
        <p>
          Aprenda mais sobre os problemas que o planeta está enfrentando, nossos
          desafios e o que eles representam.
        </p>
      </Hero>
    </div>
  );
}
