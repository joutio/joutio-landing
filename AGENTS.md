# AGENTS.md — joutio-landing

## Rôle

Landing publique de Joutio (marketing, FAQ, Premium « bientôt » avec liste d'attente, contact, pages
légales, deep link `/join/{roomId}`). **Aucune logique métier** : le BFF reste la seule surface
applicative.

## Source de design

Les pages traduisent les pages validées du lab (`design/`, routes `/site/<id>`, specs
`design/specs/site/*.md`). Le mode d'emploi est **`design/specs/site-kit.md`** : à lire avant toute
modification visuelle. Un changement de design se fait d'abord dans le lab, puis se reporte ici.

## Stack

- Astro statique, TypeScript strict, **aucun framework UI ni JavaScript de framework côté client** :
  deux petits scripts (`src/scripts/site.ts` : thème et menu ; `forms.ts` : formulaires) et celui de
  `/join`.
- Tailwind v4 (`@tailwindcss/vite`) **au build** : les classes des composants du lab se reportent telles
  quelles, requêtes de conteneur comprises (`@3xl` = 768 px, `@5xl` = 1 024 px) sur la racine `.jo-site`.
  `cn()` (`src/lib/cn.ts`, tailwind-merge) comme dans le lab ; classes des boutons dans `src/lib/button.ts`.
- **Copiés tels quels depuis le lab, jamais modifiés ici** : `src/styles/tokens.css`
  (`design/tokens/tokens.web.css`), `src/styles/site.css`, `src/lib/button-styles.ts`,
  `public/brand/`, `public/site/avatars/`, `src/assets/captures/` (`npm run captures` dans le lab).
- Thème sombre par défaut (`data-theme` sur `<html>`), clair au choix, mémorisé
  (`localStorage` `joutio-site-theme`).
- Polices Geist Variable / Geist Mono Variable auto-hébergées (`public/fonts/`) ; icônes Phosphor en SVG
  au build (`@phosphor-icons/core`, `src/components/Icon.astro`).
- Visuels du hero : captures des écrans du lab, converties en WebP par `astro:assets`.
- Zéro cookie publicitaire, zéro analytics tiers par défaut.

## Conventions

- Une page = un fichier `src/pages/*.astro` ; un composant du lab = un `src/components/*.astro` du même nom.
- Contenu éditorial dans `src/data/` (pas de texte en dur dans les composants). Le lab en garde une copie :
  reporter un changement de texte dans `design/src/lab/fixtures/site.ts`.
- `BaseLayout` porte `title`, `description`, canonical, OG, JSON-LD et la page courante (`current`).
- Les formulaires sont progressifs : sans JavaScript, ils restent utilisables via `action`/`mailto` ;
  avec JavaScript, `data-form` gère validation, envoi et issue.
- Les pages légales incomplètes restent en `noindex` tant que les informations société ne sont pas
  fournies (`src/data/legal.ts`, `ready`).

## Commandes

`npm run dev`, `npm run build`, `npm run check`.

## À ne pas faire

- Ajouter un prix Premium, une pub ou un ATT tant que l'IAP n'est pas livré.
- Réintroduire une gestion presse (retirée le 2026-11-10) sans la concevoir d'abord dans le lab.
- Dupliquer les pages légales de `joutio-web` : la landing porte les URLs publiques `/terms`,
  `/privacy`, `/data-deletion` pour les stores. Mettre à jour les deux versions si un texte change.
- Committer une empreinte SHA-256 de keystore en clair : utiliser `ANDROID_SHA256` au build.
