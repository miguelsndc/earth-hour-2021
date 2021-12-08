import '../styles/globals.css';

import { Layout } from '../components/';

function MyApp({ Component, pageProps }) {
  return (
    <Layout metaTitle='Hora do Planeta 2021'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
