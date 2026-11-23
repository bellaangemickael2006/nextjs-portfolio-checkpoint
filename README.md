# Next.js Portfolio - Checkpoint

Site portfolio construit avec Next.js (Pages Router) : compétences, projets et contact.

## Structure du projet

```
pages/            routes par fichier
  _app.js         composant racine (styles globaux + mise en page)
  index.js        accueil  -> /
  about.js        à propos -> /about
  contact.js      contact  -> /contact
  projects/
    index.js      liste    -> /projects
    [slug].js     détail   -> /projects/:slug (route dynamique)
components/       Layout, ProjectCard (+ leurs fichiers .module.css)
styles/           globals.css, Page.module.css
data/             projects.js (données des projets et compétences)
public/images/    images SVG (profil et projets)
```

## Ce qui est couvert

1. **Mise en route** : projet Next.js configuré à la main (`next`, `react`, `react-dom`), avec pages, composants et dossiers de styles.
2. **Style et images** : CSS Modules pour chaque composant et chaque page, variables CSS avec mode sombre. Les images passent par le composant `next/image`.
3. **Routage par fichier** : accueil, à propos, projets, détail d'un projet (route dynamique `[slug]`) et contact. La navigation se fait avec `next/link`.
4. **Rendu côté serveur** : `getServerSideProps` dans l'accueil, la liste des projets et la page de détail. La page de détail renvoie une 404 si le projet n'existe pas.

## Lancer le projet

```bash
npm install
npm run dev      # développement
npm run build    # build de production
npm start        # serveur de production (après build)
```

## À remplacer avant de soumettre

- Les coordonnées (`contact@example.com`) dans `pages/contact.js`.
- Les textes, compétences et projets dans `data/projects.js`.
- Les images SVG de `public/images/` par tes propres photos et captures.

## Déploiement

Le déploiement n'a pas encore été fait. Pour Vercel : importer le dépôt GitHub dans le tableau de bord Vercel, la commande de build `npm run build` est détectée automatiquement.
