import Head from 'next/head';
import { skills } from '../data/projects';
import styles from '../styles/Page.module.css';

// Page "À propos" : pages/about.js correspond à l'URL "/about".
export default function About() {
  return (
    <main className={styles.main}>
      <Head>
        <title>À propos — Bella</title>
      </Head>

      <h1 className={styles.title}>À propos</h1>
      <p className={styles.lead}>
        Je suis développeuse front-end. J&apos;aime créer des interfaces claires, accessibles et bien structurées.
        Je travaille principalement avec React et Next.js, et je m&apos;intéresse à la gestion d&apos;état et au
        routage.
      </p>

      <section className={styles.section}>
        <h2 className={styles.title}>Mes compétences</h2>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
