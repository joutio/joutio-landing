export const SITE = {
  name: "Joutio",
  title: "Joutio, le quiz qui se joue à deux",
  description:
    "Défie tes amis en duel de sept questions. Dix secondes pour répondre, un adversaire, un classement. Android d'abord, iOS ensuite.",
  url: "https://joutio.com",
  appUrl: "https://app.joutio.com",
  email: "contact@joutio.com",
  pressEmail: "presse@joutio.com",
  locale: "fr_FR",
} as const;

export const NAV = [
  { label: "Comment jouer", href: "/#comment-jouer" },
  { label: "Premium", href: "/premium/" },
  { label: "FAQ", href: "/faq/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Presse", href: "/contact/#presse" },
] as const;

export const STEPS = [
  {
    title: "Choisis un sujet",
    text: "17 univers et des sujets précis : rois de France, films de Miyazaki, Pokémon de la première génération.",
  },
  {
    title: "Réponds en dix secondes",
    text: "10 points par bonne réponse, jusqu'à 10 de plus pour la vitesse. La 7e question compte double.",
  },
  {
    title: "Vois qui a choisi quoi",
    text: "À chaque question, la réponse de ton adversaire s'affiche à côté de la tienne. Pas de doute sur qui a gagné la manche.",
  },
] as const;

export const RANKS = [
  { name: "Fer", min: 0, elo: "départ", tier: "FER", seed: "Lucas", bg: "d1d4f9", labelColor: "var(--jo-text)" },
  { name: "Bronze", min: 400, elo: "400 Elo", tier: "BRONZE", seed: "Ines", bg: "ffd5dc", labelColor: "color-mix(in oklab, #B86A32 75%, var(--jo-text))" },
  { name: "Argent", min: 600, elo: "600 Elo", tier: "ARGENT", seed: "Hugo", bg: "c0e8ff", labelColor: "color-mix(in oklab, #8C95A3 75%, var(--jo-text))" },
  { name: "Or", min: 800, elo: "800 Elo", tier: "OR", seed: "Manon", bg: "ffd9a0", labelColor: "color-mix(in oklab, #D9A826 75%, var(--jo-text))" },
  { name: "Platine", min: 1000, elo: "1 000 Elo", tier: "PLATINE", seed: "Yanis", bg: "e3d4ff", labelColor: "color-mix(in oklab, #8C9FC9 75%, var(--jo-text))" },
  { name: "Émeraude", min: 1200, elo: "1 200 Elo", tier: "EMERAUDE", seed: "Kenji", bg: "c9f2e3", labelColor: "color-mix(in oklab, #2FBF77 75%, var(--jo-text))" },
  { name: "Diamant", min: 1400, elo: "1 400 Elo", tier: "DIAMANT", seed: "Sofia", bg: "e3d4ff", labelColor: "color-mix(in oklab, #5DB4E2 75%, var(--jo-text))" },
] as const;

export const CATEGORIES = [
  { code: "SPORTS", label: "Sport", color: "var(--jo-cat-sports)", icon: "ph-volleyball" },
  { code: "EDUCATION", label: "Éducation", color: "var(--jo-cat-education)", icon: "ph-graduation-cap" },
  { code: "SCIENCE", label: "Science", color: "var(--jo-cat-science)", icon: "ph-flask" },
  { code: "TECHNOLOGY", label: "Technologie", color: "var(--jo-cat-technology)", icon: "ph-cpu" },
  { code: "ENTERTAINMENT", label: "Divertissement", color: "var(--jo-cat-entertainment)", icon: "ph-star" },
  { code: "LITERATURE", label: "Littérature", color: "var(--jo-cat-literature)", icon: "ph-book-open-text" },
  { code: "ARTS", label: "Arts", color: "var(--jo-cat-arts)", icon: "ph-palette" },
  { code: "MUSIC", label: "Musique", color: "var(--jo-cat-music)", icon: "ph-headphones" },
  { code: "MOVIES", label: "Cinéma", color: "var(--jo-cat-movies)", icon: "ph-film-slate" },
  { code: "TELEVISION", label: "Télévision", color: "var(--jo-cat-television)", icon: "ph-television-simple" },
  { code: "FOOD_AND_DRINK", label: "Gastronomie", color: "var(--jo-cat-food)", icon: "ph-pizza" },
  { code: "HISTORY", label: "Histoire", color: "var(--jo-cat-history)", icon: "ph-bank" },
  { code: "GAMES", label: "Jeux", color: "var(--jo-cat-games)", icon: "ph-game-controller" },
  { code: "NATURE", label: "Nature", color: "var(--jo-cat-nature)", icon: "ph-leaf" },
  { code: "BUSINESS", label: "Business", color: "var(--jo-cat-business)", icon: "ph-briefcase" },
  { code: "WORLD", label: "Monde", color: "var(--jo-cat-world)", icon: "ph-globe-hemisphere-west" },
  { code: "GENERAL", label: "Culture générale", color: "var(--jo-cat-general)", icon: "ph-lightbulb" },
] as const;

