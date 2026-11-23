import Head from 'next/head';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import styles from '../../styles/Page.module.css';

// Liste de tous les projets : pages/projects/index.js correspond à "/projects".
// Rendu côté serveur avec getServerSideProps.
export async function getServerSideProps() {
  return { props: { projects } };
}

export default function Projects({ projects: list }) {
  return (
    <main className={styles.main}>
      <Head>
        <title>Projets — Bella</title>
      </Head>

      <h1 className={styles.title}>Mes projets</h1>
      <div className={styles.grid}>
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
