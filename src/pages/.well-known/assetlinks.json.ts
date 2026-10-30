import type { APIRoute } from "astro";

export const prerender = true;

/**
 * Android App Links : `https://joutio.com/join/{roomId}` doit ouvrir l'app.
 * L'empreinte SHA-256 du keystore release est fournie au build via
 * `ANDROID_SHA256` (jamais committée en clair).
 */
export const GET: APIRoute = () => {
  const sha256 = import.meta.env.ANDROID_SHA256?.trim();

  const body = sha256
    ? [
        {
          relation: ["delegate_permission/common.handle_all_urls"],
          target: {
            namespace: "android_app",
            package_name: "com.joutio.app",
            sha256_cert_fingerprints: [sha256],
          },
        },
      ]
    : [];

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
