import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

// Carte d'un projet : image, titre, résumé, technologies et lien vers la page du projet.
export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <Image
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        width={600}
        height={380}
        unoptimized
        className={styles.image}
      />
      <div className={styles.body}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Link href={`/projects/${project.slug}`}>Voir le projet →</Link>
      </div>
    </article>
  );
}
