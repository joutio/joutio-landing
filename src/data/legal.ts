/**
 * Informations légales de la landing.
 *
 * `ready` reste à false tant que les informations société ne sont pas fournies :
 * les pages concernées sont alors en `noindex` et affichent un avertissement.
 * Remplir les champs ci-dessous, puis passer `ready` à true.
 */
export const LEGAL = {
  ready: false,
  updatedAt: "30 octobre 2026",
  entity: "[Raison sociale]",
  legalForm: "[Forme juridique]",
  capital: "[montant]",
  siren: "[SIREN]",
  rcs: "[ville]",
  address: "[adresse complète]",
  director: "[Directeur de publication]",
  host: "[Hébergeur — nom, adresse, téléphone]",
  contactEmail: "contact@joutio.com",
  dpoEmail: "contact@joutio.com",
  appUrl: "https://app.joutio.com",
} as const;
