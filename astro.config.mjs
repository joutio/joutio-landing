import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Landing publique de Joutio — site statique, hébergé sur le k3s derrière
 * l'ingress `joutio.com` (voir devops/joutio-gitops).
 *
 * Les pages légales restent la source de vérité de `joutio-web` pour le
 * moment : `/privacy`, `/terms` et `/data-deletion` redirigent vers
 * `app.joutio.com`. Les mentions légales et la page cookies vivent ici.
 */
export default defineConfig({
  site: "https://joutio.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [sitemap()],
  redirects: {
    "/privacy": "https://app.joutio.com/privacy",
    "/terms": "https://app.joutio.com/terms",
    "/data-deletion": "https://app.joutio.com/data-deletion",
  },
});
