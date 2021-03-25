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
      <Hero bgImgPath="/images/fire.jpg">
        <h1>O que de fato é a mudança climática ?</h1>
        <p>
          Aprenda mais sobre os problemas que o planeta está enfrentando, nossos
          desafios e o que eles representam.
        </p>
      </Hero>
    </div>
  );
}
