// Données des projets affichés sur le portfolio.
// Remplace ces textes et ces images par tes propres projets.
export const projects = [
  {
    slug: 'incident-desk',
    title: 'Incident Desk',
    summary: 'Application de gestion des incidents avec suivi des tickets.',
    description:
      "Un outil pour créer, suivre et clôturer des incidents. Il permet de filtrer les tickets par statut et d'ajouter des commentaires.",
    image: '/images/project1.svg',
    tags: ['Next.js', 'React', 'CSS Modules'],
  },
  {
    slug: 'todo-redux',
    title: 'ToDo avec Redux',
    summary: 'Liste de tâches avec filtres et modification en ligne.',
    description:
      'Application ToDo construite avec Redux Toolkit pour gérer l’état global. Les tâches peuvent être ajoutées, cochées, modifiées et filtrées.',
    image: '/images/project2.svg',
    tags: ['React', 'Redux Toolkit'],
  },
  {
    slug: 'movie-app',
    title: 'Mon cinéma',
    summary: 'Catalogue de films avec description et bande-annonce.',
    description:
      'Application React Router qui affiche une liste de films, une page de description et une page de bande-annonce intégrée.',
    image: '/images/project3.svg',
    tags: ['React', 'React Router', 'Vite'],
  },
];

export const skills = ['JavaScript', 'React', 'Next.js', 'Redux', 'TypeScript', 'CSS'];
