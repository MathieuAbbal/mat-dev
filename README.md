# Mat-dev

Site portfolio de Mathieu Abbal - Développeur Full Stack Angular & SIG chez Nanogis.

## Stack

![Astro](https://img.shields.io/badge/Astro_6-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MapLibre](https://img.shields.io/badge/MapLibre_GL-305DAA?style=for-the-badge&logo=maplibre&logoColor=white)

## Fonctionnalités

- Dark / Light mode avec persistance
- Carte MapLibre interactive (lazy-loaded) avec 14 fonds de carte et vue 3D terrain
- Bloc de code décoratif avec coloration syntaxique
- Animations d'apparition au scroll (fade-in, stagger)
- Effet de typing rotatif sur le Hero
- Formulaire de contact natif (backend Google Forms)
- Indicateur de section active dans la navigation
- Responsive mobile-first
- SEO complet (Open Graph, Twitter Cards, JSON-LD)

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Déploiement

Déployé automatiquement sur GitHub Pages via GitHub Actions au push sur `main`.

Le workflow (`.github/workflows/deploy.yml`) :
1. Installe les dépendances (`npm ci`)
2. Build le site Astro (`npm run build`)
3. Déploie le dossier `dist/` sur GitHub Pages
