import '../styles/globals.css';
import Layout from '../components/Layout';

// Composant racine : applique les styles globaux et la mise en page à toutes les pages.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
