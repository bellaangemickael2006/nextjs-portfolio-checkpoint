import Link from 'next/link';
import styles from './Layout.module.css';

// Mise en page commune à toutes les pages : en-tête avec navigation, contenu, pied de page.
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          Bella
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>© {new Date().getFullYear()} Bella — Portfolio</footer>
    </>
  );
}
