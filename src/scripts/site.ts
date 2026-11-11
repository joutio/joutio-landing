/** Comportements de l'en-tête (`SiteHeader`) : thème clair / sombre et menu compact. */

const root = document.documentElement;

for (const toggle of document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]")) {
  const label = () => (root.dataset.theme === "light" ? "Passer en thème sombre" : "Passer en thème clair");
  toggle.setAttribute("aria-label", label());
  toggle.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("joutio-site-theme", next);
    } catch {
      // Stockage indisponible : le thème vaut pour la page.
    }
    toggle.setAttribute("aria-label", label());
  });
}

const header = document.querySelector<HTMLElement>("[data-site-header]");
const menu = document.getElementById("jo-site-menu");
const button = header?.querySelector<HTMLButtonElement>("[data-menu-toggle]");

if (header && menu && button) {
  const setOpen = (open: boolean) => {
    menu.hidden = !open;
    header.toggleAttribute("data-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    button.querySelector<HTMLElement>('[data-menu-icon="closed"]')!.hidden = open;
    button.querySelector<HTMLElement>('[data-menu-icon="open"]')!.hidden = !open;
  };
  button.addEventListener("click", () => setOpen(menu.hidden));
  menu.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      setOpen(false);
      button.focus();
    }
  });
}
