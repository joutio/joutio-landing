# joutio-landing

Landing publique de Joutio — **Astro statique**, déployée sur le k3s derrière
`joutio.com` (GitOps : `devops/joutio-gitops`).

## Commandes

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run preview
npm run check
```

## Variables

Copier `.env.example` vers `.env` :

- `PUBLIC_WAITLIST_ENDPOINT` : endpoint de la liste d'attente Premium
  (Brevo/Resend/BFF). Vide ⇒ repli `mailto:contact@joutio.com`.
- `PUBLIC_CONTACT_ENDPOINT` : endpoint du formulaire de contact.
- `ANDROID_SHA256` : empreinte SHA-256 du keystore release, pour
  `/.well-known/assetlinks.json` (App Links Android).

## Structure

```
src/
  assets/         captures du hero (copiées du lab, WebP au build)
  components/     un composant par composant du site du lab (design/src/design-system/site)
  data/           contenu éditorial (FAQ, catégories, rangs, modes, légal)
  layouts/        BaseLayout (meta, OG, JSON-LD, en-tête, pied de page)
  lib/            cn, classes des boutons (button-styles.ts copié du lab)
  pages/          /, /premium, /faq, /a-propos, /contact, /mentions-legales, /terms,
                  /privacy, /cookies, /data-deletion, /join/[roomId], 404
  scripts/        site.ts (thème, menu), forms.ts (formulaires)
  styles/         tokens.css et site.css (copiés du lab), global.css
public/
  brand/          logo et cadres Elo (copiés du lab)
  site/avatars/   avatars des rangs (copiés du lab)
  fonts/          Geist + Geist Mono (latin, auto-hébergés)
  .well-known/    assetlinks.json (généré au build)
```

## Décisions produit

- **Rendu** : traduction des pages validées du lab (`design/`, `/site/<id>`), selon
  `design/specs/site-kit.md` (2026-11-10). Sombre par défaut, clair au choix.
- **Premium** : annoncé « bientôt », sans prix ni achat. Aucune pub, aucun ATT.
- **Téléchargement** : action principale de l'accueil, boutons App Store et Google Play
  (`STORE_LINKS` ; identifiant App Store à renseigner). La liste d'attente ne sert plus
  qu'à Premium.
- **Presse** : retirée (2026-11-10), « Contact » la remplace dans la navigation.
- **Légal** : `/mentions-legales`, `/terms`, `/privacy`, `/cookies` et
  `/data-deletion` sont servis par la landing, sur `joutio.com` — ce sont les
  URLs à déclarer aux stores. Les informations société restent à compléter.
- **App Links** : `joutio.com/join/{roomId}` ouvre l'app Android quand
  `ANDROID_SHA256` est configuré.

## Déploiement

Le build produit `dist/`. L'ingress k3s doit servir `joutio.com` et `www`
(redirection 301 vers l'apex) avec un certificat `letsencrypt-prod`.
Le DNS apex est encore chez OVH : il doit être repointé vers le cluster avant
la mise en ligne.
