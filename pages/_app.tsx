import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/PageFooter';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
