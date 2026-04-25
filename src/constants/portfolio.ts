export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  link?: string;
}

export interface Skill {
  name: string;
  label: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Application SIG",
    description:
      "Plateforme cartographique interactive pour la visualisation et l'édition de données géographiques en temps réel. Gestion de couches, filtres spatiaux et export de données.",
    tags: ["Angular", "MapLibre", "RxJS"],
    icon: "sig",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord décisionnel avec graphiques interactifs, KPIs temps réel et rapports exportables pour le suivi d'activité et l'aide à la décision.",
    tags: ["Angular", "Chart.js", "LoopBack"],
    icon: "dashboard",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "API REST Géospatiale",
    description:
      "Architecture back-end pour la gestion de données géospatiales : endpoints CRUD, requêtes spatiales, agrégation MongoDB et authentification.",
    tags: ["LoopBack", "MongoDB", "Node.js"],
    icon: "api",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Géo-CRM",
    description:
      "Outil de gestion de la relation client géolocalisé. Visualisation des clients sur carte, suivi des interactions et pilotage commercial avec composants cartographiques avancés.",
    tags: ["Angular", "MapLibre", "LoopBack", "MongoDB"],
    icon: "geocrm",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "HubEau",
    description:
      "Application cartographique interactive pour explorer les données ouvertes sur l'eau en France via les API Hub'Eau. Projet personnel open source.",
    tags: ["TypeScript", "MapLibre", "Hub'Eau API"],
    icon: "sig",
    gradient: "from-cyan-500 to-blue-600",
    link: "https://mathieuabbal.github.io/HubEau/",
  },
  {
    title: "Superviseur NanoGIS",
    description:
      "Extranet sécurisé de supervision d'infrastructure. Monitoring des logs SGBD (MongoDB, PostgreSQL), gestion des jobs cron, backups Swift, dashboard de métriques et authentification 2FA avec RBAC.",
    tags: ["Angular", "LoopBack", "MongoDB", "2FA"],
    icon: "supervisor",
    gradient: "from-rose-500 to-red-600",
  },
];

export const SKILLS: Skill[] = [
  { name: "Angular", label: "Framework" },
  { name: "TypeScript", label: "Langage" },
  { name: "RxJS", label: "Réactif" },
  { name: "MapLibre", label: "Cartographie" },
  { name: "Chart.js", label: "Visualisation" },
  { name: "LoopBack", label: "API Backend" },
  { name: "MongoDB", label: "Base de données" },
  { name: "Node.js", label: "Runtime" },
];

export const OTHER_SKILLS: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind CSS",
  "Express.js",
  "Git",
  "GitHub",
  "VS Code",
  "Studio 3T",
  "ClickUp",
];