export const MODES = [
  {
    icon: "ph-globe-hemisphere-west",
    title: "Joueur au hasard",
    text: "Un adversaire de ton niveau en quelques secondes. La partie compte pour ton Elo.",
  },
  {
    icon: "ph-user-plus",
    title: "Défier un ami",
    text: "Choisis un joueur que tu suis. Il a une heure pour accepter.",
  },
  {
    icon: "ph-link",
    title: "Salon privé",
    text: "Partage un lien ou un QR code, jouez dès que vous êtes deux.",
  },
  {
    icon: "ph-robot",
    title: "Entraînement",
    text: "Contre le bot, en facile, normal ou difficile. Sans Elo en jeu.",
  },
] as const;

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  group: string;
  items: FaqItem[];
}

export const FAQ: FaqGroup[] = [
  {
    group: "Jouer",
    items: [
      {
        q: "Comment se déroule un duel ?",
        a: "Sept questions de dix secondes. Une bonne réponse vaut 10 points, plus jusqu'à 10 points de vitesse. La septième question compte double. Le maximum est de 160 points.",
      },
      {
        q: "Comment je vois ce qu'a répondu mon adversaire ?",
        a: "À la fin de chaque question, sa réponse s'affiche en vert ou en rouge, avec une encoche à droite. La tienne porte l'encoche à gauche.",
      },
      {
        q: "Que se passe-t-il si je quitte un duel ?",
        a: "L'abandon donne la victoire à ton adversaire et compte comme une défaite dans ton Elo.",
      },
    ],
  },
  {
    group: "Progression",
    items: [
      {
        q: "Comment fonctionne l'Elo ?",
        a: "Chaque duel classé fait monter ou baisser ton Elo selon le niveau de ton adversaire. Tu passes de Fer à Diamant, et ton cadre d'avatar change à chaque rang. Les 10 premières parties sont provisoires.",
      },
      {
        q: "Quelle différence entre badges et titres ?",
        a: "Les badges récompensent des exploits (réponses rapides, séries). Les titres récompensent ta maîtrise d'un sujet ; tu en affiches un sous ton pseudo.",
      },
    ],
  },
  {
    group: "Compte et abonnement",
    items: [
      {
        q: "Joutio est-il gratuit ?",
        a: "Oui. Tous les sujets et tous les modes sont gratuits pendant le lancement. Une offre Premium arrivera plus tard : elle retirera la publicité et élargira les limites, sans aucun avantage en duel.",
      },
      {
        q: "Comment je me connecte ?",
        a: "Avec ton adresse e-mail : on t'envoie un code, sans mot de passe. Google et Facebook fonctionnent aussi.",
      },
      {
        q: "Comment supprimer mon compte ?",
        a: "Réglages, Zone de danger, Supprimer mon compte. C'est immédiat et définitif.",
      },
    ],
  },
];

export const FOOTER_LINKS = [
  {
    title: "Jouer",
    links: [
      { label: "iOS", href: "/#waitlist" },
      { label: "Android", href: "/#waitlist" },
      { label: "Web", href: SITE.appUrl },
      { label: "Premium", href: "/premium/" },
    ],
  },
  {
    title: "Joutio",
    links: [
      { label: "À propos", href: "/a-propos/" },
      { label: "Presse", href: "/contact/#presse" },
      { label: "Contact", href: "/contact/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
  {
    title: "Juridique",
    links: [
      { label: "Mentions légales", href: "/mentions-legales/" },
      { label: "Conditions d'utilisation", href: "/terms/" },
      { label: "Confidentialité", href: "/privacy/" },
      { label: "Cookies", href: "/cookies/" },
      { label: "Suppression des données", href: "/data-deletion/" },
    ],
  },
] as const;
