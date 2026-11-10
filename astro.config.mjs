import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * Landing publique de Joutio — site statique, hébergé sur le k3s derrière
 * l'ingress `joutio.com` (voir devops/joutio-gitops).
 *
 * Les pages légales publiques (`/mentions-legales`, `/terms`, `/privacy`,
 * `/cookies`, `/data-deletion`) vivent ici, sur joutio.com. `app.joutio.com`
 * reste l'application ; les URLs légales des stores pointent vers ce site.
 *
 * Design : traduction des pages `/site/<id>` du lab (`design/specs/site-kit.md`). Tailwind v4 au build
 * seulement, pour reprendre telles quelles les classes des composants du lab ; aucun JavaScript de
 * framework côté client.
 */
export default defineConfig({
  site: "https://joutio.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/presse": "/contact/",
  },
});
