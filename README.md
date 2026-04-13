# Intermicronational Art Gallery 2026 — "First Impression"

An online gallery showcasing artworks from the Intermicronational Art Gallery 2026, themed **"First Impression"** — from a private thought to a public reality.

**Live site:** [gallery.sakorn.com](https://gallery.sakorn.com)

## Tech Stack

- [Astro](https://astro.build/) v6
- [Tailwind CSS](https://tailwindcss.com/) v4
- TypeScript
- Fonts: Playfair Display, Inter, Roboto Mono

## Project Structure

```text
src/
├── components/        # Reusable UI components
│   ├── ArtworkCard.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── Navigation.astro
│   └── VibeFilter.astro
├── data/
│   └── artworks.ts    # Artwork data & types
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro    # Home page
│   ├── about.astro    # About the gallery
│   └── gallery/
│       ├── index.astro   # Gallery grid
│       └── [id].astro    # Artwork detail page
├── styles/
│   └── global.css
public/
└── artworks/          # Artwork image files
```

## Getting Started

```sh
npm install
npm run dev
```

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |

## Submit Artwork

All submissions are accepted via Discord. Join the server and post your work in the **#cultural-exhibition** channel.

**Discord:** [discord.gg/FjNDTaxrz](https://discord.gg/FjNDTaxrz)
