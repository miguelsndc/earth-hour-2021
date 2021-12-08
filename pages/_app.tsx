import '../styles/globals.css';

import { Layout } from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout metaTitle='Hora do Planeta 2021'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
