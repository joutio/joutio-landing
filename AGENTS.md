# AGENTS.md — joutio-landing

## Rôle

Landing publique de Joutio (marketing, FAQ, premium « bientôt », waitlist,
pages légales, deep link `/join/{roomId}`). **Aucune logique métier** : le BFF
reste la seule surface applicative.

## Stack

- Astro statique, TypeScript strict, aucune UI framework côté client.
- Tokens : `src/styles/tokens.css` (source `design/tokens.json`), **thème sombre par
  défaut** (`data-theme="dark"`), thème clair conservé pour les surfaces institutionnelles.
- Polices Geist/Geist Mono auto-hébergées (`public/fonts/`), icônes Phosphor
  (`public/icons/`), avatars de démonstration DiceBear locaux (`public/avatars/`).
- Zéro cookie publicitaire, zéro analytics tiers par défaut.

## Conventions

- Une page = un fichier `src/pages/*.astro`.
- Contenu éditorial dans `src/data/` (pas de texte en dur dans les composants).
- `BaseLayout` porte `title`, `description`, canonical, OG et JSON-LD.
- Les formulaires sont progressifs : sans JavaScript, ils restent utilisables
  via `action`/`mailto` ; avec JavaScript, `data-form` gère l'état.
- Les pages légales incomplètes restent en `noindex` tant que les informations
  société ne sont pas fournies.

## Commandes

`npm run dev`, `npm run build`, `npm run check`.

## À ne pas faire

- Ajouter un prix Premium, une pub ou un ATT tant que l'IAP n'est pas livré.
- Dupliquer les pages légales de `joutio-web` : la landing porte les URLs
  publiques `/terms`, `/privacy`, `/data-deletion` pour les stores. Mettre à
  jour les deux versions si un texte change.
- Committer une empreinte SHA-256 de keystore en clair : utiliser
  `ANDROID_SHA256` au build.
