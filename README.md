# Maltina — Premium Frontend Developer Portfolio

A premium, production-ready portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to position you as an expert frontend engineer with exceptional UI/UX craftsmanship.

## Features

- **Premium dark-first design** with optional light mode
- **Smooth animations** — page loader, scroll progress, micro-interactions, staggered reveals
- **Fully responsive** — desktop, tablet, and mobile optimized
- **SEO-friendly** — meta tags, semantic HTML, accessibility best practices
- **Modular architecture** — reusable components, centralized data, custom hooks
- **Performance optimized** — Vite build, minimal dependencies, fast load times

## Sections

1. Hero — Professional headline, stats, code visual, tech marquee
2. About — Philosophy cards (clean code, performance, accessibility, UX)
3. Skills — Bento-style skill grid with spotlight hover effects
4. Projects — Premium showcase cards with achievements and tech stacks
5. Experience — Timeline with impact metrics
6. Education — Degrees and certifications
7. Contact — Form with social links

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

## Customization

All content lives in a single data file:

```
src/data/portfolio.js
```

Update your name, bio, skills, projects, experience, education, and social links there.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI primitives
├── context/          # Theme provider
├── data/             # Portfolio content
├── hooks/            # Custom React hooks
├── App.jsx
├── main.jsx
└── index.css         # Design system & utilities
```

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React
- react-helmet-async

## Contact Form

The form currently shows a success state on submit. Connect it to [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or your own API endpoint for production use.
