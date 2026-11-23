import Head from 'next/head';
import styles from '../styles/Page.module.css';

// Page de contact : pages/contact.js correspond à "/contact".
// Les coordonnées sont fictives : remplace-les par les tiennes.
export default function Contact() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Contact — Bella</title>
      </Head>

      <h1 className={styles.title}>Contact</h1>
      <p className={styles.lead}>Une question ou une opportunité ? Écris-moi.</p>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = encodeURIComponent(`Contact depuis le portfolio : ${data.get('name')}`);
          const body = encodeURIComponent(data.get('message') || '');
          window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
        }}
      >
        <input name="name" type="text" placeholder="Ton nom" required />
        <input name="email" type="email" placeholder="Ton e-mail" required />
        <textarea name="message" rows={5} placeholder="Ton message" required />
        <button className={styles.button} type="submit">
          Envoyer
        </button>
      </form>

      <p className={styles.lead}>
        Ou directement : <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
    </main>
  );
}
