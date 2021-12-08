import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta
            name='description'
            content='Saiba mais sobre a Hora do Planeta 2021 e como participar!'
          />
          <meta
            name='keywords'
            content='planeta, hora do planeta, hora do planeta 2021, natureza, meio ambiente, poluição, desmatamento'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
