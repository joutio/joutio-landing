/**
 * Contenu éditorial du site, source du texte en production. Le lab en garde une copie
 * (`design/src/lab/fixtures/site.ts`) pour valider les pages : un changement de texte se fait ici, puis
 * se reporte dans le lab.
 */

export const SITE = {
  name: "Joutio",
  title: "Joutio, le quiz qui se joue à deux",
  description:
    "Défie tes amis en duel de sept questions. Dix secondes pour répondre, un adversaire, un classement. Sur iOS, Android et le web.",
  url: "https://joutio.com",
  appUrl: "https://app.joutio.com",
  email: "contact@joutio.com",
  locale: "fr_FR",
} as const;

/** Identifiant App Store à renseigner avant la publication iOS. */
export const STORE_LINKS = {
  appStore: "https://apps.apple.com/app/joutio",
  googlePlay: "https://play.google.com/store/apps/details?id=com.joutio.app",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: readonly NavItem[] = [
  { label: "Comment jouer", href: "/" },
  { label: "Premium", href: "/premium/" },
  { label: "FAQ", href: "/faq/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Contact", href: "/contact/" },
];

export const CTA: NavItem = { label: "Télécharger l'app", href: "/#telecharger" };

export const HERO = {
  eyebrow: "Quiz en duel · iOS, Android, web",
  title: ["Sept questions.", "Dix secondes."],
  accent: "Un adversaire.",
  lede: "Choisis un sujet, défie un ami ou un joueur au hasard, et vois en direct qui répond le plus vite. Chaque victoire te rapproche du rang suivant.",
} as const;

export const STEPS = [
  {
    title: "Choisis un sujet",
    text: "17 univers et des sujets précis : rois de France, films de Miyazaki, Pokémon de la première génération.",
  },
  {
    title: "Réponds en dix secondes",
    text: "10 points par bonne réponse, jusqu’à 10 de plus pour la vitesse. La 7e question compte double.",
  },
  {
    title: "Vois qui a choisi quoi",
    text: "À chaque question, la réponse de ton adversaire s’affiche à côté de la tienne. Pas de doute sur qui a gagné la manche.",
  },
] as const;

export type Tier = "FER" | "BRONZE" | "ARGENT" | "OR" | "PLATINE" | "EMERAUDE" | "DIAMANT";

/** Rangs et seuils d'Elo, repris de `design/tokens/tokens.json` ; avatars exportés par `npm run captures`. */
export const RANKS: readonly { tier: Tier; label: string; minElo: number; name: string }[] = [
  { tier: "FER", label: "Fer", minElo: 0, name: "Lucas" },
  { tier: "BRONZE", label: "Bronze", minElo: 400, name: "Inès" },
  { tier: "ARGENT", label: "Argent", minElo: 600, name: "Hugo" },
  { tier: "OR", label: "Or", minElo: 800, name: "Manon" },
  { tier: "PLATINE", label: "Platine", minElo: 1000, name: "Yanis" },
  { tier: "EMERAUDE", label: "Émeraude", minElo: 1200, name: "Kenji" },
  { tier: "DIAMANT", label: "Diamant", minElo: 1400, name: "Sofia" },
];

export const RANK_FACTS = [
  { icon: "medal", text: "Des badges par familles et paliers" },
  { icon: "flag-banner", text: "Un titre par sujet maîtrisé" },
  { icon: "trophy", text: "Un classement par sujet" },
] as const;

/** Univers, libellés et icônes de `design/tokens/tokens.json`. */
export const CATEGORIES = [
  { code: "SPORTS", label: "Sport", icon: "volleyball" },
  { code: "EDUCATION", label: "Éducation", icon: "graduation-cap" },
  { code: "SCIENCE", label: "Science", icon: "flask" },
  { code: "TECHNOLOGY", label: "Technologie", icon: "cpu" },
  { code: "ENTERTAINMENT", label: "Divertissement", icon: "star" },
  { code: "LITERATURE", label: "Littérature", icon: "book-open-text" },
  { code: "ARTS", label: "Arts", icon: "palette" },
  { code: "MUSIC", label: "Musique", icon: "headphones" },
  { code: "MOVIES", label: "Cinéma", icon: "film-slate" },
  { code: "TELEVISION", label: "Télévision", icon: "television-simple" },
  { code: "FOOD_AND_DRINK", label: "Gastronomie", icon: "pizza" },
  { code: "HISTORY", label: "Histoire", icon: "bank" },
  { code: "GAMES", label: "Jeux", icon: "game-controller" },
  { code: "NATURE", label: "Nature", icon: "leaf" },
  { code: "BUSINESS", label: "Business", icon: "briefcase" },
  { code: "WORLD", label: "Monde", icon: "globe-hemisphere-west" },
  { code: "GENERAL", label: "Culture générale", icon: "lightbulb" },
] as const;

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export const MODES: readonly Feature[] = [
  { icon: "globe-hemisphere-west", title: "Joueur au hasard", text: "Un adversaire de ton niveau en quelques secondes. La partie compte pour ton Elo." },
  { icon: "user-plus", title: "Défier un ami", text: "Choisis un joueur que tu suis. Il a une heure pour accepter." },
  { icon: "link", title: "Salon privé", text: "Partage un lien ou un QR code, jouez dès que vous êtes deux." },
  { icon: "robot", title: "Entraînement", text: "Contre le bot, en facile, normal ou difficile. Sans Elo en jeu." },
];

export interface Plan {
  name: string;
  /** Jamais de prix Premium tant que l'achat intégré n'est pas livré. */
  price: string;
  badge?: string;
  highlight?: boolean;
  items: readonly { text: string; included: boolean }[];
}

export const PLANS: readonly Plan[] = [
  {
    name: "Gratuit",
    price: "0 €",
    items: [
      { text: "Tous les sujets, tous les modes", included: true },
      { text: "Elo, badges, titres et classements", included: true },
      { text: "Défis et salons ouverts", included: true },
      { text: "Publicité entre les parties, plus tard", included: false },
    ],
  },
  {
    name: "Premium",
    price: "—",
    badge: "Bientôt",
    highlight: true,
    items: [
      { text: "Aucune publicité", included: true },
      { text: "Plus de défis et de salons ouverts", included: true },
      { text: "Statistiques par sujet et revue de toutes tes parties", included: true },
      { text: "Aucun avantage en duel", included: true },
    ],
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  group: string;
  items: FaqItem[];
}

const DUEL: FaqItem = {
  q: "Comment se déroule un duel ?",
  a: "Sept questions de dix secondes. Une bonne réponse vaut 10 points, plus jusqu’à 10 points de vitesse. La septième question compte double. Le maximum est de 160 points.",
};
const FREE: FaqItem = {
  q: "Joutio est-il gratuit ?",
  a: "Oui. Tous les sujets et tous les modes sont gratuits pendant le lancement. Une offre Premium arrivera plus tard : elle retirera la publicité et élargira les limites, sans aucun avantage en duel.",
};
const ELO: FaqItem = {
  q: "Comment fonctionne l’Elo ?",
  a: "Chaque duel classé fait monter ou baisser ton Elo selon le niveau de ton adversaire. Tu passes de Fer à Diamant, et ton cadre d’avatar change à chaque rang. Les 10 premières parties sont provisoires.",
};
const LOGIN: FaqItem = {
  q: "Comment je me connecte ?",
  a: "Avec ton adresse e-mail : on t’envoie un code, sans mot de passe. Google et Facebook fonctionnent aussi.",
};

export const FAQ_HOME: readonly FaqItem[] = [DUEL, FREE, ELO, LOGIN];

export const FAQ: FaqGroup[] = [
  {
    group: "Jouer",
    items: [
      DUEL,
      {
        q: "Comment je vois ce qu’a répondu mon adversaire ?",
        a: "À la fin de chaque question, sa réponse s’affiche en vert ou en rouge, avec une encoche à droite. La tienne porte l’encoche à gauche.",
      },
      { q: "Que se passe-t-il si je quitte un duel ?", a: "L’abandon donne la victoire à ton adversaire et compte comme une défaite dans ton Elo." },
    ],
  },
  {
    group: "Progression",
    items: [
      ELO,
      {
        q: "Quelle différence entre badges et titres ?",
        a: "Les badges récompensent des exploits (réponses rapides, séries). Les titres récompensent ta maîtrise d’un sujet ; tu en affiches un sous ton pseudo.",
      },
    ],
  },
  {
    group: "Compte et abonnement",
    items: [FREE, LOGIN, { q: "Comment supprimer mon compte ?", a: "Réglages, Zone de danger, Supprimer mon compte. C’est immédiat et définitif." }],
  },
];

export const PREMIUM = {
  eyebrow: "Premium",
  title: "Joue sans pub, défie qui tu veux.",
  lede: "Premium arrive bientôt. Il retirera la publicité et élargira les limites de défis et de salons. Il ne change rien aux duels : même chrono, mêmes questions, même Elo.",
} as const;

export const ABOUT = {
  eyebrow: "À propos",
  title: "Un quiz où l’on joue contre quelqu’un, pas contre une liste.",
  lede: "Joutio est né d’une envie simple : retrouver la tension d’un duel de culture générale entre amis, sur téléphone, en une minute. Pas de vies, pas d’énergie à recharger. Une question, dix secondes, et quelqu’un en face.",
  values: [
    { icon: "pencil-simple-line", title: "Des questions vérifiées", text: "Chaque sujet est relu avant publication. Une erreur se signale en un geste depuis l’écran de résultat." },
    { icon: "scales", title: "Un jeu équitable", text: "Le chrono est tenu par le serveur, pas par ton téléphone. Premium ne donne aucun avantage en duel." },
    { icon: "shield-check", title: "Peu de données", text: "Pas de mot de passe, pas de vente de données. Ton compte se supprime depuis les réglages, immédiatement." },
  ] satisfies Feature[],
  band: "Une idée de sujet, une question, un partenariat ?",
} as const;

export const CONTACT_SUBJECTS = ["Support", "Partenariat", "Signaler une erreur"] as const;

export const FOOTER_LINKS: readonly { title: string; links: readonly NavItem[] }[] = [
  {
    title: "Jouer",
    links: [
      { label: "iOS", href: STORE_LINKS.appStore },
      { label: "Android", href: STORE_LINKS.googlePlay },
      { label: "Web", href: SITE.appUrl },
      { label: "Premium", href: "/premium/" },
    ],
  },
  {
    title: "Joutio",
    links: [
      { label: "À propos", href: "/a-propos/" },
      { label: "Contact", href: "/contact/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
  {
    title: "Juridique",
    links: [
      { label: "Mentions légales", href: "/mentions-legales/" },
      { label: "Conditions d’utilisation", href: "/terms/" },
      { label: "Confidentialité", href: "/privacy/" },
      { label: "Cookies", href: "/cookies/" },
      { label: "Suppression des données", href: "/data-deletion/" },
    ],
  },
];

export const FOOTER_NOTE = "© 2026 Joutio. Sans cookie publicitaire ni mesure d’audience tierce.";
