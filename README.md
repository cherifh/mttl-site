# MTTL — site web

Site vitrine (statique) pour MTTL, société de dédouanement, transport et consignation à Conakry, en Guinée.

Construit avec [Next.js](https://nextjs.org) 14 (App Router), TypeScript et Tailwind CSS, exporté en HTML/CSS/JS statique (`output: "export"`) pour pouvoir être déployé sur n'importe quel hébergement statique.

## Pages

- `/` — accueil
- `/a-propos` — à propos
- `/services` — détail des services (dédouanement, transport, consignation, services à valeur ajoutée)
- `/consignation` — page dédiée à la consignation d'armateurs
- `/contact` — contact

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Génère le site statique dans `out/` (prêt à être déployé tel quel).

## Lint

```bash
npm run lint
```

## Stack

- Next.js 14 / App Router
- TypeScript
- Tailwind CSS
- Export statique (pas de routes API, pas de rendu serveur)
