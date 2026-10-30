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

- `PUBLIC_WAITLIST_ENDPOINT` : endpoint du formulaire de liste d'attente
  (Brevo/Resend/BFF). Vide ⇒ repli `mailto:contact@joutio.com`.
- `PUBLIC_CONTACT_ENDPOINT` : endpoint du formulaire de contact.
- `ANDROID_SHA256` : empreinte SHA-256 du keystore release, pour
  `/.well-known/assetlinks.json` (App Links Android).

## Structure

```
src/
  components/     header, footer, waitlist, blocs de section
  data/           contenu éditorial (FAQ, catégories, rangs, modes, légal)
  layouts/        BaseLayout (meta, OG, JSON-LD)
  pages/          /, /a-propos, /faq, /premium, /contact (+ section Presse),
                  /mentions-legales, /cookies, /join/[roomId], 404
  styles/         tokens.css (source : design/tokens.json), global.css
public/
  fonts/          Geist + Geist Mono (latin, auto-hébergés)
  logo-*.svg      marque
  .well-known/    assetlinks.json (généré au build)
```

## Décisions produit

- **Rendu** : reprise du thème sombre de `design/Joutio Site.dc.html` (data-theme="dark"),
  tokens, Geist, icônes Phosphor, avatars de démonstration DiceBear locaux.
- **Premium** : annoncé « bientôt », sans prix ni achat. Aucune pub, aucun ATT.
- **Téléchargement** : liste d'attente (l'APK reste distribué séparément aux
  testeurs). Les boutons « Télécharger » / badges store ouvrent la boîte de dialogue
  de liste d'attente, pas un store.
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
