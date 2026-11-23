import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { projects, skills } from '../data/projects';
import styles from '../styles/Page.module.css';

// Page d'accueil (routage par fichier : pages/index.js correspond à "/").
// getServerSideProps s'exécute sur le serveur à chaque requête : c'est le rendu côté serveur (SSR).
export async function getServerSideProps() {
  return {
    props: {
      featured: projects.slice(0, 2),
      renderedAt: new Date().toISOString(),
    },
  };
}

export default function Home({ featured, renderedAt }) {
  return (
    <main className={styles.main}>
      <Head>
        <title>Bella — Portfolio</title>
        <meta name="description" content="Portfolio de Bella : compétences, projets et contact." />
      </Head>

      <section className={styles.hero}>
        <Image
          src="/images/profile.svg"
          alt="Photo de profil de Bella"
          width={220}
          height={220}
          unoptimized
        />
        <div>
          <h1 className={styles.title}>Bonjour, je suis Bella</h1>
          <p className={styles.lead}>Développeuse front-end qui construit des interfaces avec React et Next.js.</p>
          <Link className={styles.button} href="/projects">
            Voir mes projets
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Compétences</h2>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Projets récents</h2>
        <div className={styles.grid}>
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <p className={styles.lead}>Page générée côté serveur le {new Date(renderedAt).toLocaleString('fr-FR')}.</p>
    </main>
  );
}
