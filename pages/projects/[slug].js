import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import styles from '../../styles/Page.module.css';

// Route dynamique : pages/projects/[slug].js correspond à "/projects/nom-du-projet".
// getServerSideProps lit le paramètre slug dans l'URL et envoie le bon projet à la page.
export async function getServerSideProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}

export default function ProjectPage({ project }) {
  return (
    <main className={styles.main}>
      <Head>
        <title>{project.title} — Bella</title>
      </Head>

      <h1 className={styles.title}>{project.title}</h1>
      <Image
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        width={600}
        height={380}
        unoptimized
        style={{ width: '100%', height: 'auto', borderRadius: 12 }}
      />
      <p className={styles.lead}>{project.description}</p>
      <ul className={styles.skills}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <p>
        <Link href="/projects">← Retour aux projets</Link>
      </p>
    </main>
  );
}
